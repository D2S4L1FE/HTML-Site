const STORAGE_KEYS = {
  access: 'distinct-youngsters-access',
  records: 'distinct-youngsters-records',
  profiles: 'distinct-youngsters-profiles',
  activeEmail: 'distinct-youngsters-active-email',
};
const ADMIN_EMAIL = 'adesanya.adegbemi@gmail.com';
const FREE_QUESTION_LIMIT = 10;
const SECONDS_PER_QUESTION = 0;
const TRIAL_DURATION_MS = 7 * 24 * 60 * 60 * 1000;
const EXAM_STANDARD_LABELS = {
  year6: 'Year 6',
  year7: 'Year 7',
  year8: 'Year 8',
  year9: 'Year 9',
  jss1: 'JSS 1',
  jss2: 'JSS 2',
  jss3: 'JSS 3',
  ss1: 'SS 1',
  ss2: 'SS 2',
  ss3: 'SS 3',
  year10: 'Year 10',
  year11: 'Year 11',
  year12: 'Year 12',
};
const CURRICULUM_BANK_SOURCES = {
  math: './question-bank/nigeria-jss1-mathematics.md',
  science: './question-bank/nigeria-jss1-basic-science.md',
  english: './question-bank/nigeria-jss1-english-studies.md',
};
const CURRICULUM_BANK_CATEGORIES = {
  math: 'MATHEMATICS · NIGERIA JSS 1',
  science: 'BASIC SCIENCE · NIGERIA JSS 1',
  english: 'ENGLISH STUDIES · NIGERIA JSS 1',
};

const questionBank = {
  math: [
    { category: 'MATHEMATICS', question: 'What is 15% of 200?', answers: ['20', '30', '35', '40'], correct: 1, fact: '10% of 200 is 20 and 5% is 10, so 15% is 30.' },
    { category: 'MATHEMATICS', question: 'Which number is a prime number?', answers: ['21', '27', '29', '33'], correct: 2, fact: '29 has exactly two factors: 1 and 29.' },
    { category: 'MATHEMATICS', question: 'What is the area of a rectangle 8 cm long and 5 cm wide?', answers: ['13 cm²', '26 cm²', '40 cm²', '80 cm²'], correct: 2, fact: 'Area = length × width, so 8 × 5 = 40 cm².' },
    { category: 'MATHEMATICS', question: 'What is the next term: 3, 6, 12, 24, …?', answers: ['30', '36', '42', '48'], correct: 3, fact: 'Each term doubles, so 24 × 2 = 48.' },
    { category: 'MATHEMATICS', question: 'What is 3/4 as a decimal?', answers: ['0.25', '0.34', '0.70', '0.75'], correct: 3, fact: '3 ÷ 4 = 0.75.' },
    { category: 'MATHEMATICS', question: 'What is 7 × 8?', answers: ['54', '56', '58', '64'], correct: 1, fact: 'Seven groups of eight make 56.' },
    { category: 'MATHEMATICS', question: 'If x + 8 = 15, what is x?', answers: ['5', '7', '8', '23'], correct: 1, fact: 'Subtract 8 from both sides: x = 7.' },
    { category: 'MATHEMATICS', question: 'What is the perimeter of a square with side 7 cm?', answers: ['14 cm', '21 cm', '28 cm', '49 cm'], correct: 2, fact: 'Perimeter = 4 × side = 28 cm.' },
    { category: 'MATHEMATICS', question: 'How many metres are in 1 kilometre?', answers: ['100', '500', '1,000', '10,000'], correct: 2, fact: 'Kilo means 1,000.' },
    { category: 'MATHEMATICS', question: 'What is the value of 9²?', answers: ['18', '72', '81', '99'], correct: 2, fact: '9 × 9 = 81.' },
    { category: 'MATHEMATICS', question: 'What is the mean of 4, 6 and 8?', answers: ['5', '6', '7', '18'], correct: 1, fact: '(4 + 6 + 8) ÷ 3 = 6.' },
    { category: 'MATHEMATICS', question: 'What is 5³?', answers: ['15', '25', '75', '125'], correct: 3, fact: '5³ = 5 × 5 × 5 = 125.' },
    { category: 'MATHEMATICS', question: 'What is the square root of 81?', answers: ['7', '8', '9', '10'], correct: 2, fact: '9 × 9 = 81.' },
    { category: 'MATHEMATICS', question: 'What is 18 ÷ 3 + 4?', answers: ['6', '10', '14', '22'], correct: 1, fact: '18 ÷ 3 = 6, then 6 + 4 = 10.' },
    { category: 'MATHEMATICS', question: 'A circle has radius 5 cm. What is the diameter?', answers: ['5 cm', '10 cm', '15 cm', '25 cm'], correct: 1, fact: 'Diameter = 2 × radius = 10 cm.' },
    { category: 'MATHEMATICS', question: 'What is 25% more than 80?', answers: ['90', '100', '105', '120'], correct: 1, fact: '25% of 80 is 20, so 80 + 20 = 100.' },
    { category: 'MATHEMATICS', question: 'Simplify 12/16.', answers: ['2/3', '3/4', '4/5', '6/8'], correct: 1, fact: 'Divide numerator and denominator by 4 to get 3/4.' },
    { category: 'MATHEMATICS', question: 'What is 2/3 of 30?', answers: ['10', '15', '20', '25'], correct: 2, fact: '30 ÷ 3 = 10, then 10 × 2 = 20.' },
    { category: 'MATHEMATICS', question: 'What is 8% of 250?', answers: ['16', '20', '25', '32'], correct: 1, fact: '1% of 250 is 2.5; 8% is 20.' },
    { category: 'MATHEMATICS', question: 'How many degrees are in a straight angle?', answers: ['90°', '120°', '180°', '360°'], correct: 2, fact: 'A straight line forms a 180° angle.' },
  ],
  science: [
    { category: 'SCIENCE', question: 'Which planet is known as the Red Planet?', answers: ['Venus', 'Mars', 'Jupiter', 'Mercury'], correct: 1, fact: 'Mars appears red because of iron-rich dust on its surface.' },
    { category: 'SCIENCE', question: 'What gas do plants absorb from the air for photosynthesis?', answers: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'], correct: 2, fact: 'Plants take in carbon dioxide and use sunlight to make food.' },
    { category: 'SCIENCE', question: 'What is the largest organ of the human body?', answers: ['The liver', 'The brain', 'The lungs', 'The skin'], correct: 3, fact: 'The skin is the body’s largest organ.' },
    { category: 'SCIENCE', question: 'Which force keeps planets in orbit around the Sun?', answers: ['Magnetism', 'Gravity', 'Friction', 'Electricity'], correct: 1, fact: 'Gravity keeps planets moving around the Sun.' },
    { category: 'SCIENCE', question: 'At sea level, water boils at what temperature?', answers: ['0°C', '50°C', '100°C', '150°C'], correct: 2, fact: 'At standard pressure, water boils at 100°C.' },
    { category: 'SCIENCE', question: 'Which part of the plant absorbs water from the soil?', answers: ['The flower', 'The leaves', 'The roots', 'The stem'], correct: 2, fact: 'Roots absorb water and minerals from the soil.' },
    { category: 'SCIENCE', question: 'How many legs do insects usually have?', answers: ['Four', 'Six', 'Eight', 'Ten'], correct: 1, fact: 'Insects have six legs.' },
    { category: 'SCIENCE', question: 'Which state of matter keeps its volume but changes shape?', answers: ['Solid', 'Liquid', 'Gas', 'Plasma'], correct: 1, fact: 'Liquids have fixed volume but take the shape of their container.' },
    { category: 'SCIENCE', question: 'What is the chemical symbol for water?', answers: ['CO₂', 'H₂O', 'O₂', 'NaCl'], correct: 1, fact: 'Water is H₂O.' },
    { category: 'SCIENCE', question: 'Which organ pumps blood around the body?', answers: ['Lungs', 'Brain', 'Heart', 'Liver'], correct: 2, fact: 'The heart is the muscular pump that circulates blood.' },
    { category: 'SCIENCE', question: 'What gas makes up most of Earth’s atmosphere?', answers: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'], correct: 2, fact: 'Nitrogen makes up around 78% of the atmosphere.' },
    { category: 'SCIENCE', question: 'What is the process of water vapour cooling to liquid droplets called?', answers: ['Evaporation', 'Condensation', 'Melting', 'Freezing'], correct: 1, fact: 'Condensation is when gas changes into liquid.' },
    { category: 'SCIENCE', question: 'Which is a mammal that lays eggs?', answers: ['Dolphin', 'Platypus', 'Penguin', 'Lizard'], correct: 1, fact: 'The platypus is a mammal that lays eggs.' },
    { category: 'SCIENCE', question: 'Which blood cells help fight infection?', answers: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma'], correct: 1, fact: 'White blood cells defend the body against disease.' },
    { category: 'SCIENCE', question: 'What is the main source of energy for Earth?', answers: ['The Moon', 'The Sun', 'Earth’s core', 'Ocean tides'], correct: 1, fact: 'The Sun provides Earth with nearly all its energy.' },
    { category: 'SCIENCE', question: 'What is the basic unit of life?', answers: ['Atom', 'Cell', 'Organ', 'Tissue'], correct: 1, fact: 'All living things are made of cells.' },
    { category: 'SCIENCE', question: 'Which part of the cell contains most genetic material?', answers: ['Nucleus', 'Cell wall', 'Cytoplasm', 'Membrane'], correct: 0, fact: 'The nucleus stores the genetic instructions in DNA.' },
    { category: 'SCIENCE', question: 'What is the closest planet to the Sun?', answers: ['Venus', 'Earth', 'Mercury', 'Mars'], correct: 2, fact: 'Mercury is closest to the Sun.' },
    { category: 'SCIENCE', question: 'Which type of rock is formed when magma cools?', answers: ['Sedimentary', 'Metamorphic', 'Igneous', 'Fossil'], correct: 2, fact: 'Igneous rock forms from cooled magma or lava.' },
    { category: 'SCIENCE', question: 'How do we measure temperature?', answers: ['Thermometer', 'Barometer', 'Ruler', 'Compass'], correct: 0, fact: 'A thermometer measures temperature.' },
  ],
  english: [
    { category: 'ENGLISH', question: 'Choose the correctly spelled word.', answers: ['Neccessary', 'Necessary', 'Necesary', 'Necessery'], correct: 1, fact: 'Necessary is spelled with one c and two s letters.' },
    { category: 'ENGLISH', question: 'Choose the noun in “The bright moon appeared.”', answers: ['bright', 'moon', 'appeared', 'the'], correct: 1, fact: 'Moon is the noun in the sentence.' },
    { category: 'ENGLISH', question: 'What is the past tense of “teach”?', answers: ['teached', 'taught', 'teaching', 'teaches'], correct: 1, fact: 'Teach changes to taught in the past tense.' },
    { category: 'ENGLISH', question: 'Choose the synonym of “brief.”', answers: ['short', 'late', 'wide', 'quiet'], correct: 0, fact: 'Brief means short in duration.' },
    { category: 'ENGLISH', question: 'Which punctuation marks a direct question?', answers: ['Comma', 'Full stop', 'Question mark', 'Colon'], correct: 2, fact: 'A direct question ends with a question mark.' },
    { category: 'ENGLISH', question: 'Choose the correct verb: “She ___ to school every day.”', answers: ['go', 'goes', 'going', 'gone'], correct: 1, fact: 'With singular “she,” the verb is goes.' },
    { category: 'ENGLISH', question: 'What is the opposite of “ancient”?', answers: ['old', 'historic', 'modern', 'early'], correct: 2, fact: 'Modern is the opposite of ancient.' },
    { category: 'ENGLISH', question: 'What is the plural of “child”?', answers: ['childs', 'children', 'childes', 'childrens'], correct: 1, fact: 'Children is the irregular plural form.' },
    { category: 'ENGLISH', question: 'Which is the passive voice sentence?', answers: ['Ada wrote the letter.', 'The letter was written by Ada.', 'Ada is writing.', 'Ada will write tomorrow.'], correct: 1, fact: 'In passive voice, the subject receives the action.' },
    { category: 'ENGLISH', question: 'Which sentence uses a semicolon correctly?', answers: ['I studied; and passed.', 'The bell rang; we entered.', 'She; likes reading.', 'They went; home.'], correct: 1, fact: 'A semicolon joins two related independent clauses.' },
  ],
  accounting: [
    { category: 'ACCOUNTING', question: 'Which accounting concept treats a business as separate from its owner?', answers: ['Business entity concept', 'Matching concept', 'Going concern concept', 'Historical cost concept'], correct: 0, fact: 'The business entity concept keeps the business and its owner separate.' },
    { category: 'ACCOUNTING', question: 'The accounting equation is:', answers: ['Assets = Liabilities + Capital', 'Assets + Liabilities = Capital', 'Liabilities = Assets + Capital', 'Assets = Capital - Liabilities'], correct: 0, fact: 'Assets are funded by liabilities and owner’s capital.' },
    { category: 'ACCOUNTING', question: 'The book used to record credit sales is the:', answers: ['Sales day book', 'Cash book', 'Journal proper', 'Petty cash book'], correct: 0, fact: 'The sales day book records credit sales before posting to the ledger.' },
    { category: 'ACCOUNTING', question: 'A debit entry normally increases:', answers: ['Capital', 'Sales', 'Asset', 'Income'], correct: 2, fact: 'Debits increase asset accounts.' },
    { category: 'ACCOUNTING', question: 'The principal book of final entry is the:', answers: ['Cash book', 'Journal', 'Ledger', 'Invoice book'], correct: 2, fact: 'The ledger is the main book of final entry.' },
    { category: 'ACCOUNTING', question: 'Depreciation is the:', answers: ['Loss of value due to inflation', 'Apportionment of cost over useful life', 'Reduction of liabilities', 'Gain from disposal of asset'], correct: 1, fact: 'Depreciation spreads the cost of a non-current asset over its useful life.' },
    { category: 'ACCOUNTING', question: 'Current assets include:', answers: ['Plant and machinery', 'Land', 'Inventory', 'Building'], correct: 2, fact: 'Inventory is a short-term asset expected to be sold or used soon.' },
    { category: 'ACCOUNTING', question: 'The purpose of a trial balance is to:', answers: ['Prepare final accounts', 'Check arithmetic accuracy of postings', 'Record cash receipts only', 'Calculate capital'], correct: 1, fact: 'A trial balance checks whether the ledger balances arithmetically.' },
    { category: 'ACCOUNTING', question: 'Accounts payable are usually shown as:', answers: ['Current liabilities', 'Current assets', 'Fixed assets', 'Capital'], correct: 0, fact: 'Amounts owed to suppliers are liabilities due in the short term.' },
    { category: 'ACCOUNTING', question: 'A profit is recorded when:', answers: ['Revenue exceeds expenses', 'Expenses exceed revenue', 'Assets equal liabilities', 'Cash is received'], correct: 0, fact: 'Profit is the excess of revenue over expenses.' },
  ],
  britishEnglish: [
    { category: 'BRITISH ENGLISH', question: 'Which grammatical element identifies the naming word in a sentence?', answers: ['Verb', 'Adjective', 'Noun', 'Adverb'], correct: 2, fact: 'A noun names a person, place, thing, or idea.' },
    { category: 'BRITISH ENGLISH', question: 'Which word is the antonym of “ancient”?', answers: ['Historic', 'Modern', 'Old', 'Classic'], correct: 1, fact: 'Modern is the opposite of ancient.' },
    { category: 'BRITISH ENGLISH', question: 'Which device gives human qualities to non-human things?', answers: ['Metaphor', 'Personification', 'Simile', 'Hyperbole'], correct: 1, fact: 'Personification gives human qualities to objects or ideas.' },
    { category: 'BRITISH ENGLISH', question: 'Which punctuation mark ends a direct question?', answers: ['Full stop', 'Exclamation mark', 'Semicolon', 'Question mark'], correct: 3, fact: 'A direct question ends with a question mark.' },
    { category: 'BRITISH ENGLISH', question: 'A word that describes a noun is called an:', answers: ['Adverb', 'Pronoun', 'Adjective', 'Preposition'], correct: 2, fact: 'Adjectives describe nouns and pronouns.' },
    { category: 'BRITISH ENGLISH', question: 'Which sentence uses the correct subject-verb agreement?', answers: ['She go to school every day.', 'She goes to school every day.', 'She going to school every day.', 'She gone to school every day.'], correct: 1, fact: 'With “she,” the verb takes the singular form “goes.”' },
    { category: 'BRITISH ENGLISH', question: 'A word that shows a relationship between nouns and other words is a:', answers: ['Conjunction', 'Preposition', 'Interjection', 'Verb'], correct: 1, fact: 'Prepositions show relationship in time, place, or direction.' },
    { category: 'BRITISH ENGLISH', question: 'Which sentence is written in passive voice?', answers: ['The teacher praised the student.', 'The student was praised by the teacher.', 'The student praises the teacher.', 'The teacher is praising the student.'], correct: 1, fact: 'Passive voice makes the receiver of the action the subject.' },
    { category: 'BRITISH ENGLISH', question: 'Which word is a synonym for “brief”?', answers: ['Long', 'Short', 'Wide', 'Late'], correct: 1, fact: 'Brief means short in duration or length.' },
    { category: 'BRITISH ENGLISH', question: 'Which word is the correct plural of “child”?', answers: ['Childs', 'Children', 'Childes', 'Childrens'], correct: 1, fact: 'The plural of child is children.' },
  ],
  civicEducation: [
    { category: 'CIVIC EDUCATION', question: 'A citizen gains citizenship primarily through birth or naturalisation.', answers: ['Birth or naturalisation', 'Buying a house', 'Having a visa', 'Marriage only'], correct: 0, fact: 'Citizenship is usually acquired by birth or naturalisation.' },
    { category: 'CIVIC EDUCATION', question: 'Fundamental rights are usually contained in the:', answers: ['Constitution', 'Traffic code', 'School handbook', 'Newspaper'], correct: 0, fact: 'A constitution contains the rights and powers of the state and citizens.' },
    { category: 'CIVIC EDUCATION', question: 'The principle that no person is above the law is called:', answers: ['Rule of law', 'Rule of force', 'Majority rule', 'State immunity'], correct: 0, fact: 'Rule of law means the law binds everyone equally.' },
    { category: 'CIVIC EDUCATION', question: 'A democracy is best described as government by:', answers: ['The monarch', 'The army', 'The people', 'A single leader'], correct: 2, fact: 'Democracy is government of the people, by the people, and for the people.' },
    { category: 'CIVIC EDUCATION', question: 'Voting is an example of:', answers: ['Civil disobedience', 'Civic responsibility', 'Tax evasion', 'Private business'], correct: 1, fact: 'Voting is a way citizens participate and fulfil civic responsibility.' },
    { category: 'CIVIC EDUCATION', question: 'Which is a civic duty?', answers: ['Paying taxes', 'Keeping a private car', 'Watching television', 'Buying foreign goods'], correct: 0, fact: 'Paying taxes supports public services and government functions.' },
    { category: 'CIVIC EDUCATION', question: 'A law made by the legislature is called a:', answers: ['Executive order', 'Judgment', 'Act', 'Constitution'], correct: 2, fact: 'An act is a law enacted by the legislature.' },
    { category: 'CIVIC EDUCATION', question: 'A society where people live together peacefully under shared laws is known as:', answers: ['Anarchy', 'Civil society', 'Military rule', 'Isolation'], correct: 1, fact: 'Civil society includes organised groups and institutions beyond the state.' },
    { category: 'CIVIC EDUCATION', question: 'Which is a basic right of a citizen?', answers: ['Freedom of expression', 'Forced labour', 'Unlimited property seizure', 'No education'], correct: 0, fact: 'Freedom of expression is a core civil liberty in democratic systems.' },
    { category: 'CIVIC EDUCATION', question: 'National service is an example of:', answers: ['A private business activity', 'A civic obligation', 'A marriage rite', 'A personal hobby'], correct: 1, fact: 'National service can be part of a country’s civic obligations.' },
  ],
  government: [
    { category: 'GOVERNMENT', question: 'Which ideology is based on common ownership of production?', answers: ['Capitalism', 'Communism', 'Feudalism', 'Fascism'], correct: 1, fact: 'Communism advocates common ownership and a classless society.' },
    { category: 'GOVERNMENT', question: 'Supreme authority within a state is called:', answers: ['Sovereignty', 'Legitimacy', 'Autocracy', 'Pluralism'], correct: 0, fact: 'Sovereignty is the supreme authority of the state.' },
    { category: 'GOVERNMENT', question: 'A single ruler with unchecked power is practicing:', answers: ['Oligarchy', 'Autocracy', 'Democracy', 'Aristocracy'], correct: 1, fact: 'Autocracy is rule by one person with broad, often unchecked authority.' },
    { category: 'GOVERNMENT', question: 'The rule of law means:', answers: ['The judge is above the law', 'No one is above the law', 'Only leaders obey the law', 'The law is optional'], correct: 1, fact: 'The rule of law implies equal application of law to everyone.' },
    { category: 'GOVERNMENT', question: 'Which document limits government power and protects rights?', answers: ['A budget', 'A constitution', 'A manifesto', 'A police report'], correct: 1, fact: 'A constitution defines the structure and limits of government.' },
    { category: 'GOVERNMENT', question: 'A government run by the people is called:', answers: ['Monarchy', 'Democracy', 'Autocracy', 'Theocracy'], correct: 1, fact: 'Democracy gives authority to the people.' },
    { category: 'GOVERNMENT', question: 'Power shared among several institutions is called:', answers: ['Separation of powers', 'Pluralism', 'Monopoly', 'Feudalism'], correct: 0, fact: 'Separation of powers prevents any one branch from dominating.' },
    { category: 'GOVERNMENT', question: 'A system in which political power is held by a few is:', answers: ['Oligarchy', 'Democracy', 'Socialism', 'Republic'], correct: 0, fact: 'Oligarchy is rule by a small group.' },
    { category: 'GOVERNMENT', question: 'Which of the following is a duty of citizens?', answers: ['Paying taxes', 'Ignoring school rules', 'Destroying public property', 'Refusing to vote'], correct: 0, fact: 'Citizens pay taxes to support public services.' },
    { category: 'GOVERNMENT', question: 'The branch that interprets laws is the:', answers: ['Legislature', 'Executive', 'Judiciary', 'Police'], correct: 2, fact: 'The judiciary interprets laws and decides disputes.' },
  ],
  literature: [
    { category: 'LITERATURE', question: 'Which device is used when a character speaks inner thoughts aloud to the audience?', answers: ['Monologue', 'Soliloquy', 'Aside', 'Dialogue'], correct: 1, fact: 'A soliloquy is a speech in which a character reveals thoughts to the audience.' },
    { category: 'LITERATURE', question: 'The tragic flaw in a hero is called:', answers: ['Catharsis', 'Hubris', 'Atmosphere', 'Irony'], correct: 1, fact: 'Hubris is excessive pride or self-confidence, often the hero’s tragic flaw.' },
    { category: 'LITERATURE', question: 'A deliberate contrast between appearance and reality is called:', answers: ['Irony', 'Personification', 'Rhythm', 'Metaphor'], correct: 0, fact: 'Irony creates a contrast between expectation and reality.' },
    { category: 'LITERATURE', question: 'The final emotional release in a tragedy is called:', answers: ['Tone', 'Catharsis', 'Dialogue', 'Setting'], correct: 1, fact: 'Catharsis is the emotional release felt by the audience.' },
    { category: 'LITERATURE', question: 'A play that is intended to amuse and entertain is called:', answers: ['Tragedy', 'Comedy', 'Epic', 'Ballad'], correct: 1, fact: 'Comedy aims to amuse and often ends happily.' },
    { category: 'LITERATURE', question: 'A speech made to the audience while others are on stage is:', answers: ['Monologue', 'Aside', 'Soliloquy', 'Prologue'], correct: 1, fact: 'An aside is a brief speech directed to the audience.' },
    { category: 'LITERATURE', question: 'A comparison using “like” or “as” is a:', answers: ['Metaphor', 'Simile', 'Alliteration', 'Assonance'], correct: 1, fact: 'A simile compares two things using “like” or “as”.' },
    { category: 'LITERATURE', question: 'What is the term for a character with both good and bad qualities?', answers: ['Antihero', 'Villain', 'Narrator', 'Foil'], correct: 0, fact: 'An antihero is a central character with flawed or mixed traits.' },
    { category: 'LITERATURE', question: 'A humorous scene used to relieve tension is called:', answers: ['A soliloquy', 'Comic relief', 'A climax', 'A prologue'], correct: 1, fact: 'Comic relief temporarily relieves dramatic tension.' },
    { category: 'LITERATURE', question: 'The main idea or message in a literary text is the:', answers: ['Theme', 'Tone', 'Plot', 'Character'], correct: 0, fact: 'Theme is the central idea or message explored in a text.' },
  ],
  mathematics: [
    { category: 'MATHEMATICS', question: 'Solve for x: x + 3 = 23', answers: ['20', '19', '18', '17'], correct: 0, fact: 'Subtract 3 from both sides: x = 20.' },
    { category: 'MATHEMATICS', question: 'Solve for x: 2x + 6 = 20', answers: ['5', '6', '7', '8'], correct: 2, fact: '2x = 14 so x = 7.' },
    { category: 'MATHEMATICS', question: 'Simplify 3x + 5x', answers: ['8x', '15x', 'x', '3x'], correct: 0, fact: '3x and 5x are like terms; combine them to get 8x.' },
    { category: 'MATHEMATICS', question: 'What is 15% of 200?', answers: ['20', '30', '35', '40'], correct: 1, fact: '10% of 200 is 20 and 5% is 10, so 15% is 30.' },
    { category: 'MATHEMATICS', question: 'The sum of the angles in a triangle is:', answers: ['90°', '180°', '270°', '360°'], correct: 1, fact: 'The interior angles of a triangle add up to 180°.' },
    { category: 'MATHEMATICS', question: 'The value of 9² is:', answers: ['18', '72', '81', '99'], correct: 2, fact: '9² = 9 × 9 = 81.' },
    { category: 'MATHEMATICS', question: 'What is the mean of 4, 6, and 8?', answers: ['5', '6', '7', '18'], correct: 1, fact: 'The mean is (4 + 6 + 8) ÷ 3 = 6.' },
    { category: 'MATHEMATICS', question: 'Solve for x: 3x = 21', answers: ['5', '6', '7', '8'], correct: 2, fact: 'Divide both sides by 3 to get x = 7.' },
    { category: 'MATHEMATICS', question: 'The perimeter of a square with side 7 cm is:', answers: ['14 cm', '21 cm', '28 cm', '49 cm'], correct: 2, fact: 'Perimeter = 4 × 7 = 28 cm.' },
    { category: 'MATHEMATICS', question: 'What is 2/3 of 30?', answers: ['10', '15', '20', '25'], correct: 2, fact: '30 ÷ 3 = 10, then 10 × 2 = 20.' },
  ],
  physics: [
    { category: 'PHYSICS', question: 'What is the SI unit of force?', answers: ['Joule', 'Newton', 'Watt', 'Pascal'], correct: 1, fact: 'Force is measured in newtons.' },
    { category: 'PHYSICS', question: 'Which instrument measures electric current?', answers: ['Voltmeter', 'Ammeter', 'Thermometer', 'Barometer'], correct: 1, fact: 'An ammeter measures current in amperes.' },
    { category: 'PHYSICS', question: 'What is the approximate speed of light in a vacuum?', answers: ['300,000 km/s', '30,000 km/s', '3,000 km/s', '300 km/s'], correct: 0, fact: 'Light travels at about 300,000 km/s in a vacuum.' },
    { category: 'PHYSICS', question: 'Which energy increases when an object is lifted?', answers: ['Chemical', 'Gravitational potential', 'Sound', 'Nuclear'], correct: 1, fact: 'Lifting an object increases its gravitational potential energy.' },
    { category: 'PHYSICS', question: 'Which type of wave needs a medium?', answers: ['Light wave', 'Radio wave', 'Sound wave', 'X-ray'], correct: 2, fact: 'Sound needs a medium like air or water to travel.' },
    { category: 'PHYSICS', question: 'What is the SI unit of electrical resistance?', answers: ['Ohm', 'Ampere', 'Volt', 'Coulomb'], correct: 0, fact: 'Resistance is measured in ohms.' },
    { category: 'PHYSICS', question: 'If a 2 kg object accelerates at 3 m/s², what is the force?', answers: ['1.5 N', '5 N', '6 N', '9 N'], correct: 2, fact: 'F = ma = 2 × 3 = 6 N.' },
    { category: 'PHYSICS', question: 'Which lens converges parallel rays?', answers: ['Concave', 'Convex', 'Plane', 'Prism'], correct: 1, fact: 'A convex lens bends rays together to a focus.' },
    { category: 'PHYSICS', question: 'What is the value of gravity near Earth?', answers: ['1.6 m/s²', '9.8 m/s²', '30 m/s²', '98 m/s²'], correct: 1, fact: 'Acceleration due to gravity is about 9.8 m/s².' },
    { category: 'PHYSICS', question: 'What is the SI unit of power?', answers: ['Joule', 'Watt', 'Newton', 'Ampere'], correct: 1, fact: 'Power is measured in watts.' },
  ],
  chemistry: [
    { category: 'CHEMISTRY', question: 'What is the chemical symbol for sodium?', answers: ['So', 'S', 'Na', 'N'], correct: 2, fact: 'Sodium is Na from natrium.' },
    { category: 'CHEMISTRY', question: 'A substance with pH 2 is best described as:', answers: ['Strongly acidic', 'Neutral', 'Weakly alkaline', 'Strongly alkaline'], correct: 0, fact: 'pH values below 7 are acidic; 2 is strongly acidic.' },
    { category: 'CHEMISTRY', question: 'Which particle has a negative charge?', answers: ['Proton', 'Neutron', 'Electron', 'Nucleus'], correct: 2, fact: 'Electrons carry negative charge.' },
    { category: 'CHEMISTRY', question: 'What is the formula for carbon dioxide?', answers: ['CO', 'CO₂', 'C₂O', 'CaO'], correct: 1, fact: 'Carbon dioxide has one carbon and two oxygen atoms.' },
    { category: 'CHEMISTRY', question: 'Which method separates an insoluble solid from a liquid?', answers: ['Filtration', 'Distillation', 'Chromatography', 'Evaporation'], correct: 0, fact: 'Filtration traps the solid while the liquid passes through.' },
    { category: 'CHEMISTRY', question: 'What gas is produced when an acid reacts with a carbonate?', answers: ['Oxygen', 'Hydrogen', 'Carbon dioxide', 'Nitrogen'], correct: 2, fact: 'Acid + carbonate → salt + water + carbon dioxide.' },
    { category: 'CHEMISTRY', question: 'What is the atomic number of an element?', answers: ['Number of neutrons', 'Number of protons', 'Total particles', 'Number of shells'], correct: 1, fact: 'Atomic number equals the number of protons.' },
    { category: 'CHEMISTRY', question: 'What type of bond is formed by sharing electrons?', answers: ['Ionic', 'Covalent', 'Metallic', 'Hydrogen'], correct: 1, fact: 'Covalent bonds form by sharing electron pairs.' },
    { category: 'CHEMISTRY', question: 'Which gas turns limewater milky?', answers: ['Oxygen', 'Carbon dioxide', 'Hydrogen', 'Chlorine'], correct: 1, fact: 'Carbon dioxide reacts with limewater to make calcium carbonate.' },
    { category: 'CHEMISTRY', question: 'What is the formula of methane?', answers: ['CH₄', 'CO₂', 'NH₃', 'H₂O'], correct: 0, fact: 'Methane has one carbon and four hydrogens: CH₄.' },
  ],
  biology: [
    { category: 'BIOLOGY', question: 'Which cell structure controls most activities of the cell?', answers: ['Nucleus', 'Cell wall', 'Vacuole', 'Cytoplasm'], correct: 0, fact: 'The nucleus contains DNA and controls cell activity.' },
    { category: 'BIOLOGY', question: 'Which blood vessels carry blood away from the heart?', answers: ['Veins', 'Arteries', 'Capillaries', 'Alveoli'], correct: 1, fact: 'Arteries carry blood away from the heart.' },
    { category: 'BIOLOGY', question: 'What is the role of chlorophyll?', answers: ['Absorb light energy', 'Absorb minerals', 'Make roots', 'Transport sugar'], correct: 0, fact: 'Chlorophyll absorbs light for photosynthesis.' },
    { category: 'BIOLOGY', question: 'Which organ produces insulin?', answers: ['Liver', 'Pancreas', 'Kidney', 'Lung'], correct: 1, fact: 'The pancreas produces insulin.' },
    { category: 'BIOLOGY', question: 'What is the basic unit of inheritance?', answers: ['Tissue', 'Gene', 'Organ', 'Enzyme'], correct: 1, fact: 'Genes carry inherited information.' },
    { category: 'BIOLOGY', question: 'Where does most gas exchange happen in the lungs?', answers: ['Bronchi', 'Alveoli', 'Trachea', 'Diaphragm'], correct: 1, fact: 'Alveoli are the tiny air sacs where gas exchange occurs.' },
    { category: 'BIOLOGY', question: 'Which organisms make their own food?', answers: ['Consumers', 'Predators', 'Producers', 'Parasites'], correct: 2, fact: 'Producers like plants make their own food through photosynthesis.' },
    { category: 'BIOLOGY', question: 'What is the function of the kidneys?', answers: ['Pump blood', 'Filter waste from blood', 'Exchange gases', 'Digest proteins'], correct: 1, fact: 'The kidneys filter blood and remove waste.' },
    { category: 'BIOLOGY', question: 'Which nutrient is used for body growth and repair?', answers: ['Protein', 'Water', 'Fibre', 'Vitamin C'], correct: 0, fact: 'Proteins help build and repair tissues.' },
    { category: 'BIOLOGY', question: 'What type of reproduction uses one parent only?', answers: ['Sexual', 'Asexual', 'Cross-pollination', 'Fertilisation'], correct: 1, fact: 'Asexual reproduction needs just one parent.' },
  ],
  geography: [
    { category: 'GEOGRAPHY', question: 'What is the line at 0° latitude called?', answers: ['Prime Meridian', 'Equator', 'Tropic of Cancer', 'Arctic Circle'], correct: 1, fact: 'The equator is 0° latitude.' },
    { category: 'GEOGRAPHY', question: 'Which instrument records earthquake waves?', answers: ['Anemometer', 'Seismograph', 'Hygrometer', 'Rain gauge'], correct: 1, fact: 'A seismograph records ground movement during earthquakes.' },
    { category: 'GEOGRAPHY', question: 'What is the process by which water vapour becomes liquid droplets?', answers: ['Evaporation', 'Condensation', 'Infiltration', 'Transpiration'], correct: 1, fact: 'Condensation changes vapour into liquid droplets.' },
    { category: 'GEOGRAPHY', question: 'What is a delta?', answers: ['A desert dune', 'A river mouth sediment deposit', 'A mountain pass', 'A cloud type'], correct: 1, fact: 'A delta forms where a river deposits sediment near its mouth.' },
    { category: 'GEOGRAPHY', question: 'What does the map legend explain?', answers: ['Distance only', 'The meaning of symbols', 'The date', 'Traffic laws'], correct: 1, fact: 'The legend explains map symbols.' },
    { category: 'GEOGRAPHY', question: 'Weather over a long period is called:', answers: ['Climate', 'Forecast', 'Season', 'Atmosphere'], correct: 0, fact: 'Climate is the long-term average of weather.' },
    { category: 'GEOGRAPHY', question: 'Which process wears away and transports rock?', answers: ['Erosion', 'Deposition', 'Weathering', 'Rotation'], correct: 0, fact: 'Erosion removes and carries away rock and soil.' },
    { category: 'GEOGRAPHY', question: 'What is urbanisation?', answers: ['Growth in city living', 'Loss of all rivers', 'Movement from cities to farms only', 'A weather event'], correct: 0, fact: 'Urbanisation is the rise in population living in towns and cities.' },
    { category: 'GEOGRAPHY', question: 'Which instrument measures wind speed?', answers: ['Anemometer', 'Barometer', 'Thermometer', 'Seismograph'], correct: 0, fact: 'An anemometer measures wind speed.' },
    { category: 'GEOGRAPHY', question: 'What is deforestation?', answers: ['Large-scale removal of trees', 'Planting new trees', 'A river delta', 'Cloud formation'], correct: 0, fact: 'Deforestation is the clearing or removal of forests.' },
  ],
  economics: [
    { category: 'ECONOMICS', question: 'What is opportunity cost?', answers: ['Money printed by banks', 'The next best alternative given up', 'A sales tax', 'Total profit'], correct: 1, fact: 'Opportunity cost is the value of the next best option forgone.' },
    { category: 'ECONOMICS', question: 'What usually happens to demand when price falls?', answers: ['It falls', 'It rises', 'It becomes zero', 'It stops changing'], correct: 1, fact: 'Lower prices usually increase quantity demanded.' },
    { category: 'ECONOMICS', question: 'Which factor of production includes workers?', answers: ['Land', 'Labour', 'Capital', 'Enterprise'], correct: 1, fact: 'Labour is human effort used in production.' },
    { category: 'ECONOMICS', question: 'What is inflation?', answers: ['A general rise in prices', 'A fall in wages', 'A tax on exports', 'A type of loan'], correct: 0, fact: 'Inflation is a sustained rise in the general price level.' },
    { category: 'ECONOMICS', question: 'What does GDP measure?', answers: ['Value of production within a country', 'The number of schools', 'Rainfall levels', 'A tax rate'], correct: 0, fact: 'GDP measures the total value of goods and services produced.' },
    { category: 'ECONOMICS', question: 'What is a central bank responsible for?', answers: ['Managing money policy', 'Selling fruit', 'Running schools', 'Inspecting roads'], correct: 0, fact: 'A central bank manages monetary policy and interest rates.' },
    { category: 'ECONOMICS', question: 'What is a subsidy?', answers: ['Government financial support', 'A tax only', 'A household budget', 'A bank statement'], correct: 0, fact: 'A subsidy lowers cost or encourages activity.' },
    { category: 'ECONOMICS', question: 'What is the law of supply?', answers: ['Higher prices tend to increase supply', 'Supply is always fixed', 'Demand never changes', 'Price has no effect'], correct: 0, fact: 'The law of supply says higher prices usually increase quantity supplied.' },
    { category: 'ECONOMICS', question: 'What is a trade deficit?', answers: ['Imports exceed exports', 'Exports exceed imports', 'No trade at all', 'A tax on local sales'], correct: 0, fact: 'A trade deficit means imports are greater than exports.' },
    { category: 'ECONOMICS', question: 'What is a progressive tax?', answers: ['A rate that rises with income', 'A fixed fee for all', 'A tax only on exports', 'A voluntary donation'], correct: 0, fact: 'Progressive tax takes a larger share as income rises.' },
  ],
  commerce: [
    { category: 'COMMERCE', question: 'What is trade?', answers: ['Exchange of goods and services', 'Growing crops only', 'Making laws', 'Measuring rainfall'], correct: 0, fact: 'Trade is the exchange of goods and services.' },
    { category: 'COMMERCE', question: 'Which document asks a buyer to pay?', answers: ['Invoice', 'Receipt', 'Agenda', 'Catalogue'], correct: 0, fact: 'An invoice requests payment for goods or services supplied.' },
    { category: 'COMMERCE', question: 'Who is a retailer?', answers: ['Seller to final consumers', 'Factory owner only', 'A tax collector', 'A lender only'], correct: 0, fact: 'Retailers sell to final consumers.' },
    { category: 'COMMERCE', question: 'What is a wholesaler?', answers: ['Sells in bulk to retailers', 'A final consumer', 'An importer only', 'A bank officer'], correct: 0, fact: 'Wholesalers sell large quantities to retailers.' },
    { category: 'COMMERCE', question: 'What is warehousing?', answers: ['Storing goods before sale', 'Printing money', 'A type of tax', 'Selling only online'], correct: 0, fact: 'Warehousing stores goods until they are needed.' },
    { category: 'COMMERCE', question: 'What does insurance do?', answers: ['Covers certain risks', 'Guarantees profit', 'Eliminates competition', 'Sets wages'], correct: 0, fact: 'Insurance reduces the financial impact of specific risks.' },
    { category: 'COMMERCE', question: 'What is e-commerce?', answers: ['Buying and selling online', 'Road transport', 'A warehouse', 'A local tax'], correct: 0, fact: 'E-commerce uses electronic networks for commerce.' },
    { category: 'COMMERCE', question: 'What is a receipt?', answers: ['Proof payment was made', 'A product list', 'A cash loan', 'A customer survey'], correct: 0, fact: 'A receipt confirms payment or goods received.' },
    { category: 'COMMERCE', question: 'What is hire purchase?', answers: ['Paying in instalments while using goods', 'Paying every item in cash', 'Selling only to one customer', 'A bank account'], correct: 0, fact: 'Hire purchase allows instalment payments and use of the item.' },
    { category: 'COMMERCE', question: 'What is a tariff?', answers: ['A tax on imported goods', 'A market survey', 'A delivery note', 'A type of receipt'], correct: 0, fact: 'A tariff is a duty charged on imports.' },
  ],
  businessStudies: [
    { category: 'BUSINESS STUDIES', question: 'What is an entrepreneur?', answers: ['Someone who organises resources and takes business risks', 'A tax officer', 'A bank statement', 'A customer only'], correct: 0, fact: 'An entrepreneur combines resources and accepts risk.' },
    { category: 'BUSINESS STUDIES', question: 'Which function deals with recruitment and staff development?', answers: ['Human resources', 'Marketing', 'Production', 'Accounting'], correct: 0, fact: 'Human resources manages people in the business.' },
    { category: 'BUSINESS STUDIES', question: 'What is a sole trader?', answers: ['Owned by one person', 'Owned by shareholders', 'A government body', 'A charity only'], correct: 0, fact: 'A sole trader is owned and run by one person.' },
    { category: 'BUSINESS STUDIES', question: 'What does profit mean?', answers: ['Revenue minus costs', 'Sales plus expenses', 'Total assets', 'Government taxes'], correct: 0, fact: 'Profit is the amount left after costs are deducted.' },
    { category: 'BUSINESS STUDIES', question: 'What is a stakeholder?', answers: ['Anyone affected by the business', 'Only the owner', 'A tax collector', 'Attendance sheet'], correct: 0, fact: 'Stakeholders include employees, suppliers, customers and communities.' },
    { category: 'BUSINESS STUDIES', question: 'What is a fixed cost?', answers: ['A cost that stays roughly the same over time', 'Only raw material cost', 'Daily sales tax', 'A payment to a customer'], correct: 0, fact: 'Rent is often a fixed cost.' },
    { category: 'BUSINESS STUDIES', question: 'What is a mission statement?', answers: ['A statement of purpose', 'A list of staff names', 'A receipt', 'Customer complaint'], correct: 0, fact: 'A mission statement explains the organisation’s purpose.' },
    { category: 'BUSINESS STUDIES', question: 'What is cash flow?', answers: ['Movement of money in and out of a business', 'A staff salary only', 'An item in a warehouse', 'A customer order'], correct: 0, fact: 'Cash flow tracks receipts and payments.' },
    { category: 'BUSINESS STUDIES', question: 'What is a break-even point?', answers: ['Where total revenue equals total cost', 'A time of zero sales', 'A point of bankruptcy', 'A tax threshold'], correct: 0, fact: 'Break-even means no profit but no loss.' },
    { category: 'BUSINESS STUDIES', question: 'What is quality control?', answers: ['Checking standards in products or services', 'Removing all customers', 'Giving every product away', 'Lowering prices always'], correct: 0, fact: 'Quality control checks if output meets standards.' },
  ],
};

const subjectLabels = {
  math: 'Mathematics',
  science: 'Integrated Science',
  english: 'English Language',
  physics: 'Physics',
  chemistry: 'Chemistry',
  biology: 'Biology',
  geography: 'Geography',
  economics: 'Economics',
  commerce: 'Commerce',
  businessStudies: 'Business Studies',
  accounting: 'Principles of Accounting',
  britishEnglish: 'British Curriculum English',
  civicEducation: 'Civic Education',
  government: 'Government',
  literature: 'Literature in English',
  mathematics: 'Mathematics',
};

const CURRICULUM_SUBJECT_LABELS = {
  math: 'Mathematics',
  science: 'Basic Science',
  english: 'English Studies',
};

const questionBankSubjectGroups = {
  science: ['math', 'science', 'english', 'physics', 'chemistry', 'biology', 'geography', 'civicEducation', 'government'],
  commercial: ['math', 'english', 'economics', 'commerce', 'businessStudies', 'geography', 'accounting', 'government', 'mathematics'],
  arts: ['english', 'science', 'geography', 'economics', 'businessStudies', 'britishEnglish', 'civicEducation', 'literature', 'government', 'mathematics'],
};

const departmentSubjects = Object.fromEntries(
  Object.entries(questionBankSubjectGroups).map(([department, subjects]) => [
    department,
    subjects.filter((subject) => Object.prototype.hasOwnProperty.call(questionBank, subject)),
  ])
);

const setupPanel = document.querySelector('#setup-panel');
const signInPanel = document.querySelector('#sign-in-panel');
const signInForm = document.querySelector('#sign-in-form');
const signInEmailInput = document.querySelector('#sign-in-email');
const signInStatus = document.querySelector('#sign-in-status');
const createProfileButton = document.querySelector('#create-profile-button');
const switchProfileButton = document.querySelector('#switch-profile-button');
const trialStatus = document.querySelector('#trial-status');
const startButton = document.querySelector('#start-button');
const participantRegistrationForm = document.querySelector('#participant-registration-form');
const participantRegistrationStatus = document.querySelector('#participant-registration-status');
const participantEmailFallback = document.querySelector('#participant-email-fallback');
const quizPanel = document.querySelector('#quiz-panel');
const resultPanel = document.querySelector('#result-panel');
const candidateNameInput = document.querySelector('#candidate-name');
const candidateAgeInput = document.querySelector('#candidate-age');
const candidateClassInput = document.querySelector('#candidate-class');
const candidateEmailInput = document.querySelector('#candidate-email');
const examStandardSelect = document.querySelector('#exam-standard-select');
const difficultyNote = document.querySelector('#difficulty-note');
const departmentSelect = document.querySelector('#department-select');
const subjectSelect = document.querySelector('#subject-select');
const questionCountSelect = document.querySelector('#question-count-select');
const timeLimitDisplay = document.querySelector('#time-limit-display');
const setupQuestionSummary = document.querySelector('#setup-question-summary');
const questionBankNote = document.querySelector('#question-bank-note');
const setupTimeSummary = document.querySelector('#setup-time-summary');
const questionCount = document.querySelector('#question-count');
const quizDifficulty = document.querySelector('#quiz-difficulty');
const quizTimer = document.querySelector('#quiz-timer');
const scoreDisplay = document.querySelector('#score-display');
const progressTrack = document.querySelector('#progress-track');
const progressFill = document.querySelector('#progress-fill');
const questionCategory = document.querySelector('#question-category');
const questionSource = document.querySelector('#question-source');
const questionText = document.querySelector('#question-text');
const answersElement = document.querySelector('#answers');
const feedback = document.querySelector('#feedback');
const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');
const candidateSummary = document.querySelector('#candidate-summary');
const resultCandidate = document.querySelector('#result-candidate');
const resultTitle = document.querySelector('#result-title');
const resultPercentage = document.querySelector('#result-percentage');
const resultScore = document.querySelector('#result-score');
const resultMessage = document.querySelector('#result-message');
const resultBadge = document.querySelector('#result-badge');
const restartButton = document.querySelector('#restart-button');
const installButton = document.querySelector('#install-button');
const installStatus = document.querySelector('#install-status');
const signOutButton = document.querySelector('#sign-out-button');

let questions = [];
let questionIndex = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;
let candidate = null;
let quizDifficultyLevel = 'standard';
let timeRemaining = 0;
let timerInterval = null;
let pendingInstallPrompt = null;
let trialAttemptStart = 0;
let requestedRoundCount = 20;
let trialLimitApplied = false;
let curriculumQuestionBank = {};
let curriculumBankLoaded = false;
let curriculumBankLoadError = false;
let curriculumBankReady = Promise.resolve();
let answerHistory = [];

function shuffle(items) {
  const cloned = [...items];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[swapIndex]] = [cloned[swapIndex], cloned[i]];
  }
  return cloned;
}

function getTimeLimitSeconds(questionTotal) {
  if (!SECONDS_PER_QUESTION) return 0;
  return Math.max(0, Number(questionTotal) || 0) * SECONDS_PER_QUESTION;
}

function formatTimeLimit(seconds) {
  if (!seconds) return 'No time limit';
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  if (!minutes) return `${remainingSeconds} seconds`;
  if (!remainingSeconds) return `${minutes} minutes`;
  return `${minutes} minutes ${remainingSeconds} seconds`;
}

function updateRoundTimeDisplay(questionTotal = Number(questionCountSelect.value)) {
  if (!questionTotal) {
    timeLimitDisplay.textContent = 'Choose a question count';
    setupTimeSummary.textContent = 'Time set by question count';
    return;
  }
  if (!SECONDS_PER_QUESTION) {
    timeLimitDisplay.textContent = 'No time limit';
    setupTimeSummary.textContent = 'No time limit';
    return;
  }
  const email = candidateEmailInput.value.trim();
  const access = email ? getStoredAccess(email) : null;
  const attemptedQuestionTotal = access && !access.approved && isTrialExpired(access)
    ? Math.min(FREE_QUESTION_LIMIT, questionTotal)
    : questionTotal;
  const duration = formatTimeLimit(getTimeLimitSeconds(attemptedQuestionTotal));
  timeLimitDisplay.textContent = duration;
  setupTimeSummary.textContent = duration;
}

function getClassGrade(className) {
  const value = String(className || '').toLowerCase();
  const junior = value.match(/(?:jss|junior\s+secondary)\s*(\d{1,2})/);
  if (junior) return Math.min(12, Number(junior[1]));
  const senior = value.match(/(?:sss|senior\s+secondary)\s*(\d{1,2})/);
  if (senior) return Math.min(12, Number(senior[1]) + 9);
  const grade = value.match(/(?:grade|year|class|standard|primary)\s*(\d{1,2})/) || value.match(/^(\d{1,2})/);
  if (grade) return Math.min(12, Number(grade[1]));
  return null;
}

function getDifficulty(age, className) {
  const classValue = getClassGrade(className);
  const ageValue = Number(age || 0);
  const gradeValue = classValue ?? (Number.isFinite(ageValue) && ageValue > 0 ? Math.min(12, Math.max(1, Math.ceil(ageValue / 2))) : 8);
  if (gradeValue >= 10) return 'ss';
  if (gradeValue >= 7) return 'jss';
  return 'year';
}

function getSubjectLabel(subject) {
  return subjectLabels[subject];
}

function parseCurriculumMarkdown(markdown, subject) {
  const sections = markdown.split('## Answer guide and explanations');
  const questionSection = sections[0]?.split('## Questions')[1];
  const answerSection = sections[1];
  if (!questionSection || !answerSection) throw new Error(`Question bank format is invalid for ${subject}.`);

  const answerGuide = new Map();
  const answerPattern = /^[ \t]{0,6}(\d{1,3})\.[ \t]+\*\*([A-D])\*\*[ \t]+—[ \t]+([^\r\n]*)/gm;
  for (const match of answerSection.matchAll(answerPattern)) {
    answerGuide.set(Number(match[1]), { letter: match[2], fact: match[3].trim() });
  }

  const questionPattern = /^[ \t]{0,6}(\d{1,3})\.[ \t]+([\s\S]*?)(?=^[ \t]{0,6}\d{1,3}\.[ \t]+|(?![\s\S]))/gm;
  const questions = [];
  for (const match of questionSection.matchAll(questionPattern)) {
    const number = Number(match[1]);
    const entry = match[2].trim();
    const options = entry.match(/(?:^|\s)A\.[ \t]+([\s\S]*?)\s+B\.[ \t]+([\s\S]*?)\s+C\.[ \t]+([\s\S]*?)\s+D\.[ \t]+([\s\S]*)$/);
    const answer = answerGuide.get(number);
    if (!options || !answer) continue;

    const choices = options.slice(1).map((choice) => choice.trim());
    const correct = answer.letter.charCodeAt(0) - 65;
    if (choices.length !== 4 || choices.some((choice) => !choice) || correct < 0 || correct > 3) continue;
    questions.push({
      category: CURRICULUM_BANK_CATEGORIES[subject],
      question: entry.slice(0, options.index).trim(),
      answers: choices,
      correct,
      fact: answer.fact,
    });
  }

  if (questions.length !== 100) throw new Error(`Expected 100 complete questions for ${subject}, found ${questions.length}.`);
  return questions;
}

async function loadCurriculumQuestionBank() {
  const entries = await Promise.all(Object.entries(CURRICULUM_BANK_SOURCES).map(async ([subject, source]) => {
    const response = await fetch(source);
    if (!response.ok) throw new Error(`Could not load ${source}.`);
    return [subject, parseCurriculumMarkdown(await response.text(), subject)];
  }));
  curriculumQuestionBank = Object.fromEntries(entries);
  curriculumBankLoaded = true;
}

function getQuestionPoolForDifficulty(subject, difficultyLevel) {
  const importedPool = window.DY_IMPORTED_QUESTION_BANK?.[subject];
  if (Array.isArray(importedPool) && importedPool.length) return importedPool;
  return questionBank[subject] || [];
}

function updateDifficultyHint() {
  if (!candidateAgeInput.value && !candidateClassInput.value.trim()) {
    difficultyNote.textContent = 'Select JSS, SS, or Year class-level difficulty.';
    return;
  }
  const level = getDifficulty(candidateAgeInput.value, candidateClassInput.value);
  const stage = level === 'ss' ? 'Senior secondary / Year 10–12' : level === 'jss' ? 'Junior secondary / JSS 1–3' : 'Primary / Year 6–9';
  difficultyNote.textContent = `Learner stage estimate: ${stage}.`;
}

function buildQuestionSet(subject, count, difficultyLevel = 'jss1') {
  const pool = getQuestionPoolForDifficulty(subject, difficultyLevel);
  if (!pool.length || count <= 0) return [];
  const uniqueEntries = new Set();
  const selected = [];
  shuffle(pool).forEach((item) => {
    if (selected.length >= count) return;
    const key = `${item.category}::${item.question}`;
    if (uniqueEntries.has(key)) return;
    uniqueEntries.add(key);
    selected.push(item);
  });
  return selected.slice(0, count);
}

function updateQuestionCountOptions() {
  const subject = subjectSelect.value;
  const standard = examStandardSelect.value;
  const pool = getQuestionPoolForDifficulty(subject, standard);
  const previousCount = Number(questionCountSelect.value);
  if (!subject || !pool.length) {
    questionCountSelect.replaceChildren(new Option('Select a subject first', '', true, true));
    questionCountSelect.disabled = true;
    setupQuestionSummary.textContent = 'Choose a subject';
    updateRoundTimeDisplay(0);
    questionBankNote.hidden = true;
    return;
  }
  const availableCounts = pool.length >= 100
    ? [20, 30, 40, 50, 100]
    : pool.length >= 50
      ? [20, 30, 40, 50]
      : [Math.min(pool.length, 10), Math.min(pool.length, 20)].filter((count, index, counts) => count > 0 && counts.indexOf(count) === index);
  questionCountSelect.replaceChildren(...availableCounts.map((count) => new Option(`${count} questions`, String(count))));
  const nextValue = availableCounts.includes(previousCount) ? String(previousCount) : String(availableCounts[0]);
  questionCountSelect.value = nextValue;
  questionCountSelect.disabled = false;
  setupQuestionSummary.textContent = `${nextValue} questions`;
  updateRoundTimeDisplay(Number(nextValue));
  questionBankNote.hidden = false;
  const selectedLevel = EXAM_STANDARD_LABELS[standard] || 'Class level';
  questionBankNote.textContent = `${pool.length} ${getSubjectLabel(subject)} questions available for ${selectedLevel} difficulty. Questions are matched to JSS, SS, or Year-level learning.`;
}

function updateDepartmentSubjects() {
  const subjectKeys = departmentSubjects[departmentSelect.value] || [];
  subjectSelect.replaceChildren(new Option('Select a subject', '', true, true));
  subjectKeys.forEach((key) => subjectSelect.add(new Option(getSubjectLabel(key), key)));
  subjectSelect.disabled = subjectKeys.length === 0;
  updateQuestionCountOptions();
}

function escapeForText(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getStoredAccess(email) {
  const raw = window.localStorage.getItem(STORAGE_KEYS.access);
  let all = {};
  try { all = raw ? JSON.parse(raw) : {}; } catch { all = {}; }
  const key = String(email || '').trim().toLowerCase();
  return key ? (all[key] || { approved: false, plan: 'trial', attempts: 0, email: key }) : { approved: false, plan: 'trial', attempts: 0, email: '' };
}

function setStoredAccess(email, data) {
  const raw = window.localStorage.getItem(STORAGE_KEYS.access);
  let all = {};
  try { all = raw ? JSON.parse(raw) : {}; } catch { all = {}; }
  const key = String(email || '').trim().toLowerCase();
  all[key] = { ...getStoredAccess(key), ...data, email: key, updatedAt: new Date().toISOString() };
  window.localStorage.setItem(STORAGE_KEYS.access, JSON.stringify(all));
  return all[key];
}

function getStoredProfiles() {
  try { return JSON.parse(window.localStorage.getItem(STORAGE_KEYS.profiles) || '{}'); } catch { return {}; }
}

function setActiveProfile(email) {
  const key = String(email || '').trim().toLowerCase();
  if (key) window.localStorage.setItem(STORAGE_KEYS.activeEmail, key);
  signOutButton.hidden = !key;
}

function signOut() {
  window.localStorage.removeItem(STORAGE_KEYS.activeEmail);
  clearInterval(timerInterval);
  timerInterval = null;
  closeAccessModal();
  candidate = null;
  questions = [];
  quizPanel.hidden = true;
  resultPanel.hidden = true;
  setupPanel.hidden = true;
  signInPanel.hidden = false;
  signOutButton.hidden = true;
  signInStatus.hidden = true;
  signInEmailInput.value = '';
  signInEmailInput.focus({ preventScroll: true });
}

function restoreActiveProfile() {
  const email = String(window.localStorage.getItem(STORAGE_KEYS.activeEmail) || '').trim().toLowerCase();
  const profile = getStoredProfiles()[email];
  if (!email || !profile) {
    window.localStorage.removeItem(STORAGE_KEYS.activeEmail);
    signOutButton.hidden = true;
    return;
  }
  restoreParticipantProfile(profile);
  signInPanel.hidden = true;
  setupPanel.hidden = false;
  setActiveProfile(email);
  updateTrialStatus(email);
}

function saveParticipantProfile(profile) {
  const email = String(profile.email || '').trim().toLowerCase();
  if (!email) return;
  const profiles = getStoredProfiles();
  profiles[email] = {
    name: profile.name,
    email,
    age: profile.age,
    className: profile.className,
    examStandard: profile.examStandard,
    departmentValue: profile.departmentValue,
    subjectValue: profile.subjectValue,
    questionCount: profile.questionCount,
  };
  window.localStorage.setItem(STORAGE_KEYS.profiles, JSON.stringify(profiles));
}

function restoreParticipantProfile(profile) {
  candidateNameInput.value = profile.name || '';
  candidateAgeInput.value = profile.age || '';
  candidateClassInput.value = profile.className || '';
  candidateEmailInput.value = profile.email || '';
  examStandardSelect.value = profile.examStandard || '';
  departmentSelect.value = profile.departmentValue || '';
  updateDepartmentSubjects();
  if (profile.subjectValue && [...subjectSelect.options].some((option) => option.value === profile.subjectValue)) {
    subjectSelect.value = profile.subjectValue;
    updateQuestionCountOptions();
  }
  if (profile.questionCount && [...questionCountSelect.options].some((option) => option.value === String(profile.questionCount))) {
    questionCountSelect.value = String(profile.questionCount);
    setupQuestionSummary.textContent = `${questionCountSelect.value} questions`;
  }
  updateRoundTimeDisplay();
  updateDifficultyHint();
}

function getTrialExpiry(access) {
  const startedAt = Date.parse(access.trialStartedAt || '');
  return Number.isFinite(startedAt) ? startedAt + TRIAL_DURATION_MS : null;
}

function isTrialExpired(access) {
  const expiresAt = getTrialExpiry(access);
  return expiresAt !== null && Date.now() >= expiresAt;
}

function updateTrialStatus(email) {
  if (!trialStatus) return;
  const access = getStoredAccess(email);
  if (access.approved) {
    trialStatus.textContent = 'Full access is enabled for this browser profile.';
    return;
  }
  const expiresAt = getTrialExpiry(access);
  if (expiresAt === null) {
    trialStatus.textContent = 'Your 7-day full-access trial starts with your first quiz. After it ends, every selected round is limited to 10 questions.';
  } else if (Date.now() < expiresAt) {
    const date = new Date(expiresAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    trialStatus.textContent = `Your 7-day full-access trial ends ${date}. After that, each selected round is limited to 10 questions.`;
  } else {
    trialStatus.textContent = 'Your free week has ended. Each selected round is limited to 10 questions. Request full access to continue beyond 10.';
  }
}

async function forwardParticipantDetails(participant) {
  const access = getStoredAccess(participant.email);
  if (access.participantDetailsForwardedAt) return true;

  const status = participantRegistrationStatus;
  participantEmailFallback.hidden = true;
  status.hidden = false;
  status.textContent = 'Sending participant name and email to the quiz administrator…';
  const nameField = participantRegistrationForm.querySelector('[name="name"]');
  const emailField = participantRegistrationForm.querySelector('[name="email"]');
  nameField.value = participant.name;
  emailField.value = participant.email;

  try {
    const response = await fetch(participantRegistrationForm.action, {
      method: 'POST',
      body: new FormData(participantRegistrationForm),
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) throw new Error('Email service unavailable');
    setStoredAccess(participant.email, { participantDetailsForwardedAt: new Date().toISOString() });
    status.textContent = 'Participant name and email sent to the quiz administrator.';
    return true;
  } catch {
    participantEmailFallback.href = `mailto:${ADMIN_EMAIL}?${new URLSearchParams({
      subject: 'Quiz participant registration',
      body: `New quiz participant\nName: ${participant.name}\nEmail: ${participant.email}`,
    }).toString()}`;
    participantEmailFallback.hidden = false;
    status.textContent = 'Automatic email delivery failed. The quiz can continue, but please use the email link to forward the participant details.';
    return false;
  }
}

function initialiseProfileControls() {
  signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = signInEmailInput.value.trim().toLowerCase();
    const profile = getStoredProfiles()[email];
    signInStatus.hidden = false;
    if (!profile) {
      signInStatus.textContent = 'No saved profile was found on this device. Choose “Create a profile” to enter your details once.';
      return;
    }
    restoreParticipantProfile(profile);
    setActiveProfile(email);
    signInPanel.hidden = true;
    setupPanel.hidden = false;
    signInStatus.hidden = true;
    updateTrialStatus(email);
    candidateNameInput.focus({ preventScroll: true });
   });

  createProfileButton.addEventListener('click', () => {
    signInPanel.hidden = true;
    setupPanel.hidden = false;
    updateTrialStatus(candidateEmailInput.value.trim());
    candidateNameInput.focus({ preventScroll: true });
  });

  switchProfileButton.addEventListener('click', () => {
    signOut();
  });
}

function getStoredRecords() {
  const raw = window.localStorage.getItem('distinct-youngsters-records');
  return raw ? JSON.parse(raw) : [];
}

function saveStoredRecords(records) {
  window.localStorage.setItem('distinct-youngsters-records', JSON.stringify(records));
}

function updateParticipantRecord(participant) {
  const records = getStoredRecords();
  const email = String(participant.email || '').trim().toLowerCase();
  const nextRecord = {
    name: participant.name,
    email,
    age: participant.age,
    className: participant.className,
    examStandard: participant.examStandard,
    department: participant.department,
    subject: participant.subject,
    attempts: Number(participant.attempts || 0),
    score: Number(participant.score || 0),
    lastUpdated: new Date().toISOString(),
  };
  const index = records.findIndex((entry) => String(entry.email || '').toLowerCase() === email);
  if (index >=  0) records[index] = { ...records[index], ...nextRecord };
     else records.push(nextRecord);
  saveStoredRecords(records);
}

function buildAccessRequestBody(details) {
  return [
    'Hello Admin,',
    '',
    'A participant has requested full access for the Distinct Youngsters quiz in the You Matter app.',
    `Name: ${details.name || 'Participant'}`,
    `Email: ${details.email || 'Unknown'}`,
    `Department: ${details.department || 'Not stated'}`,
    `Subject: ${details.subject || 'General quiz access'}`,
    `Selected plan: ${details.plan || 'Admin review'}`,
    '',
    'Please approve or decline this access request.',
    '',
    'Regards,',
    'You Matter — Distinct Youngsters',
  ].join('\n');
}

function openAccessModal() {
  const modal = document.getElementById('access-modal');
  if (!modal) return;
  const form = document.getElementById('access-request-form');
  const status = document.getElementById('access-form-status');
  const emailFallback = document.getElementById('access-email-fallback');
  document.getElementById('access-name').value = candidate?.name || candidateNameInput.value.trim();
  document.getElementById('access-email').value = candidate?.email || candidateEmailInput.value.trim();
  document.getElementById('access-quiz-subject').value = candidate?.subject || '';
  document.getElementById('access-quiz-department').value = candidate?.department || '';
  status.hidden = true;
  emailFallback.hidden = true;
  emailFallback.href = '#';
  const submitButton = document.getElementById('submit-access-request');
  submitButton.type = 'submit';
  submitButton.onclick = null;
  submitButton.textContent = 'Submit details & request access';
  if (form) [...form.elements].forEach((element) => { element.disabled = false; });
  modal.hidden = false;
  document.getElementById('access-name').focus({ preventScroll: true });
}

function closeAccessModal() {
  const modal = document.getElementById('access-modal');
  if (modal) modal.hidden = true;
}

function initialiseAccessControls() {
  const modal = document.getElementById('access-modal');
  const closeButton = document.getElementById('close-access');
  const form = document.getElementById('access-request-form');
  const organizationField = document.getElementById('organization-name-field');
  const organizationInput = document.getElementById('organization-name');
  if (closeButton) closeButton.addEventListener('click', closeAccessModal);
  if (modal) modal.addEventListener('click', (event) => { if (event.target === modal) closeAccessModal(); });
  document.querySelectorAll('input[name="account_type"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      const needsOrganization = radio.checked && radio.value !== 'Individual';
      if (!needsOrganization) return;
      organizationField.hidden = false;
      organizationInput.required = true;
    });
  });
  document.querySelector('input[name="account_type"][value="Individual"]').addEventListener('change', () => {
    organizationField.hidden = true;
    organizationInput.required = false;
    organizationInput.value = '';
  });
  if (form) form.addEventListener('submit', submitAccessRequest);
}

async function submitAccessRequest(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const status = document.getElementById('access-form-status');
  const emailFallback = document.getElementById('access-email-fallback');
  const submitButton = document.getElementById('submit-access-request');
  const formElements = [...form.elements];
  submitButton.disabled = true;
  submitButton.textContent = 'Sending request…';
  status.hidden = true;
  const replyTo = form.querySelector('[name="_replyto"]');
  if (replyTo) replyTo.value = document.getElementById('access-email').value.trim();

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) throw new Error('Email service unavailable');
    const submittedEmail = document.getElementById('access-email').value.trim();
    const plan = new FormData(form).get('plan');
    setStoredAccess(submittedEmail, { requestStatus: 'pending', requestedPlan: plan });
    status.textContent = 'Request sent for review. Please send your payment proof to adesanya.adegbemi@gmail.com. Full access will be granted after payment is confirmed and your request is approved.';
    formElements.forEach((element) => { element.disabled = true; });
    submitButton.textContent = 'Request sent';
    status.hidden = false;
  } catch (error) {
    const requestFields = [...new FormData(form).entries()]
      .filter(([name]) => !name.startsWith('_'))
      .map(([name, value]) => `${name}: ${value}`)
      .join('\n');
    emailFallback.href = `mailto:${ADMIN_EMAIL}?${new URLSearchParams({
      subject: 'Quiz full-access subscription request',
      body: `Please review this access request.\n\n${requestFields}\n\nPayment proof should be sent to ${ADMIN_EMAIL}.`,
    }).toString()}`;
    emailFallback.hidden = false;
    status.textContent = 'Automatic delivery is unavailable right now. Click the button again to open your email app and send the request.';
    status.hidden = false;
    submitButton.disabled = false;
    submitButton.type = 'button';
    submitButton.textContent = 'Open email to send request';
    submitButton.onclick = () => { window.location.href = emailFallback.href; };
  }
}

function updateTimer() {
  if (!SECONDS_PER_QUESTION) {
    quizTimer.textContent = 'No time limit';
    quizTimer.classList.remove('timer-warning');
    return;
  }
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  quizTimer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  quizTimer.classList.toggle('timer-warning', timeRemaining <= 60);
  if (timeRemaining === 0) {
    clearInterval(timerInterval);
    timerInterval = null;
    showResults(true);
    return;
  }
  timeRemaining -= 1;
}

function startTimer() {
  clearInterval(timerInterval);
  if (!SECONDS_PER_QUESTION) {
    quizTimer.textContent = 'No time limit';
    return;
  }
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

async function startQuiz(event) {
  event.preventDefault();
  const participantEmail = candidateEmailInput.value.trim();
  if (!participantEmail) {
    candidateEmailInput.focus();
    candidateEmailInput.reportValidity();
    return;
  }
  if (!setupPanel.reportValidity()) return;
  await curriculumBankReady;

  candidate = {
    name: candidateNameInput.value.trim(),
    email: participantEmail,
    age: candidateAgeInput.value,
    className: candidateClassInput.value.trim(),
    examStandard: examStandardSelect.value,
    examStandardLabel: EXAM_STANDARD_LABELS[examStandardSelect.value],
    department: departmentSelect.options[departmentSelect.selectedIndex].text,
    subject: subjectSelect.options[subjectSelect.selectedIndex].text,
  };

  const accessState = getStoredAccess(candidate.email);
  quizDifficultyLevel = candidate.examStandard;
  const requestedCount = Number(questionCountSelect.value) || 20;
  requestedRoundCount = requestedCount;
  trialAttemptStart = Number(accessState.attempts || 0);
  let currentAccess = accessState;
  if (!accessState.approved && !accessState.trialStartedAt) {
    currentAccess = setStoredAccess(candidate.email, {
      approved: false,
      plan: 'trial',
      trialStartedAt: new Date().toISOString(),
      attempts: trialAttemptStart,
    });
  }
  const trialExpired = !currentAccess.approved && isTrialExpired(currentAccess);
  trialLimitApplied = trialExpired && requestedCount > FREE_QUESTION_LIMIT;
  const allowedCount = trialExpired ? Math.min(FREE_QUESTION_LIMIT, requestedCount) : requestedCount;
  saveParticipantProfile({
    ...candidate,
    departmentValue: departmentSelect.value,
    subjectValue: subjectSelect.value,
    examStandard: examStandardSelect.value,
    questionCount: requestedCount,
  });
  setActiveProfile(candidate.email);
  startButton.disabled = true;
  await forwardParticipantDetails(candidate);
  startButton.disabled = false;
  updateTrialStatus(candidate.email);
  questions = buildQuestionSet(subjectSelect.value, allowedCount, quizDifficultyLevel);
  const requestedTimeLimit = getTimeLimitSeconds(questions.length);
  const requestedTimeLabel = formatTimeLimit(requestedTimeLimit);
  updateRoundTimeDisplay(questions.length);
  questionIndex = 0;
  score = 0;
  answerHistory = [];
  timeRemaining = requestedTimeLimit;

  setupPanel.hidden = true;
  resultPanel.hidden = true;
  quizPanel.hidden = false;
  candidateSummary.textContent = `Quiz for ${candidate.name} · ${candidate.email} · ${candidate.department} · ${candidate.subject} · ${candidate.examStandardLabel} standard · ${questions.length} questions · ${requestedTimeLabel}`;
  quizDifficulty.textContent = `${candidate.examStandardLabel} STANDARD`;
  updateParticipantRecord({ ...candidate, attempts: trialAttemptStart, score: 0 });
  startTimer();
  renderQuestion();
}

function renderQuestion() {
  const current = questions[questionIndex];
  if (!current) {
    showResults();
    return;
  }
  selectedAnswer = answerHistory[questionIndex]?.selectedAnswer ?? null;
  answered = Boolean(answerHistory[questionIndex]?.answered);
  previousButton.disabled = questionIndex === 0;
  questionCount.textContent = `QUESTION ${questionIndex + 1} OF ${questions.length}`;
  scoreDisplay.textContent = String(score);
  questionCategory.textContent = current.category;
  questionSource.replaceChildren();
  if (current.sourceTitle) {
    const sourceText = document.createTextNode(`${current.attribution ? `${current.attribution} — ` : ''}Source: `);
    const sourceLink = document.createElement('a');
    sourceLink.href = current.sourceUrl;
    sourceLink.target = '_blank';
    sourceLink.rel = 'noopener noreferrer';
    sourceLink.textContent = current.sourceTitle;
    questionSource.append(sourceText, sourceLink);
    questionSource.hidden = false;
  } else {
    questionSource.hidden = true;
  }
  questionText.textContent = current.question;
  progressTrack.setAttribute('aria-valuemax', String(questions.length));
  progressTrack.setAttribute('aria-valuenow', String(questionIndex));
  progressFill.style.width = `${(questionIndex / Math.max(questions.length, 1)) * 100}%`;
  feedback.textContent = '';
  feedback.classList.remove('is-incorrect');
  nextButton.disabled = true;
  nextButton.innerHTML = 'Check answer <span aria-hidden="true">→</span>';
  answersElement.replaceChildren();

  current.answers.forEach((answer, index) => {
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'answer-option';
    option.setAttribute('aria-pressed', String(answered && index === selectedAnswer));
    option.innerHTML = `<span class="answer-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span><span>${escapeForText(answer)}</span>`;
    option.addEventListener('click', () => selectAnswer(index));
    answersElement.appendChild(option);
  });

  if (answered) {
    const history = answerHistory[questionIndex];
    [...answersElement.children].forEach((option, index) => {
      option.disabled = true;
      if (index === current.correct) option.classList.add('correct');
      else if (index === history.selectedAnswer) option.classList.add('incorrect');
    });
    feedback.textContent = `${history.correct ? 'That’s right!' : 'Not quite.'} ${current.fact}`;
    feedback.classList.toggle('is-incorrect', !history.correct);
    nextButton.disabled = false;
    nextButton.innerHTML = questionIndex === questions.length - 1 ? 'See my results <span aria-hidden="true">→</span>' : 'Next question <span aria-hidden="true">→</span>';
  }
  questionText.focus({ preventScroll: true });
}

function selectAnswer(index) {
  if (answered) return;
  selectedAnswer = index;
  [...answersElement.children].forEach((option, optionIndex) => {
    option.setAttribute('aria-pressed', String(optionIndex === index));
  });
  nextButton.disabled = false;
  feedback.textContent = '';
  feedback.classList.remove('is-incorrect');
}

function previousQuestion() {
  if (questionIndex <= 0) return;
  questionIndex -= 1;
  renderQuestion();
}

function checkAnswer() {
  if (answered) {
    questionIndex += 1;
    if (questionIndex >= questions.length) showResults();
    else renderQuestion();
    return;
  }
  if (selectedAnswer === null) return;

  const current = questions[questionIndex];
  answered = true;
  const correct = selectedAnswer === current.correct;
  answerHistory[questionIndex] = { selectedAnswer, answered, correct };

  if (correct) {
    score += 1;
  }

  [...answersElement.children].forEach((option, index) => {
    option.disabled = true;
    if (index === current.correct) option.classList.add('correct');
    else if (index === selectedAnswer) option.classList.add('incorrect');
  });

  feedback.textContent = `${correct ? 'That’s right!' : 'Not quite.'} ${current.fact}`;
  feedback.classList.toggle('is-incorrect', !correct);
  scoreDisplay.textContent = String(score);
  progressTrack.setAttribute('aria-valuenow', String(questionIndex + 1));
  progressFill.style.width = `${((questionIndex + 1) / questions.length) * 100}%`;

  const attemptCount = questionIndex + 1;
  const access = getStoredAccess(candidate.email);
  if (!access.approved) {
    const totalAttempts = trialAttemptStart + attemptCount;
    setStoredAccess(candidate.email, { approved: false, plan: 'trial', attempts: totalAttempts });
    updateParticipantRecord({ ...candidate, attempts: totalAttempts, score });
  }
  if (trialLimitApplied && attemptCount >= questions.length) {
    nextButton.innerHTML = 'Unlock full access <span aria-hidden="true">→</span>';
    openAccessModal();
    return;
  }
  nextButton.innerHTML = questionIndex === questions.length - 1 ? 'See my results <span aria-hidden="true">→</span>' : 'Next question <span aria-hidden="true">→</span>';
}

function showResults(timeExpired = false) {
  clearInterval(timerInterval);
  timerInterval = null;
  quizPanel.hidden = true;
  resultPanel.hidden = false;
  const percent = questions.length ? Math.round((score / questions.length) * 100) : 0;
  const title = percent === 100 ? 'Flawless!' : percent >= 70 ? 'Nicely done!' : percent >= 40 ? 'Good effort!' : 'Curiosity wins!';
  const message = timeExpired
    ? `Time is up. You answered ${score} out of ${questions.length} correctly.`
    : percent === 100
      ? 'A perfect round — your curious mind is shining today.'
      : percent >= 70
        ? 'Strong work. Keep building that confidence.'
        : percent >= 40
          ? 'Nice effort. Practice a bit more and you’ll improve fast.'
          : 'Every great learner starts with a question. Try again and build momentum.';

  resultTitle.textContent = title;
  resultCandidate.textContent = `${candidate.name} · Age ${candidate.age} · ${candidate.className} · ${candidate.subject} · ${candidate.examStandardLabel}`;
  resultPercentage.textContent = `${percent}%`;
  resultScore.textContent = `${score} out of ${questions.length} correct`;
  resultMessage.textContent = message;
  resultBadge.textContent = percent >= 70 ? '✦' : '♡';

  const completedQuestions = Math.min(questions.length, questionIndex + (answered && questionIndex < questions.length ? 1 : 0));
  const totalAttempts = trialAttemptStart + completedQuestions;
  updateParticipantRecord({ ...candidate, attempts: totalAttempts, score });
  const access = getStoredAccess(candidate.email);
  if (!access.approved) {
    setStoredAccess(candidate.email, { approved: false, plan: 'trial', attempts: totalAttempts });
  }

  restartButton.focus({ preventScroll: true });
}

function restartQuiz() {
  resultPanel.hidden = true;
  setupPanel.hidden = false;
  signInPanel.hidden = true;
  candidateNameInput.focus({ preventScroll: true });
}

setupPanel.addEventListener('submit', startQuiz);
initialiseProfileControls();
signOutButton.addEventListener('click', signOut);
departmentSelect.addEventListener('change', updateDepartmentSubjects);
subjectSelect.addEventListener('change', updateQuestionCountOptions);
examStandardSelect.addEventListener('change', () => {
  if (subjectSelect.value) {
    [...subjectSelect.options].forEach((option) => {
      if (option.value) option.textContent = getSubjectLabel(option.value);
    });
    updateQuestionCountOptions();
  }
});
candidateAgeInput.addEventListener('input', updateDifficultyHint);
candidateClassInput.addEventListener('input', updateDifficultyHint);
candidateEmailInput.addEventListener('change', () => {
  updateTrialStatus(candidateEmailInput.value.trim());
  updateRoundTimeDisplay();
});
nextButton.addEventListener('click', checkAnswer);
restartButton.addEventListener('click', restartQuiz);
questionCountSelect.addEventListener('change', () => {
  setupQuestionSummary.textContent = `${questionCountSelect.value} questions`;
  updateRoundTimeDisplay();
});
previousButton.addEventListener('click', () => {
  if (questionIndex > 0) {
    questionIndex -= 1;
    renderQuestion();
  }
});

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  pendingInstallPrompt = event;
  installButton.hidden = false;
});
window.addEventListener('appinstalled', () => {
  pendingInstallPrompt = null;
  installButton.hidden = true;
  installStatus.hidden = false;
  installStatus.textContent = 'You Matter is installed and ready to use.';
});
installButton.addEventListener('click', async () => {
  if (!pendingInstallPrompt) {
    installStatus.hidden = false;
    installStatus.textContent = window.isSecureContext
      ? 'Open your browser menu and choose “Install app” or “Add to Home screen”.'
      : 'To install on Windows or Android, open this app from a secure HTTPS website, then choose “Install app.”';
    return;
  }
  pendingInstallPrompt.prompt();
  await pendingInstallPrompt.userChoice;
  pendingInstallPrompt = null;
});

if ('serviceWorker' in navigator && window.isSecureContext) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {
      installStatus.hidden = false;
      installStatus.textContent = 'Offline support could not start. Check that the app is served over HTTPS.';
    });
  });
}

if (window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true) {
  installButton.hidden = true;
}

updateRoundTimeDisplay();
updateDifficultyHint();
updateDepartmentSubjects();
curriculumBankReady = Promise.resolve();
updateTrialStatus('');
initialiseAccessControls();
restoreActiveProfile();
