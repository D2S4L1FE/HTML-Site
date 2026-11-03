"""Independent checks for the original mathematics question batch."""
import json
import unittest
from collections import Counter
from pathlib import Path

BATCH_PATH = Path(__file__).parent / "incoming" / "original-math-practice.json"


class GeneratedQuestionBankTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.batch = json.loads(BATCH_PATH.read_text(encoding="utf-8"))
        cls.questions = cls.batch["questions"]

    def test_track_counts_and_unique_prompts(self):
        counts = Counter(item["examStandard"] for item in self.questions)
        self.assertEqual(counts, {"waec": 150, "neco": 150, "jamb": 150, "gcse": 150})
        prompts = [(item["examStandard"], item["question"]) for item in self.questions]
        self.assertEqual(len(prompts), len(set(prompts)))
        self.assertEqual(len({item["topic"] for item in self.questions}), 15)

    def test_choices_and_keys(self):
        for item in self.questions:
            with self.subTest(question=item["question"]):
                self.assertEqual(len(item["answers"]), 4)
                self.assertEqual(len({answer.casefold() for answer in item["answers"]}), 4)
                self.assertIn(item["correct"], range(4))
                self.assertEqual(str(item["answerValue"]), item["answers"][item["correct"]])
                self.assertTrue(item["fact"].strip())
                self.assertEqual(item["subject"], "math")

    def test_original_content_release_metadata(self):
        source = self.batch["source"]
        self.assertEqual(source["license"], "CC0-1.0")
        self.assertIn("original", source["title"].lower())
        self.assertIn("creativecommons.org/publicdomain/zero", source["url"])

    def test_topic_variety(self):
        expected = {
            "arithmetic", "fractions_and_decimals", "percentages", "ratio_and_proportion",
            "algebra", "sequences", "geometry", "mensuration", "statistics", "probability",
            "rates_and_motion", "number_and_indices", "sets_and_logic", "financial_mathematics",
            "coordinates_and_graphs",
        }
        for exam in ("waec", "neco", "jamb", "gcse"):
            with self.subTest(exam=exam):
                track_questions = [q for q in self.questions if q["examStandard"] == exam]
                self.assertEqual({q["topic"] for q in track_questions}, expected)
                self.assertEqual(Counter(q["topic"] for q in track_questions), {topic: 10 for topic in expected})


if __name__ == "__main__":
    unittest.main()
