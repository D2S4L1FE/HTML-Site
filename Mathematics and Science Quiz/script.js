const STORAGE_KEYS = {
  access: 'distinct-youngsters-access',
  records: 'distinct-youngsters-records',
};
const ADMIN_EMAIL = 'adesanya.adegbemi@gmail.com';
const MAX_TRIAL_ATTEMPTS = 20;

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
};

const departmentSubjects = {
  science: ['math', 'science', 'english', 'physics', 'chemistry', 'biology', 'geography'],
  commercial: ['math', 'english', 'economics', 'commerce', 'businessStudies', 'geography'],
  arts: ['english', 'science', 'geography', 'economics', 'businessStudies'],
};

const setupPanel = document.querySelector('#setup-panel');
const quizPanel = document.querySelector('#quiz-panel');
const resultPanel = document.querySelector('#result-panel');
const candidateNameInput = document.querySelector('#candidate-name');
const candidateAgeInput = document.querySelector('#candidate-age');
const candidateClassInput = document.querySelector('#candidate-class');
const candidateEmailInput = document.querySelector('#candidate-email');
const difficultyNote = document.querySelector('#difficulty-note');
const departmentSelect = document.querySelector('#department-select');
const subjectSelect = document.querySelector('#subject-select');
const questionCountSelect = document.querySelector('#question-count-select');
const timeLimitSelect = document.querySelector('#time-limit-select');
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
const questionText = document.querySelector('#question-text');
const answersElement = document.querySelector('#answers');
const feedback = document.querySelector('#feedback');
const nextButton = document.querySelector('#next-button');
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

let questions = [];
let questionIndex = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;
let candidate = null;
let quizDifficultyLevel = 'standard';
let timeRemaining = 30 * 60;
let timerInterval = null;
let pendingInstallPrompt = null;
let trialAttemptStart = 0;

function shuffle(items) {
  const cloned = [...items];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[swapIndex]] = [cloned[swapIndex], cloned[i]];
  }
  return cloned;
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
  const ageValue = Number(age || 0);
  const classValue = getClassGrade(className);
  const values = [Number.isFinite(ageValue) && ageValue > 0 ? Math.min(12, Math.max(1, ageValue - 5)) : null, classValue].filter((value) => value !== null && Number.isFinite(value));
  const estimate = values.length ? values.reduce((total, value) => total + value, 0) / values.length : 6;
  if (estimate <= 4) return 'easy';
  if (estimate <= 8) return 'standard';
  return 'advanced';
}

function updateDifficultyHint() {
  if (!candidateAgeInput.value && !candidateClassInput.value.trim()) {
    difficultyNote.textContent = "Quiz difficulty will be matched to the candidate's age and class.";
    return;
  }
  const level = getDifficulty(candidateAgeInput.value, candidateClassInput.value);
  const labels = { easy: 'Easy', standard: 'Standard', advanced: 'Advanced' };
  difficultyNote.textContent = `Estimated quiz difficulty: ${labels[level]} (based on age and class).`;
}

function buildQuestionSet(subject, count) {
  const pool = questionBank[subject] || [];
  if (!pool.length || count <= 0) return [];

  const selected = [];
  while (selected.length < count) {
    const round = shuffle(pool);
    if (selected.length && round.length > 1 && round[0].question === selected[selected.length - 1].question) {
      [round[0], round[1]] = [round[1], round[0]];
    }
    selected.push(...round.slice(0, count - selected.length));
  }
  return selected;
}

function updateQuestionCountOptions() {
  const subject = subjectSelect.value;
  const pool = questionBank[subject] || [];
  const previousCount = Number(questionCountSelect.value);
  if (!subject || !pool.length) {
    questionCountSelect.replaceChildren(new Option('Select a subject first', '', true, true));
    questionCountSelect.disabled = true;
    setupQuestionSummary.textContent = 'Choose a subject';
    questionBankNote.hidden = true;
    return;
  }
  const availableCounts = [20, 30, 40, 50];
  questionCountSelect.replaceChildren(...availableCounts.map((count) => new Option(`${count} questions`, String(count))));
  const nextValue = availableCounts.includes(previousCount) ? String(previousCount) : String(availableCounts[0]);
  questionCountSelect.value = nextValue;
  questionCountSelect.disabled = false;
  setupQuestionSummary.textContent = `${nextValue} questions`;
  questionBankNote.hidden = false;
  questionBankNote.textContent = `${pool.length} questions in this subject bank. Longer rounds reuse questions after the bank is exhausted.`;
}

function updateDepartmentSubjects() {
  const subjectKeys = departmentSubjects[departmentSelect.value] || [];
  subjectSelect.replaceChildren(new Option('Select a subject', '', true, true));
  subjectKeys.forEach((key) => subjectSelect.add(new Option(subjectLabels[key], key)));
  subjectSelect.disabled = subjectKeys.length === 0;
  updateQuestionCountOptions();
}

function escapeForText(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getStoredAccess(email) {
  const raw = window.localStorage.getItem('distinct-youngsters-access');
  const all = raw ? JSON.parse(raw) : {};
  const key = String(email || '').trim().toLowerCase();
  return key ? (all[key] || { approved: false, plan: 'trial', attempts: 0, email: key }) : { approved: false, plan: 'trial', attempts: 0, email: '' };
}

function setStoredAccess(email, data) {
  const raw = window.localStorage.getItem('distinct-youngsters-access');
  const all = raw ? JSON.parse(raw) : {};
  const key = String(email || '').trim().toLowerCase();
  all[key] = { ...getStoredAccess(key), ...data, email: key, updatedAt: new Date().toISOString() };
  window.localStorage.setItem('distinct-youngsters-access', JSON.stringify(all));
  return all[key];
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
    department: participant.department,
    subject: participant.subject,
    attempts: Number(participant.attempts || 0),
    score: Number(participant.score || 0),
    lastUpdated: new Date().toISOString(),
  };
  const index = records.findIndex((entry) => String(entry.email || '').toLowerCase() === email);
  if (index >= 0) records[index] = { ...records[index], ...nextRecord };
  else records.push(nextRecord);
  saveStoredRecords(records);
}

function hasApprovedAccess(email) {
  return Boolean(getStoredAccess(email).approved);
}

function applyApprovalFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const email = params.get('email');
  if (!email) return false;
  if (params.get('approved') === '1') {
    setStoredAccess(email, { approved: true, plan: 'approved', attempts: 0 });
    return true;
  }
  if (params.get('declined') === '1') {
    setStoredAccess(email, { approved: false, plan: 'trial', attempts: 0 });
    return true;
  }
  return false;
}

function buildAccessRequestBody(details) {
  return [
    'Hello Admin,',
    '',
    'A participant has requested full access for the Distinct Youngsters quiz.',
    `Name: ${details.name || 'Participant'}`,
    `Email: ${details.email || 'Unknown'}`,
    `Department: ${details.department || 'Not stated'}`,
    `Subject: ${details.subject || 'General quiz access'}`,
    `Selected plan: ${details.plan || 'Admin review'}`,
    '',
    'Please approve or decline this access request.',
    '',
    'Regards,',
    'Distinct Youngsters App',
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
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

function startQuiz(event) {
  event.preventDefault();
  const participantEmail = candidateEmailInput.value.trim();
  if (!participantEmail) {
    candidateEmailInput.focus();
    candidateEmailInput.reportValidity();
    return;
  }
  if (!setupPanel.reportValidity()) return;

  candidate = {
    name: candidateNameInput.value.trim(),
    email: participantEmail,
    age: candidateAgeInput.value,
    className: candidateClassInput.value.trim(),
    department: departmentSelect.options[departmentSelect.selectedIndex].text,
    subject: subjectSelect.options[subjectSelect.selectedIndex].text,
  };

  const accessState = getStoredAccess(candidate.email);

  trialAttemptStart = Number(accessState.attempts || 0);
  if (!accessState.approved && trialAttemptStart >= MAX_TRIAL_ATTEMPTS) {
    openAccessModal();
    return;
  }
  if (!hasApprovedAccess(candidate.email)) {
    setStoredAccess(candidate.email, { approved: false, plan: 'trial', attempts: trialAttemptStart });
  }

  quizDifficultyLevel = getDifficulty(candidate.age, candidate.className);
  const requestedCount = Number(questionCountSelect.value) || 20;
  const allowedCount = accessState.approved
    ? requestedCount
    : Math.min(requestedCount, MAX_TRIAL_ATTEMPTS - trialAttemptStart);
  const requestedTimeLimit = Number(timeLimitSelect.value) || 30;
  questions = buildQuestionSet(subjectSelect.value, allowedCount);
  questionIndex = 0;
  score = 0;
  timeRemaining = requestedTimeLimit * 60;

  setupPanel.hidden = true;
  resultPanel.hidden = true;
  quizPanel.hidden = false;
  candidateSummary.textContent = `Quiz for ${candidate.name} · ${candidate.email} · ${candidate.department} · ${candidate.subject} · ${questions.length} questions · ${requestedTimeLimit} minutes`;
  quizDifficulty.textContent = quizDifficultyLevel.toUpperCase();
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
  selectedAnswer = null;
  answered = false;
  questionCount.textContent = `QUESTION ${questionIndex + 1} OF ${questions.length}`;
  scoreDisplay.textContent = String(score);
  questionCategory.textContent = current.category;
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
    option.setAttribute('aria-pressed', 'false');
    option.innerHTML = `<span class="answer-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span><span>${escapeForText(answer)}</span>`;
    option.addEventListener('click', () => selectAnswer(index));
    answersElement.appendChild(option);
  });
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

function checkAnswer() {
  if (answered) {
    const access = getStoredAccess(candidate.email);
    if (!access.approved && Number(access.attempts || 0) >= MAX_TRIAL_ATTEMPTS) {
      openAccessModal();
      return;
    }
    questionIndex += 1;
    if (questionIndex >= questions.length) showResults();
    else renderQuestion();
    return;
  }
  if (selectedAnswer === null) return;

  const current = questions[questionIndex];
  answered = true;
  const correct = selectedAnswer === current.correct;
  if (correct) score += 1;

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
  if (!access.approved && trialAttemptStart + attemptCount >= MAX_TRIAL_ATTEMPTS) {
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
  resultCandidate.textContent = `${candidate.name} · Age ${candidate.age} · ${candidate.className} · ${candidate.subject}`;
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
  candidateNameInput.focus({ preventScroll: true });
}

setupPanel.addEventListener('submit', startQuiz);
departmentSelect.addEventListener('change', updateDepartmentSubjects);
subjectSelect.addEventListener('change', updateQuestionCountOptions);
candidateAgeInput.addEventListener('input', updateDifficultyHint);
candidateClassInput.addEventListener('input', updateDifficultyHint);
nextButton.addEventListener('click', checkAnswer);
restartButton.addEventListener('click', restartQuiz);
questionCountSelect.addEventListener('change', () => {
  setupQuestionSummary.textContent = `${questionCountSelect.value} questions`;
});
timeLimitSelect.addEventListener('change', () => {
  setupTimeSummary.textContent = `${timeLimitSelect.value} minutes`;
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
  installStatus.textContent = 'Distinct Youngsters is installed and ready to use.';
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

setupTimeSummary.textContent = `${timeLimitSelect.value} minutes`;
updateDifficultyHint();
updateDepartmentSubjects();
applyApprovalFromUrl();
initialiseAccessControls();
