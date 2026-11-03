"""Generate original, deterministic exam-style mathematics practice items.

These questions are written from parameterized templates, not extracted or
copied from examination papers. They are released for unrestricted reuse under
CC0. The exam names indicate practice style only, not endorsement or syllabus
validation.
"""
from __future__ import annotations

import json
import random
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "incoming" / "original-math-practice.json"
LICENSE_URL = "https://creativecommons.org/publicdomain/zero/1.0/"
TRACKS = {
    "waec": {"seed": 4101, "max": 30, "label": "WAEC-style"},
    "neco": {"seed": 4102, "max": 32, "label": "NECO-style"},
    "jamb": {"seed": 4103, "max": 48, "label": "JAMB/UTME-style"},
    "gcse": {"seed": 4104, "max": 36, "label": "GCSE-style"},
}
TOPIC_NAMES = [
    "arithmetic", "fractions_and_decimals", "percentages", "ratio_and_proportion",
    "algebra", "sequences", "geometry", "mensuration", "statistics", "probability",
    "rates_and_motion", "number_and_indices", "sets_and_logic", "financial_mathematics",
    "coordinates_and_graphs",
]


def choices_for(answer: int, rng: random.Random) -> tuple[list[str], int]:
    candidates = {answer}
    offsets = [1, -1, 2, -2, 3, -3, 5, -5, 10, -10, 12, -12, 15, -15, 20, -20]
    rng.shuffle(offsets)
    for offset in offsets:
        candidate = answer + offset
        if candidate >= 0:
            candidates.add(candidate)
        if len(candidates) >= 4:
            break
    while len(candidates) < 4:
        candidates.add(answer + rng.randint(1, 30))
    options = list(candidates)
    rng.shuffle(options)
    return [str(value) for value in options], options.index(answer)


def make_item(exam: str, index: int, rng: random.Random, maximum: int) -> dict:
    topic = TOPIC_NAMES[(index - 1) % len(TOPIC_NAMES)]
    context = rng.choice(["school", "community", "market", "journey", "garden", "club"])

    if topic == "arithmetic":
        a, b = rng.randint(25, maximum * 10), rng.randint(10, maximum * 5)
        operation = index % 4
        if operation == 0:
            answer, prompt, explanation = a + b, f"A {context} records {a} items on Monday and {b} on Tuesday. How many items are recorded altogether?", f"Add the two amounts: {a} + {b} = {a + b}."
        elif operation == 1:
            a = max(a, b) + rng.randint(5, 25)
            answer, prompt, explanation = a - b, f"A {context} has {a} units and uses {b}. How many units remain?", f"Subtract the amount used: {a} − {b} = {a - b}."
        elif operation == 2:
            a, b = rng.randint(3, maximum), rng.randint(3, 12)
            answer, prompt, explanation = a * b, f"There are {a} groups with {b} items in each. How many items are there?", f"Multiply groups by items per group: {a} × {b} = {a * b}."
        else:
            divisor = rng.randint(2, 12)
            answer = rng.randint(5, maximum) * divisor
            prompt, explanation = f"Share {answer} items equally among {divisor} groups. How many items are in each group?", f"Divide equally: {answer} ÷ {divisor} = {answer // divisor}."
            answer //= divisor
        category = "ARITHMETIC"

    elif topic == "fractions_and_decimals":
        denominator = rng.choice([4, 5, 8, 10, 20, 25, 50, 100])
        numerator = rng.randint(1, denominator - 1)
        multiplier = denominator * rng.randint(2, maximum)
        answer = numerator * multiplier // denominator
        prompt = f"Find {numerator}/{denominator} of {multiplier}."
        explanation = f"Divide {multiplier} by {denominator}, then multiply by {numerator}: {multiplier} ÷ {denominator} × {numerator} = {answer}."
        category = "FRACTIONS AND DECIMALS"

    elif topic == "percentages":
        percent = rng.choice([5, 8, 10, 12, 15, 20, 25, 30, 40, 50, 75])
        base = rng.choice([n for n in range(100, maximum * 100 + 1, 100)])
        answer = base * percent // 100
        scenario = rng.choice([
            f"A {context} has {base} participants. {percent}% are present. How many are present?",
            f"A product priced at {base} currency units receives a {percent}% discount. What is the discount amount?",
            f"A {context} completes {percent}% of a {base}-unit task. How many units are completed?",
        ])
        prompt = scenario
        explanation = f"Calculate {percent}% of {base}: {base} × {percent}/100 = {answer}."
        category = "PERCENTAGES"

    elif topic == "ratio_and_proportion":
        left, right = rng.randint(1, 8), rng.randint(1, 9)
        unit = rng.randint(2, maximum)
        total = (left + right) * unit
        answer = left * unit
        prompt = f"A total of {total} items is shared in the ratio {left}:{right}. How many items are in the first share?"
        explanation = f"There are {left + right} ratio parts. Each part is {total} ÷ {left + right} = {unit}; the first share is {left} × {unit} = {answer}."
        category = "RATIO AND PROPORTION"

    elif topic == "algebra":
        form = index % 3
        value = rng.randint(2, maximum)
        if form == 0:
            coefficient, constant = rng.randint(2, 7), rng.randint(2, 20)
            result = coefficient * value + constant
            prompt = f"Solve {coefficient}x + {constant} = {result}."
            explanation = f"Subtract {constant} to get {coefficient}x = {result - constant}; divide by {coefficient}, so x = {value}."
        elif form == 1:
            coefficient, constant = rng.randint(2, 7), rng.randint(1, 18)
            result = coefficient * (value - constant)
            prompt = f"Solve {coefficient}(x − {constant}) = {result}."
            explanation = f"Divide by {coefficient}: x − {constant} = {value - constant}; therefore x = {value}."
        else:
            constant = rng.randint(2, 20)
            prompt = f"If y = {value}, find y² − {constant}."
            explanation = f"Substitute y = {value}: {value}² − {constant} = {value * value} − {constant} = {value * value - constant}."
        answer = value if form < 2 else value * value - constant
        category = "ALGEBRA"

    elif topic == "sequences":
        first, step, term = rng.randint(1, 20), rng.randint(2, 12), rng.randint(5, 12)
        answer = first + (term - 1) * step
        prompt = f"An arithmetic sequence begins {first}, {first + step}, {first + 2 * step}, … What is its {term}th term?"
        explanation = f"The common difference is {step}. The {term}th term is {first} + ({term} − 1) × {step} = {answer}."
        category = "SEQUENCES"

    elif topic == "geometry":
        if index % 2:
            a, b = rng.randint(25, 75), rng.randint(25, 75)
            while a + b >= 160:
                b = rng.randint(25, 75)
            answer = 180 - a - b
            prompt = f"Two angles in a triangle are {a}° and {b}°. Find the third angle."
            explanation = f"Angles in a triangle total 180°: 180° − {a}° − {b}° = {answer}°."
        else:
            angle = rng.choice([35, 40, 48, 55, 62, 70, 75, 110, 125, 140])
            answer = 180 - angle
            prompt = f"Two adjacent angles on a straight line are supplementary. One is {angle}°. Find the other angle."
            explanation = f"Angles on a straight line total 180°: 180° − {angle}° = {answer}°."
        category = "GEOMETRY"

    elif topic == "mensuration":
        form = index % 3
        if form == 0:
            length, width = rng.randint(8, maximum), rng.randint(4, maximum)
            answer = length * width
            prompt = f"A rectangular plot is {length} m long and {width} m wide. Find its area."
            explanation = f"Area of a rectangle = length × width = {length} × {width} = {answer} m²."
        elif form == 1:
            side = rng.randint(5, maximum)
            answer = 4 * side
            prompt = f"Find the perimeter of a square with side length {side} cm."
            explanation = f"A square has four equal sides: perimeter = 4 × {side} = {answer} cm."
        else:
            base, height = rng.randint(6, maximum), rng.randint(4, maximum)
            answer = base * height // 2
            prompt = f"A triangle has base {base} cm and perpendicular height {height} cm. Find its area."
            explanation = f"Area = 1/2 × base × height = 1/2 × {base} × {height} = {answer} cm²."
        category = "MENSURATION"

    elif topic == "statistics":
        middle = rng.randint(5, maximum)
        spread = rng.randint(2, 12)
        values = [middle - spread, middle, middle + spread]
        answer = middle
        prompt = f"Find the mean of {values[0]}, {values[1]}, and {values[2]}."
        explanation = f"Mean = ({values[0]} + {values[1]} + {values[2]}) ÷ 3 = {answer}."
        category = "STATISTICS"

    elif topic == "probability":
        red, blue = rng.randint(2, 9), rng.randint(2, 9)
        while red == blue:
            blue = rng.randint(2, 9)
        total = red + blue
        prompt = f"A bag contains {red} red counters and {blue} blue counters. What is the probability of choosing a red counter at random?"
        answer = f"{red}/{total}"
        answers = [answer, f"{blue}/{total}", f"1/{red}", f"{total}/{red}"]
        prompt_explanation = f"Probability = favourable outcomes ÷ total outcomes = {red} ÷ {total} = {red}/{total}."
        correct = 0
        rng.shuffle(answers)
        correct = answers.index(answer)
        category = "PROBABILITY"
        return {
            "examStandard": exam, "subject": "math", "category": f"{TRACKS[exam]['label'].upper()} · {category}",
            "question": prompt, "answers": answers, "correct": correct, "answerValue": answer,
            "fact": prompt_explanation, "topic": topic,
        }

    elif topic == "rates_and_motion":
        speed, hours = rng.randint(12, maximum), rng.randint(2, 8)
        answer = speed * hours
        prompt = f"A vehicle travels at a constant speed of {speed} km/h for {hours} hours. How far does it travel?"
        explanation = f"Distance = speed × time = {speed} × {hours} = {answer} km."
        category = "RATES AND MOTION"

    elif topic == "number_and_indices":
        if index % 2:
            base, power = rng.randint(2, 8), rng.randint(2, 4)
            answer = base ** power
            prompt = f"Evaluate {base}^{power}."
            explanation = f"{base}^{power} means {base} multiplied by itself {power} times, which equals {answer}."
        else:
            square = rng.randint(2, 20)
            answer = square
            prompt = f"Find the positive square root of {square * square}."
            explanation = f"{square} × {square} = {square * square}, so the positive square root is {square}."
        category = "NUMBER AND INDICES"

    elif topic == "sets_and_logic":
        if index % 2:
            a, b = rng.randint(8, 30), rng.randint(8, 30)
            overlap = rng.randint(2, min(a, b))
            answer = a + b - overlap
            prompt = f"In a class, {a} learners study French, {b} study Spanish, and {overlap} study both. How many study at least one of the two languages?"
            explanation = f"Add both groups and subtract the overlap counted twice: {a} + {b} − {overlap} = {answer}."
        else:
            answer = rng.randint(3, maximum)
            prompt = f"A number n is an integer greater than {answer - 1} and less than {answer + 1}. What is n?"
            explanation = f"The only integer strictly between {answer - 1} and {answer + 1} is {answer}."
        category = "SETS AND LOGIC"

    elif topic == "financial_mathematics":
        principal = rng.randint(10, maximum * 10) * 100
        rate = rng.choice([4, 5, 6, 8, 10, 12, 15])
        years = rng.randint(1, 4)
        answer = principal * rate * years // 100
        prompt = f"Find the simple interest on {principal} currency units at {rate}% per annum for {years} years."
        explanation = f"Simple interest = principal × rate × time / 100 = {principal} × {rate} × {years} / 100 = {answer}."
        category = "FINANCIAL MATHEMATICS"

    else:  # coordinates and graphs
        if index % 2:
            x1, x2 = rng.randint(-10, 10), rng.randint(-10, 10)
            y1, y2 = rng.randint(-10, 10), rng.randint(-10, 10)
            while x1 == x2:
                x2 = rng.randint(-10, 10)
            numerator, denominator = y2 - y1, x2 - x1
            # Use only integral slopes in the multiple-choice set.
            if numerator % denominator:
                y2 = y1 + denominator * rng.randint(-5, 5)
                numerator = y2 - y1
            answer = numerator // denominator
            prompt = f"Find the gradient of the straight line through ({x1}, {y1}) and ({x2}, {y2})."
            explanation = f"Gradient = change in y ÷ change in x = ({y2} − {y1}) ÷ ({x2} − {x1}) = {answer}."
        else:
            x = rng.randint(-10, 10)
            coefficient, constant = rng.randint(2, 6), rng.randint(-12, 12)
            answer = coefficient * x + constant
            prompt = f"For the relation y = {coefficient}x + ({constant}), find y when x = {x}."
            explanation = f"Substitute x = {x}: y = {coefficient} × {x} + ({constant}) = {answer}."
        category = "COORDINATES AND GRAPHS"

    answers, correct = choices_for(answer, rng)
    return {
        "examStandard": exam,
        "subject": "math",
        "category": f"{TRACKS[exam]['label'].upper()} · {category}",
        "question": prompt,
        "answers": answers,
        "correct": correct,
        "answerValue": answer,
        "fact": explanation,
        "topic": topic,
    }


def main() -> None:
    questions = []
    for exam, settings in TRACKS.items():
        seen_prompts: set[str] = set()
        for number in range(1, 151):
            for attempt in range(100):
                rng = random.Random(settings["seed"] + number * 1009 + attempt * 9176)
                item = make_item(exam, number, rng, settings["max"])
                if item["question"] not in seen_prompts:
                    seen_prompts.add(item["question"])
                    questions.append(item)
                    break
            else:
                raise RuntimeError(f"Could not generate a unique {exam} prompt for item {number}")

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    batch = {
        "source": {
            "title": "Distinct Youngsters original generated mathematics practice questions",
            "url": LICENSE_URL,
            "license": "CC0-1.0",
            "attribution": "Original template-generated practice questions created for Distinct Youngsters; released under CC0 1.0. Not endorsed by or taken from any exam board.",
            "retrievedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        },
        "questions": questions,
    }
    OUTPUT.write_text(json.dumps(batch, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Generated {len(questions)} original CC0 practice questions ({len(questions) // len(TRACKS)} per exam-style track) at {OUTPUT}.")
    print("These are original practice items, not official or syllabus-verified past-paper questions.")


if __name__ == "__main__":
    main()
