"""Build Word-compatible .docx files from the question-bank Markdown sources.

Uses only Python's standard library. Pass one or more Markdown source files;
multiple sources are combined in the order given. The output defaults to a
.docx next to the first source file.
"""

from __future__ import annotations

import argparse
import re
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
ET.register_namespace("w", W)
ET.register_namespace("r", R)


def tag(name: str) -> str:
    return f"{{{W}}}{name}"


def xml_text(parent: ET.Element, name: str, text: str) -> ET.Element:
    element = ET.SubElement(parent, tag(name))
    element.text = text
    return element


def add_run(paragraph: ET.Element, text: str, *, bold: bool = False, italic: bool = False) -> None:
    run = ET.SubElement(paragraph, tag("r"))
    props = ET.SubElement(run, tag("rPr"))
    if bold:
        ET.SubElement(props, tag("b"))
    if italic:
        ET.SubElement(props, tag("i"))
    fonts = ET.SubElement(props, tag("rFonts"))
    fonts.set(tag("ascii"), "Aptos")
    fonts.set(tag("hAnsi"), "Aptos")
    xml_text(run, "t", text)


def add_markdown_runs(paragraph: ET.Element, text: str) -> None:
    # Support the small inline-markdown subset used by the source files.
    pattern = re.compile(r"(\*\*.*?\*\*|\*.*?\*)")
    cursor = 0
    for match in pattern.finditer(text):
        if match.start() > cursor:
            add_run(paragraph, text[cursor:match.start()])
        token = match.group(0)
        if token.startswith("**"):
            add_run(paragraph, token[2:-2], bold=True)
        else:
            add_run(paragraph, token[1:-1], italic=True)
        cursor = match.end()
    if cursor < len(text):
        add_run(paragraph, text[cursor:])


def add_paragraph(body: ET.Element, text: str, style: str | None = None) -> None:
    paragraph = ET.SubElement(body, tag("p"))
    if style:
        ppr = ET.SubElement(paragraph, tag("pPr"))
        style_element = ET.SubElement(ppr, tag("pStyle"))
        style_element.set(tag("val"), style)
    add_markdown_runs(paragraph, text)


def markdown_document(source: str) -> bytes:
    document = ET.Element(tag("document"))
    body = ET.SubElement(document, tag("body"))
    previous_heading_level = 0

    for raw_line in source.splitlines():
        line = raw_line.strip()
        if not line:
            continue
        heading = re.match(r"^(#{1,3})\s+(.+)$", line)
        if heading:
            level = len(heading.group(1))
            title = heading.group(2).strip()
            if level == 1:
                style = "Title" if previous_heading_level == 0 else "Heading1"
            else:
                style = f"Heading{level}"
            add_paragraph(body, title, style)
            previous_heading_level = level
            continue

        if line == "---":
            continue
        if line.startswith("|"):
            # Curriculum tables are not part of the final exam banks; preserve rows readably.
            add_paragraph(body, line.replace("|", "   |   "))
            continue
        line = re.sub(r"^\s*[-*]\s+", "• ", line)
        line = re.sub(r"^\d+\.\s+", "", line) if line.startswith("   ") else line
        line = re.sub(r"\s+", " ", line)
        add_paragraph(body, line)

    sect_pr = ET.SubElement(body, tag("sectPr"))
    page_size = ET.SubElement(sect_pr, tag("pgSz"))
    page_size.set(tag("w"), "12240")
    page_size.set(tag("h"), "15840")
    margins = ET.SubElement(sect_pr, tag("pgMar"))
    for key, value in (("top", "1080"), ("right", "1080"), ("bottom", "1080"), ("left", "1080")):
        margins.set(tag(key), value)
    return ET.tostring(document, encoding="utf-8", xml_declaration=True)


def styles_xml() -> bytes:
    styles = ET.Element(tag("styles"))
    defaults = ET.SubElement(styles, tag("docDefaults"))
    rpr_default = ET.SubElement(defaults, tag("rPrDefault"))
    rpr = ET.SubElement(rpr_default, tag("rPr"))
    fonts = ET.SubElement(rpr, tag("rFonts"))
    fonts.set(tag("ascii"), "Aptos")
    fonts.set(tag("hAnsi"), "Aptos")
    size = ET.SubElement(rpr, tag("sz"))
    size.set(tag("val"), "22")

    for name, size_value, color in (("Normal", "22", "243247"), ("Title", "36", "173B67"),
                                    ("Heading1", "30", "173B67"), ("Heading2", "26", "245A8D"),
                                    ("Heading3", "23", "245A8D")):
        style = ET.SubElement(styles, tag("style"))
        style.set(tag("type"), "paragraph")
        style.set(tag("styleId"), name.replace(" ", ""))
        xml_text(style, "name", name)
        ppr = ET.SubElement(style, tag("pPr"))
        spacing = ET.SubElement(ppr, tag("spacing"))
        spacing.set(tag("before"), "180" if name.startswith("Heading") else "0")
        spacing.set(tag("after"), "100")
        srpr = ET.SubElement(style, tag("rPr"))
        s_size = ET.SubElement(srpr, tag("sz"))
        s_size.set(tag("val"), size_value)
        s_color = ET.SubElement(srpr, tag("color"))
        s_color.set(tag("val"), color)
        if name != "Normal":
            ET.SubElement(srpr, tag("b"))
    return ET.tostring(styles, encoding="utf-8", xml_declaration=True)


def package_docx(source_paths: list[Path], output_path: Path, document_title: str | None = None) -> None:
    content_types = b'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>'''
    root_rels = b'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>'''
    document_rels = b'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>'''

    output_path.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(output_path, "w", zipfile.ZIP_DEFLATED) as docx:
        docx.writestr("[Content_Types].xml", content_types)
        docx.writestr("_rels/.rels", root_rels)
        docx.writestr("word/_rels/document.xml.rels", document_rels)
        combined_source = "\n\n".join(path.read_text(encoding="utf-8") for path in source_paths)
        if document_title:
            combined_source = f"# {document_title}\n\n{combined_source}"
        docx.writestr("word/document.xml", markdown_document(combined_source))
        docx.writestr("word/styles.xml", styles_xml())


def main() -> None:
    parser = argparse.ArgumentParser(description="Convert a question-bank Markdown source to DOCX.")
    parser.add_argument("source", type=Path, nargs="+", help="Markdown sources to convert and combine")
    parser.add_argument("--output", type=Path, help="Output .docx path (defaults beside source)")
    parser.add_argument("--title", help="Optional title heading for the combined document")
    args = parser.parse_args()
    missing = [source for source in args.source if not source.is_file()]
    if missing:
        parser.error(f"source does not exist: {missing[0]}")
    output = args.output or args.source[0].with_suffix(".docx")
    package_docx(args.source, output, args.title)
    print(f"Created {output}")


if __name__ == "__main__":
    main()
