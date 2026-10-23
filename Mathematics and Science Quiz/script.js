const questionBank = {
  math: [
    { category: 'MATHEMATICS', question: 'What is 15% of 200?', answers: ['20', '30', '35', '40'], correct: 1, fact: '10% of 200 is 20, and 5% is 10 — so 15% is 30.' },
    { category: 'MATHEMATICS', question: 'Which number is a prime number?', answers: ['21', '27', '29', '33'], correct: 2, fact: '29 has exactly two factors: 1 and itself.' },
    { category: 'MATHEMATICS', question: 'What is the area of a rectangle that is 8 cm long and 5 cm wide?', answers: ['13 cm²', '26 cm²', '40 cm²', '80 cm²'], correct: 2, fact: 'Area is length × width, so 8 × 5 = 40 cm².' },
    { category: 'MATHEMATICS', question: 'What is the next number in this pattern: 3, 6, 12, 24, …?', answers: ['30', '36', '42', '48'], correct: 3, fact: 'Each number doubles, so 24 × 2 = 48.' },
    { category: 'MATHEMATICS', question: 'How many degrees are in the angles of a triangle, altogether?', answers: ['90°', '180°', '270°', '360°'], correct: 1, fact: 'The interior angles of every triangle add up to 180°.' },
    { category: 'MATHEMATICS', question: 'What is ¾ written as a decimal?', answers: ['0.25', '0.34', '0.70', '0.75'], correct: 3, fact: '¾ means 3 ÷ 4, which equals 0.75.' },
    { category: 'MATHEMATICS', question: 'A dozen eggs costs $4. How much do 6 eggs cost at the same rate?', answers: ['$1', '$2', '$3', '$6'], correct: 1, fact: 'Six eggs are half a dozen, so they cost half of $4: $2.' },
    { category: 'MATHEMATICS', question: 'What is the value of 9²?', answers: ['18', '72', '81', '99'], correct: 2, fact: '9² means 9 × 9, which equals 81.' },
    { category: 'MATHEMATICS', question: 'Which fraction is equivalent to ⅔?', answers: ['4/6', '3/5', '6/8', '5/9'], correct: 0, fact: 'Multiply the numerator and denominator of ⅔ by 2 to get 4/6.' },
    { category: 'MATHEMATICS', question: 'What is the perimeter of a square with sides of 7 cm?', answers: ['14 cm', '21 cm', '28 cm', '49 cm'], correct: 2, fact: 'A square has four equal sides, so 4 × 7 = 28 cm.' },
    { category: 'MATHEMATICS', question: 'What is 144 ÷ 12?', answers: ['10', '11', '12', '14'], correct: 2, fact: '12 × 12 = 144, so 144 ÷ 12 = 12.' },
    { category: 'MATHEMATICS', question: 'If x + 8 = 15, what is x?', answers: ['5', '7', '8', '23'], correct: 1, fact: 'Subtract 8 from both sides: x = 15 − 8 = 7.' },
    { category: 'MATHEMATICS', question: 'What is 7 × 8?', answers: ['54', '56', '58', '64'], correct: 1, fact: 'Seven groups of eight make 56.' },
    { category: 'MATHEMATICS', question: 'What is 2.5 + 1.75?', answers: ['3.25', '4', '4.25', '4.75'], correct: 2, fact: 'Align the decimal places: 2.50 + 1.75 = 4.25.' },
    { category: 'MATHEMATICS', question: 'How many factors does 18 have?', answers: ['4', '5', '6', '8'], correct: 2, fact: 'The factors are 1, 2, 3, 6, 9 and 18.' },
    { category: 'MATHEMATICS', question: 'How many metres are in 1 kilometre?', answers: ['100', '500', '1,000', '10,000'], correct: 2, fact: 'The prefix kilo means one thousand.' },
    { category: 'MATHEMATICS', question: 'What is 5³?', answers: ['15', '25', '75', '125'], correct: 3, fact: '5³ means 5 × 5 × 5, which equals 125.' },
    { category: 'MATHEMATICS', question: 'What is 45% of 100?', answers: ['4.5', '45', '55', '450'], correct: 1, fact: 'Percent means per hundred, so 45% of 100 is 45.' },
    { category: 'MATHEMATICS', question: 'What is one quarter of 36?', answers: ['6', '8', '9', '12'], correct: 2, fact: 'One quarter is 36 ÷ 4, which equals 9.' },
    { category: 'MATHEMATICS', question: 'If 2x = 18, what is x?', answers: ['8', '9', '16', '20'], correct: 1, fact: 'Divide both sides by 2 to get x = 9.' },
    { category: 'MATHEMATICS', question: 'What is an eight-sided polygon called?', answers: ['Hexagon', 'Heptagon', 'Octagon', 'Nonagon'], correct: 2, fact: 'The prefix octa means eight, so an eight-sided polygon is an octagon.' },
    { category: 'MATHEMATICS', question: 'What is the mean of 4, 6 and 8?', answers: ['5', '6', '7', '18'], correct: 1, fact: 'Add the numbers and divide by three: (4 + 6 + 8) ÷ 3 = 6.' },
    { category: 'MATHEMATICS', question: 'Which fraction is equal to 0.6?', answers: ['1/2', '3/5', '2/3', '3/4'], correct: 1, fact: '0.6 is six tenths, which simplifies to 3/5.' },
    { category: 'MATHEMATICS', question: 'What is 360 − 225?', answers: ['125', '135', '145', '155'], correct: 1, fact: 'Subtracting 225 from 360 gives 135.' },
    { category: 'MATHEMATICS', question: 'A book has 120 pages. How many pages are in half the book?', answers: ['40', '50', '60', '80'], correct: 2, fact: 'Half of 120 is 120 ÷ 2 = 60.' },
    { category: 'MATHEMATICS', question: 'Which number is prime?', answers: ['27', '31', '39', '49'], correct: 1, fact: '31 is divisible only by 1 and 31.' },
    { category: 'MATHEMATICS', question: 'A cyclist travels 30 km in 2 hours. What is the average speed?', answers: ['12 km/h', '15 km/h', '30 km/h', '60 km/h'], correct: 1, fact: 'Average speed is distance divided by time: 30 ÷ 2 = 15 km/h.' },
    { category: 'MATHEMATICS', question: 'What is the ratio 5:10 in its simplest form?', answers: ['1:2', '2:5', '5:2', '10:5'], correct: 0, fact: 'Divide both parts of 5:10 by 5 to get 1:2.' },
    { category: 'MATHEMATICS', question: 'How many centimetres are in 2.4 metres?', answers: ['24', '204', '240', '2,400'], correct: 2, fact: 'One metre is 100 centimetres, so 2.4 metres is 240 centimetres.' },
    { category: 'MATHEMATICS', question: 'What is the value of 100 ÷ 4?', answers: ['20', '25', '40', '50'], correct: 1, fact: 'One quarter of 100 is 25.' },
    { category: 'MATHEMATICS', question: 'What is the square root of 81?', answers: ['7', '8', '9', '10'], correct: 2, fact: '9 × 9 = 81, so the square root of 81 is 9.' },
    { category: 'MATHEMATICS', question: 'What is the lowest common multiple of 4 and 6?', answers: ['8', '10', '12', '24'], correct: 2, fact: '12 is the smallest number divisible by both 4 and 6.' },
    { category: 'MATHEMATICS', question: 'What is the highest common factor of 18 and 24?', answers: ['3', '6', '9', '12'], correct: 1, fact: 'The largest number that divides both 18 and 24 is 6.' },
    { category: 'MATHEMATICS', question: 'What is 1.2 × 5?', answers: ['5', '6', '6.2', '10'], correct: 1, fact: '12 tenths multiplied by 5 equals 60 tenths, or 6.' },
    { category: 'MATHEMATICS', question: 'What is 18 ÷ 3 + 4?', answers: ['6', '10', '14', '22'], correct: 1, fact: 'Do the division first: 18 ÷ 3 = 6, then add 4.' },
    { category: 'MATHEMATICS', question: 'What is the perimeter of a square with 9 cm sides?', answers: ['18 cm', '27 cm', '36 cm', '81 cm'], correct: 2, fact: 'A square has four equal sides: 4 × 9 = 36 cm.' },
    { category: 'MATHEMATICS', question: 'A circle has a radius of 5 cm. What is its diameter?', answers: ['5 cm', '10 cm', '15 cm', '25 cm'], correct: 1, fact: 'The diameter is twice the radius, so 2 × 5 = 10 cm.' },
    { category: 'MATHEMATICS', question: 'Two angles in a triangle are 60° each. What is the third angle?', answers: ['30°', '60°', '90°', '120°'], correct: 1, fact: 'A triangle totals 180°; 180° − 60° − 60° = 60°.' },
    { category: 'MATHEMATICS', question: 'What is 25% more than 80?', answers: ['90', '100', '105', '120'], correct: 1, fact: '25% of 80 is 20, and 80 + 20 = 100.' },
    { category: 'MATHEMATICS', question: 'Simplify the fraction 12/16.', answers: ['2/3', '3/4', '4/5', '6/8'], correct: 1, fact: 'Divide the numerator and denominator by 4 to get 3/4.' },
    { category: 'MATHEMATICS', question: 'Which fraction is equal to 0.04?', answers: ['1/4', '1/20', '1/25', '4/10'], correct: 2, fact: '0.04 is 4/100, which simplifies to 1/25.' },
    { category: 'MATHEMATICS', question: 'What comes next in the sequence 2, 5, 8, 11, …?', answers: ['12', '13', '14', '15'], correct: 2, fact: 'The sequence increases by 3 each time, so the next term is 14.' },
    { category: 'MATHEMATICS', question: 'What is ⅜ of 40?', answers: ['12', '15', '18', '20'], correct: 1, fact: '40 ÷ 8 = 5, and 5 × 3 = 15.' },
    { category: 'MATHEMATICS', question: 'What is the volume of a cuboid measuring 3 cm × 4 cm × 5 cm?', answers: ['12 cm³', '20 cm³', '47 cm³', '60 cm³'], correct: 3, fact: 'Volume is length × width × height: 3 × 4 × 5 = 60 cm³.' },
    { category: 'MATHEMATICS', question: 'How many degrees are in a straight angle?', answers: ['90°', '120°', '180°', '360°'], correct: 2, fact: 'A straight line forms an angle of 180°.' },
    { category: 'MATHEMATICS', question: 'What is −3 + 8?', answers: ['−11', '−5', '5', '11'], correct: 2, fact: 'Starting at −3 and moving 8 steps right on the number line gives 5.' },
    { category: 'MATHEMATICS', question: 'How many minutes are in 2 hours and 35 minutes?', answers: ['125', '145', '155', '235'], correct: 2, fact: 'Two hours is 120 minutes; 120 + 35 = 155 minutes.' },
    { category: 'MATHEMATICS', question: 'In the ratio 2:3, if the first quantity is 10, what is the second?', answers: ['12', '15', '20', '30'], correct: 1, fact: 'The first part is multiplied by 5, so multiply the second part by 5 too: 15.' },
    { category: 'MATHEMATICS', question: 'What is the median of 3, 9, 5, 7 and 1?', answers: ['3', '5', '7', '9'], correct: 1, fact: 'In order, the values are 1, 3, 5, 7, 9; the middle is 5.' },
    { category: 'MATHEMATICS', question: 'What is the area of a triangle with base 10 cm and height 6 cm?', answers: ['16 cm²', '30 cm²', '60 cm²', '80 cm²'], correct: 1, fact: 'Triangle area is half of base × height: ½ × 10 × 6 = 30 cm².' },
    { category: 'MATHEMATICS', question: 'What is 1/5 as a percentage?', answers: ['5%', '10%', '20%', '50%'], correct: 2, fact: '1 ÷ 5 = 0.2, which is 20%.' },
    { category: 'MATHEMATICS', question: 'What is 7.2 − 3.85?', answers: ['3.25', '3.35', '3.45', '4.35'], correct: 1, fact: 'Write 7.2 as 7.20; 7.20 − 3.85 = 3.35.' },
    { category: 'MATHEMATICS', question: 'What is 8% of 250?', answers: ['16', '20', '25', '32'], correct: 1, fact: '1% of 250 is 2.5, so 8% is 8 × 2.5 = 20.' },
    { category: 'MATHEMATICS', question: 'What is the volume of a cube with side length 4 cm?', answers: ['16 cm³', '32 cm³', '48 cm³', '64 cm³'], correct: 3, fact: 'Cube volume is side³: 4 × 4 × 4 = 64 cm³.' },
    { category: 'MATHEMATICS', question: 'Simplify the fraction 8/12.', answers: ['1/2', '2/3', '3/4', '4/5'], correct: 1, fact: 'Divide both 8 and 12 by 4 to get 2/3.' },
    { category: 'MATHEMATICS', question: 'What is the probability of rolling an even number on a fair six-sided die?', answers: ['1/6', '1/3', '1/2', '2/3'], correct: 2, fact: 'Three of the six outcomes are even: 3/6 = 1/2.' },
    { category: 'MATHEMATICS', question: 'What number comes next: 1, 4, 9, 16, …?', answers: ['20', '24', '25', '36'], correct: 2, fact: 'These are square numbers: 1², 2², 3², 4²; next is 5² = 25.' },
    { category: 'MATHEMATICS', question: 'What is 9 × 12?', answers: ['98', '108', '118', '128'], correct: 1, fact: '9 × 12 = 9 × (10 + 2) = 90 + 18 = 108.' },
    { category: 'MATHEMATICS', question: 'What is the perimeter of a 6 cm by 4 cm rectangle?', answers: ['10 cm', '20 cm', '24 cm', '30 cm'], correct: 1, fact: 'Perimeter is 2 × (length + width): 2 × (6 + 4) = 20 cm.' },
    { category: 'MATHEMATICS', question: 'What is ⅔ of 30?', answers: ['10', '15', '20', '25'], correct: 2, fact: '30 ÷ 3 = 10, then 10 × 2 = 20.' },
  ],
  science: [
    { category: 'SCIENCE', question: 'Which planet is known as the Red Planet?', answers: ['Venus', 'Mars', 'Jupiter', 'Mercury'], correct: 1, fact: 'Iron-rich dust gives Mars its familiar reddish colour.' },
    { category: 'SCIENCE', question: 'What gas do plants absorb from the air during photosynthesis?', answers: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'], correct: 2, fact: 'Plants use carbon dioxide, water and light to make sugars.' },
    { category: 'SCIENCE', question: 'What is the largest organ of the human body?', answers: ['The liver', 'The brain', 'The lungs', 'The skin'], correct: 3, fact: 'The skin is the body’s largest organ by surface area and weight.' },
    { category: 'SCIENCE', question: 'What force keeps planets in orbit around the Sun?', answers: ['Magnetism', 'Gravity', 'Friction', 'Electricity'], correct: 1, fact: 'The Sun’s gravity holds the planets in their orbits.' },
    { category: 'SCIENCE', question: 'At sea level, at what temperature does water boil?', answers: ['0°C', '50°C', '100°C', '150°C'], correct: 2, fact: 'At standard atmospheric pressure, water boils at 100°C.' },
    { category: 'SCIENCE', question: 'Which part of a plant takes in most of the water from the soil?', answers: ['The flower', 'The leaves', 'The roots', 'The stem'], correct: 2, fact: 'Roots absorb water and minerals from the soil.' },
    { category: 'SCIENCE', question: 'How many legs does an adult insect have?', answers: ['Four', 'Six', 'Eight', 'Ten'], correct: 1, fact: 'Insects have three pairs of legs, making six in total.' },
    { category: 'SCIENCE', question: 'Which state of matter has a fixed volume but takes the shape of its container?', answers: ['Solid', 'Liquid', 'Gas', 'Plasma'], correct: 1, fact: 'A liquid keeps its volume while flowing to match its container.' },
    { category: 'SCIENCE', question: 'What is the closest star to Earth?', answers: ['Sirius', 'Proxima Centauri', 'The Sun', 'Polaris'], correct: 2, fact: 'The Sun is our nearest star, about 150 million kilometres away.' },
    { category: 'SCIENCE', question: 'Which blood cells help the body fight infections?', answers: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma cells'], correct: 1, fact: 'White blood cells are a key part of the immune system.' },
    { category: 'SCIENCE', question: 'What is the process called when a liquid changes into a gas?', answers: ['Freezing', 'Condensation', 'Evaporation', 'Melting'], correct: 2, fact: 'Evaporation changes liquid particles into a gas at the surface.' },
    { category: 'SCIENCE', question: 'Which of these animals is a mammal that lays eggs?', answers: ['Dolphin', 'Platypus', 'Penguin', 'Lizard'], correct: 1, fact: 'The platypus is one of the few mammals that lays eggs.' },
    { category: 'SCIENCE', question: 'What is the chemical symbol for water?', answers: ['CO₂', 'H₂O', 'O₂', 'NaCl'], correct: 1, fact: 'A water molecule has two hydrogen atoms and one oxygen atom.' },
    { category: 'SCIENCE', question: 'Which star is at the centre of our solar system?', answers: ['Sirius', 'The Sun', 'Polaris', 'Betelgeuse'], correct: 1, fact: 'The planets in our solar system orbit the Sun.' },
    { category: 'SCIENCE', question: 'Which organ pumps blood around the human body?', answers: ['Lung', 'Brain', 'Heart', 'Stomach'], correct: 2, fact: 'The heart is a muscular pump that circulates blood.' },
    { category: 'SCIENCE', question: 'What is the hardest naturally occurring substance?', answers: ['Quartz', 'Iron', 'Diamond', 'Granite'], correct: 2, fact: 'Diamond is the hardest naturally occurring mineral on the Mohs scale.' },
    { category: 'SCIENCE', question: 'Which part of the cell contains most of its genetic material?', answers: ['Nucleus', 'Cell membrane', 'Cytoplasm', 'Cell wall'], correct: 0, fact: 'In most cells, DNA is organized inside the nucleus.' },
    { category: 'SCIENCE', question: 'What is the change from a solid to a liquid called?', answers: ['Freezing', 'Melting', 'Condensation', 'Evaporation'], correct: 1, fact: 'Melting happens when a solid gains enough heat to become liquid.' },
    { category: 'SCIENCE', question: 'Which gas makes up most of Earth’s atmosphere?', answers: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'], correct: 2, fact: 'Nitrogen makes up about 78% of Earth’s atmosphere.' },
    { category: 'SCIENCE', question: 'What do bees collect from flowers to make honey?', answers: ['Nectar', 'Sap', 'Pollen only', 'Dew'], correct: 0, fact: 'Bees transform flower nectar into honey.' },
    { category: 'SCIENCE', question: 'Which simple machine is a seesaw an example of?', answers: ['Pulley', 'Lever', 'Wheel and axle', 'Wedge'], correct: 1, fact: 'A seesaw is a lever that pivots around a fulcrum.' },
    { category: 'SCIENCE', question: 'What is the main source of energy for Earth’s climate?', answers: ['The Moon', 'The Sun', 'Earth’s core', 'Ocean tides'], correct: 1, fact: 'Solar energy from the Sun drives weather and climate systems.' },
    { category: 'SCIENCE', question: 'Which vitamin can the body make when skin is exposed to sunlight?', answers: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'], correct: 3, fact: 'Sunlight helps the skin produce vitamin D.' },
    { category: 'SCIENCE', question: 'What is the name for animals that eat both plants and other animals?', answers: ['Herbivores', 'Carnivores', 'Omnivores', 'Decomposers'], correct: 2, fact: 'Omnivores eat food from both plant and animal sources.' },
    { category: 'SCIENCE', question: 'Which instrument is used to measure temperature?', answers: ['Barometer', 'Thermometer', 'Compass', 'Ruler'], correct: 1, fact: 'A thermometer measures how hot or cold something is.' },
    { category: 'SCIENCE', question: 'What is the closest layer of the atmosphere to Earth’s surface?', answers: ['Stratosphere', 'Mesosphere', 'Troposphere', 'Thermosphere'], correct: 2, fact: 'We live in the troposphere, where most weather occurs.' },
    { category: 'SCIENCE', question: 'Which material is a good conductor of electricity?', answers: ['Rubber', 'Plastic', 'Copper', 'Dry wood'], correct: 2, fact: 'Copper allows electric charge to flow easily and is widely used in wiring.' },
    { category: 'SCIENCE', question: 'What is the natural process by which water vapour cools into liquid droplets?', answers: ['Condensation', 'Evaporation', 'Sublimation', 'Filtration'], correct: 0, fact: 'Condensation forms liquid droplets, such as clouds or dew, from water vapour.' },
    { category: 'SCIENCE', question: 'Which planet is famous for its prominent rings?', answers: ['Earth', 'Saturn', 'Mars', 'Venus'], correct: 1, fact: 'Saturn’s bright rings are made mostly of ice and rocky particles.' },
    { category: 'SCIENCE', question: 'Which part of the human body contains the smallest bones?', answers: ['The hand', 'The ear', 'The foot', 'The nose'], correct: 1, fact: 'The three tiny bones in the middle ear help transmit sound vibrations.' },
    { category: 'SCIENCE', question: 'What is the basic unit of life?', answers: ['Atom', 'Cell', 'Organ', 'Tissue'], correct: 1, fact: 'All living things are made of one or more cells.' },
    { category: 'SCIENCE', question: 'Which planet is the largest in our solar system?', answers: ['Earth', 'Saturn', 'Jupiter', 'Neptune'], correct: 2, fact: 'Jupiter is the largest planet in the solar system.' },
    { category: 'SCIENCE', question: 'What do we call the change from a gas to a liquid?', answers: ['Evaporation', 'Condensation', 'Melting', 'Freezing'], correct: 1, fact: 'Condensation occurs when a gas cools and becomes liquid.' },
    { category: 'SCIENCE', question: 'Which organ helps humans breathe by taking oxygen into the body?', answers: ['Kidneys', 'Lungs', 'Stomach', 'Heart'], correct: 1, fact: 'The lungs exchange oxygen and carbon dioxide with the air.' },
    { category: 'SCIENCE', question: 'What is the name of the process plants use to make food using light?', answers: ['Respiration', 'Photosynthesis', 'Digestion', 'Germination'], correct: 1, fact: 'Photosynthesis uses light energy to make sugars from water and carbon dioxide.' },
    { category: 'SCIENCE', question: 'Which is the nearest planet to the Sun?', answers: ['Venus', 'Earth', 'Mercury', 'Mars'], correct: 2, fact: 'Mercury is the closest planet to the Sun.' },
    { category: 'SCIENCE', question: 'What is the main function of red blood cells?', answers: ['Fight infection', 'Carry oxygen', 'Help blood clot', 'Digest food'], correct: 1, fact: 'Red blood cells carry oxygen from the lungs to tissues around the body.' },
    { category: 'SCIENCE', question: 'Which material is usually attracted to a magnet?', answers: ['Iron', 'Glass', 'Paper', 'Copper'], correct: 0, fact: 'Iron is a magnetic metal.' },
    { category: 'SCIENCE', question: 'What is the name for molten rock beneath Earth’s surface?', answers: ['Lava', 'Magma', 'Ash', 'Granite'], correct: 1, fact: 'Molten rock underground is called magma; at the surface it is lava.' },
    { category: 'SCIENCE', question: 'Which planet is known for having the Great Red Spot?', answers: ['Mars', 'Jupiter', 'Saturn', 'Neptune'], correct: 1, fact: 'The Great Red Spot is a giant storm in Jupiter’s atmosphere.' },
    { category: 'SCIENCE', question: 'What is the name for an animal that eats only plants?', answers: ['Carnivore', 'Herbivore', 'Omnivore', 'Predator'], correct: 1, fact: 'Herbivores get their food from plants.' },
    { category: 'SCIENCE', question: 'Which sense organ detects sound?', answers: ['Eyes', 'Ears', 'Nose', 'Skin'], correct: 1, fact: 'The ears detect sound vibrations and help with balance.' },
    { category: 'SCIENCE', question: 'What is the freezing point of pure water at standard pressure?', answers: ['−10°C', '0°C', '32°C', '100°C'], correct: 1, fact: 'Pure water freezes at 0°C, which is also 32°F.' },
    { category: 'SCIENCE', question: 'Which force opposes motion when two surfaces rub together?', answers: ['Gravity', 'Friction', 'Buoyancy', 'Magnetism'], correct: 1, fact: 'Friction acts between surfaces in contact and resists sliding.' },
    { category: 'SCIENCE', question: 'What is the name of Earth’s natural satellite?', answers: ['The Moon', 'Phobos', 'Titan', 'Europa'], correct: 0, fact: 'The Moon is Earth’s only natural satellite.' },
    { category: 'SCIENCE', question: 'Which part of a flower can develop into a fruit after fertilisation?', answers: ['Petal', 'Ovary', 'Sepal', 'Stem'], correct: 1, fact: 'The flower’s ovary can develop into fruit containing seeds.' },
    { category: 'SCIENCE', question: 'What is the closest layer of Earth to its centre?', answers: ['Crust', 'Mantle', 'Outer core', 'Inner core'], correct: 3, fact: 'Earth’s solid inner core lies at the centre of the planet.' },
    { category: 'SCIENCE', question: 'Which renewable energy source uses moving air?', answers: ['Solar', 'Wind', 'Geothermal', 'Hydroelectric'], correct: 1, fact: 'Wind turbines convert the movement of air into electricity.' },
    { category: 'SCIENCE', question: 'Which tiny particles make up the nucleus of an atom?', answers: ['Protons and neutrons', 'Electrons and photons', 'Molecules and cells', 'Ions and compounds'], correct: 0, fact: 'An atom’s nucleus contains protons and usually neutrons.' },
    { category: 'SCIENCE', question: 'What do decomposers do in an ecosystem?', answers: ['Make sunlight', 'Break down dead matter', 'Produce rocks', 'Stop rainfall'], correct: 1, fact: 'Decomposers recycle nutrients by breaking down dead organisms and waste.' },
    { category: 'SCIENCE', question: 'Which instrument is used to see very small objects such as cells?', answers: ['Telescope', 'Microscope', 'Periscope', 'Binoculars'], correct: 1, fact: 'A microscope magnifies objects too small to see clearly with the naked eye.' },
    { category: 'SCIENCE', question: 'What type of energy is stored in food?', answers: ['Chemical energy', 'Sound energy', 'Light energy', 'Nuclear energy'], correct: 0, fact: 'Food stores chemical energy that the body releases during respiration.' },
    { category: 'SCIENCE', question: 'Which gas do humans breathe out in greater amounts than they breathe in?', answers: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Helium'], correct: 1, fact: 'Respiration produces carbon dioxide, which is exhaled.' },
    { category: 'SCIENCE', question: 'What is the young stage of a frog called?', answers: ['Caterpillar', 'Tadpole', 'Pup', 'Nymph'], correct: 1, fact: 'A frog hatches as a tadpole and changes as it grows.' },
    { category: 'SCIENCE', question: 'Which body system includes the brain and spinal cord?', answers: ['Digestive system', 'Nervous system', 'Respiratory system', 'Skeletal system'], correct: 1, fact: 'The brain and spinal cord form the central nervous system.' },
    { category: 'SCIENCE', question: 'What is the name of the path a planet follows around a star?', answers: ['Axis', 'Orbit', 'Equator', 'Eclipse'], correct: 1, fact: 'An orbit is the path an object follows around another object in space.' },
    { category: 'SCIENCE', question: 'Which part of the skeleton protects the brain?', answers: ['Rib cage', 'Skull', 'Pelvis', 'Spine'], correct: 1, fact: 'The skull surrounds and protects the brain.' },
    { category: 'SCIENCE', question: 'What is the main gas in fizzy drinks that forms bubbles?', answers: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'], correct: 1, fact: 'Carbon dioxide is dissolved under pressure and forms bubbles when released.' },
    { category: 'SCIENCE', question: 'Which type of rock forms when magma or lava cools?', answers: ['Sedimentary', 'Metamorphic', 'Igneous', 'Fossil'], correct: 2, fact: 'Igneous rocks form as molten rock cools and solidifies.' },
    { category: 'SCIENCE', question: 'What is the main job of plant roots besides anchoring the plant?', answers: ['Make seeds', 'Absorb water and minerals', 'Catch insects', 'Produce flowers'], correct: 1, fact: 'Roots take up water and minerals needed for plant growth.' },
  ],
};

const subjectLabels = {
  math: 'Mathematics',
  science: 'Integrated Science',
  english: 'English Language',
  physics: 'Physics',
  chemistry: 'Chemistry',
  biology: 'Biology',
  furtherMath: 'Further Mathematics',
  agriculturalScience: 'Agricultural Science',
  computerStudies: 'Computer Studies / ICT',
  geography: 'Geography',
  economics: 'Economics',
  commerce: 'Commerce',
  financialAccounting: 'Financial Accounting',
  businessStudies: 'Business Studies',
  marketing: 'Marketing',
  officePractice: 'Office Practice',
  literature: 'Literature in English',
  government: 'Government',
  history: 'History',
  civicEducation: 'Civic Education',
  religiousStudies: 'Religious Studies (CRS / IRS)',
};

const departmentSubjects = {
  science: ['math', 'english', 'physics', 'chemistry', 'biology', 'furtherMath', 'agriculturalScience', 'computerStudies', 'geography', 'science'],
  commercial: ['math', 'english', 'economics', 'commerce', 'financialAccounting', 'businessStudies', 'marketing', 'officePractice', 'computerStudies', 'geography'],
  arts: ['english', 'math', 'literature', 'government', 'history', 'civicEducation', 'religiousStudies', 'geography', 'economics'],
};

const additionalQuestionData = {
  english: [
    ['Choose the correctly spelled word.', ['Neccessary', 'Necessary', 'Necesary', 'Necessery'], 1, 'Necessary is spelled with one c and two s letters.'],
    ['Choose the noun in this sentence: “The bright moon appeared.”', ['bright', 'moon', 'appeared', 'the'], 1, 'Moon is the noun naming a thing.'],
    ['What is the past tense of “teach”?', ['teached', 'taught', 'teaching', 'teaches'], 1, 'Teach has the irregular past tense taught.'],
    ['Choose the synonym for “brief”.', ['short', 'late', 'wide', 'quiet'], 0, 'Brief means short in duration or length.'],
    ['Which punctuation mark ends a direct question?', ['Comma', 'Full stop', 'Question mark', 'Colon'], 2, 'A direct question ends with a question mark.'],
    ['Choose the correct verb: “She ___ to school every day.”', ['go', 'goes', 'going', 'gone'], 1, 'A singular third-person subject takes goes in the present tense.'],
    ['What is the opposite of “ancient”?', ['old', 'historic', 'modern', 'early'], 2, 'Modern is an antonym of ancient.'],
    ['Which word is an adjective in “The careful student wrote neatly”?', ['student', 'wrote', 'careful', 'neatly'], 2, 'Careful describes the student, so it is an adjective.'],
    ['Choose the correct plural of “child”.', ['childs', 'children', 'childes', 'childrens'], 1, 'Children is the irregular plural form of child.'],
    ['In “They arrived after lunch,” what is the verb?', ['They', 'arrived', 'after', 'lunch'], 1, 'Arrived tells what the subject did.'],
    ['Choose the correct word: “The students submitted ___ assignments.”', ['there', 'their', 'they’re', 'them'], 1, 'Their is the possessive form showing that the assignments belong to the students.'],
    ['Which sentence is in the passive voice?', ['Ada wrote the letter.', 'The letter was written by Ada.', 'Ada is writing.', 'Ada will write tomorrow.'], 1, 'In passive voice, the subject receives the action.'],
    ['What is the function of “although” in a sentence?', ['Contrast', 'Possession', 'Plurality', 'Questioning'], 0, 'Although is a subordinating conjunction that introduces a contrast.'],
    ['Choose the correctly punctuated direct speech.', ['Mina said “I am ready”.', 'Mina said, “I am ready.”', 'Mina said “I am ready.”,', 'Mina, said “I am ready.”'], 1, 'A comma introduces the quoted speech, and the final punctuation goes inside the closing quotation mark.'],
    ['What is the closest meaning of “reluctant”?', ['Unwilling', 'Cheerful', 'Certain', 'Careless'], 0, 'Reluctant means unwilling or hesitant to do something.'],
    ['Choose the correct plural form of “analysis”.', ['analysises', 'analyses', 'analysis', 'analys'], 1, 'The plural of analysis is analyses.'],
    ['Which word is a preposition in “The book is under the desk”?', ['book', 'is', 'under', 'desk'], 2, 'Under shows the relationship between the book and the desk.'],
    ['Choose the correct contraction for “they are”.', ['their', 'there', 'they’re', 'theirs'], 2, 'They’re is the contraction of they are.'],
    ['What does the idiom “break the ice” mean?', ['Begin a friendly conversation', 'Damage frozen water', 'End a meeting', 'Make a mistake'], 0, 'Break the ice means to make people feel more comfortable at the start of an interaction.'],
    ['Which sentence uses a semicolon correctly?', ['I studied; and passed.', 'The bell rang; we entered the class.', 'She; likes reading.', 'They went; home.'], 1, 'A semicolon can connect two closely related independent clauses.'],
  ],
  physics: [
    ['What is the SI unit of force?', ['Joule', 'Newton', 'Watt', 'Pascal'], 1, 'Force is measured in newtons (N).'],
    ['Which instrument measures electric current?', ['Voltmeter', 'Ammeter', 'Thermometer', 'Barometer'], 1, 'An ammeter measures current in amperes.'],
    ['What is the approximate speed of light in a vacuum?', ['300,000 km/s', '30,000 km/s', '3,000 km/s', '300 km/s'], 0, 'Light travels at about 300,000 kilometres per second in a vacuum.'],
    ['Which energy store increases when an object is lifted?', ['Chemical', 'Gravitational potential', 'Sound', 'Nuclear'], 1, 'Lifting an object increases its gravitational potential energy.'],
    ['What happens to current in a simple series circuit if one bulb is removed?', ['It increases', 'It stops', 'It stays the same', 'It reverses'], 1, 'Removing a component opens the single path, breaking the series circuit.'],
    ['Which type of wave needs a medium to travel?', ['Light wave', 'Radio wave', 'Sound wave', 'X-ray'], 2, 'Sound is a mechanical wave and needs particles in a medium.'],
    ['What is the unit of electrical resistance?', ['Ohm', 'Ampere', 'Volt', 'Coulomb'], 0, 'Electrical resistance is measured in ohms (Ω).'],
    ['If a 2 kg object accelerates at 3 m/s², what force acts on it?', ['1.5 N', '5 N', '6 N', '9 N'], 2, 'Newton’s second law gives force = mass × acceleration = 2 × 3 = 6 N.'],
    ['Which lens can converge parallel rays of light?', ['Concave lens', 'Convex lens', 'Plane glass', 'Prism only'], 1, 'A convex lens converges parallel light rays to a focus.'],
    ['What is the approximate acceleration due to gravity near Earth’s surface?', ['1.6 m/s²', '9.8 m/s²', '30 m/s²', '98 m/s²'], 1, 'Earth’s gravitational field strength is approximately 9.8 m/s².'],
    ['A 12 V supply drives 3 A through a resistor. What is its resistance?', ['4 Ω', '9 Ω', '15 Ω', '36 Ω'], 0, 'Ohm’s law gives R = V/I = 12/3 = 4 Ω.'],
    ['A 2 kg object moves at 5 m/s. What is its kinetic energy?', ['10 J', '25 J', '50 J', '100 J'], 1, 'Kinetic energy is ½mv² = ½ × 2 × 25 = 25 J.'],
    ['What is the period of a wave with frequency 5 Hz?', ['0.2 s', '2 s', '5 s', '25 s'], 0, 'Period T = 1/f = 1/5 = 0.2 seconds.'],
    ['In a parallel circuit, the potential difference across each branch is:', ['The same', 'Always zero', 'Split in proportion to resistance', 'Only present in one branch'], 0, 'Each parallel branch is connected across the same two points, so the voltage is equal.'],
    ['Which law states that pressure in an enclosed fluid is transmitted equally in all directions?', ['Pascal’s principle', 'Ohm’s law', 'Hooke’s law', 'Newton’s first law'], 0, 'Pascal’s principle describes pressure transmission through an enclosed fluid.'],
    ['What is the SI unit of power?', ['Joule', 'Watt', 'Newton', 'Ampere'], 1, 'Power is measured in watts (W).'],
    ['Which mirror is commonly used as a rear-view mirror because it gives a wide field of view?', ['Concave', 'Convex', 'Plane only', 'Parabolic'], 1, 'A convex mirror gives an upright, reduced image and a wide field of view.'],
    ['What happens to the resistance of a typical metal wire as its temperature rises?', ['It usually increases', 'It becomes zero', 'It always halves', 'It has no possible change'], 0, 'Heating a metal increases lattice vibrations, which usually raises resistance.'],
    ['What is the momentum of a 3 kg object moving at 4 m/s?', ['7 kg·m/s', '12 kg·m/s', '16 kg·m/s', '24 kg·m/s'], 1, 'Momentum is mass × velocity: 3 × 4 = 12 kg·m/s.'],
    ['Which colour of visible light has the shortest wavelength?', ['Red', 'Yellow', 'Green', 'Violet'], 3, 'Violet light has the shortest wavelength in the visible spectrum.'],
  ],
  chemistry: [
    ['What is the chemical symbol for sodium?', ['So', 'S', 'Na', 'N'], 2, 'Sodium’s symbol is Na, from its Latin name natrium.'],
    ['A substance with a pH of 2 is best described as:', ['Strongly acidic', 'Neutral', 'Weakly alkaline', 'Strongly alkaline'], 0, 'Values below 7 are acidic; pH 2 is strongly acidic.'],
    ['Which particle has a negative electrical charge?', ['Proton', 'Neutron', 'Electron', 'Nucleus'], 2, 'Electrons carry a negative charge.'],
    ['What is the formula for carbon dioxide?', ['CO', 'CO₂', 'C₂O', 'CaO'], 1, 'Each carbon dioxide molecule contains one carbon and two oxygen atoms.'],
    ['Which method separates an insoluble solid from a liquid?', ['Filtration', 'Distillation', 'Chromatography', 'Evaporation only'], 0, 'A filter traps insoluble solid particles while liquid passes through.'],
    ['What gas is produced when an acid reacts with a carbonate?', ['Oxygen', 'Hydrogen', 'Carbon dioxide', 'Nitrogen'], 2, 'An acid-carbonate reaction produces a salt, water and carbon dioxide.'],
    ['What is the atomic number of an element equal to?', ['Number of neutrons', 'Number of protons', 'Protons plus neutrons', 'Number of shells'], 1, 'Atomic number is the number of protons in an atom’s nucleus.'],
    ['Which type of bond forms when atoms share pairs of electrons?', ['Ionic', 'Covalent', 'Metallic only', 'Hydrogen'], 1, 'Covalent bonds form when atoms share electron pairs.'],
    ['What is the relative charge of a neutron?', ['−1', '0', '+1', '+2'], 1, 'A neutron has no electrical charge.'],
    ['Which gas turns limewater milky?', ['Oxygen', 'Carbon dioxide', 'Hydrogen', 'Chlorine'], 1, 'Carbon dioxide reacts with limewater to form cloudy calcium carbonate.'],
    ['What is the oxidation number of oxygen in most compounds?', ['−2', '−1', '0', '+2'], 0, 'Oxygen usually has an oxidation number of −2 in compounds.'],
    ['What volume does one mole of an ideal gas occupy at room conditions, approximately?', ['2.4 dm³', '24 dm³', '240 dm³', '0.24 dm³'], 1, 'The approximate molar gas volume at room conditions is 24 dm³.'],
    ['Which process occurs at the anode during electrolysis?', ['Oxidation', 'Reduction', 'Neutralisation', 'Condensation'], 0, 'Oxidation, involving loss of electrons, occurs at the anode.'],
    ['What is the formula of sulfuric acid?', ['HCl', 'H₂SO₄', 'HNO₃', 'NaOH'], 1, 'Sulfuric acid has the chemical formula H₂SO₄.'],
    ['Which change increases the rate of a chemical reaction by providing more frequent collisions?', ['Increasing reactant concentration', 'Using larger solid pieces', 'Lowering temperature', 'Removing a catalyst'], 0, 'Higher concentration increases collision frequency between reacting particles.'],
    ['What is the chemical formula of methane?', ['CH₄', 'CO₂', 'NH₃', 'H₂O'], 0, 'A methane molecule contains one carbon atom and four hydrogen atoms.'],
    ['What is the pH of a neutral solution at room temperature?', ['0', '5', '7', '14'], 2, 'A neutral aqueous solution has a pH of about 7 at room temperature.'],
    ['Which gas is released at the cathode when dilute hydrochloric acid is electrolysed?', ['Hydrogen', 'Oxygen', 'Chlorine', 'Nitrogen'], 0, 'Hydrogen ions gain electrons at the cathode to form hydrogen gas.'],
    ['What is the name for a reaction that releases heat to its surroundings?', ['Endothermic', 'Exothermic', 'Reversible only', 'Neutral'], 1, 'An exothermic reaction transfers heat to its surroundings.'],
    ['Which element is a halogen?', ['Sodium', 'Calcium', 'Chlorine', 'Neon'], 2, 'Chlorine is a Group 17 halogen.'],
  ],
  biology: [
    ['Which cell structure controls most activities of a plant or animal cell?', ['Nucleus', 'Cell wall', 'Vacuole', 'Cytoplasm only'], 0, 'The nucleus contains genetic material and helps control cell activities.'],
    ['Which blood vessels carry blood away from the heart?', ['Veins', 'Arteries', 'Capillaries', 'Alveoli'], 1, 'Arteries carry blood away from the heart.'],
    ['What is the role of chlorophyll in plants?', ['Absorb light energy', 'Absorb minerals', 'Make roots', 'Transport sugar'], 0, 'Chlorophyll absorbs light energy for photosynthesis.'],
    ['Which organ produces insulin?', ['Liver', 'Pancreas', 'Kidney', 'Lung'], 1, 'The pancreas produces insulin, which helps regulate blood glucose.'],
    ['What is the basic unit of inheritance?', ['Tissue', 'Gene', 'Organ', 'Enzyme'], 1, 'Genes are sections of DNA that carry inherited information.'],
    ['Where does most gas exchange happen in human lungs?', ['Bronchi', 'Alveoli', 'Trachea', 'Diaphragm'], 1, 'Tiny alveoli provide a large surface for oxygen and carbon dioxide exchange.'],
    ['Which organisms make their own food in most food chains?', ['Consumers', 'Predators', 'Producers', 'Parasites'], 2, 'Producers such as green plants make food, usually using sunlight.'],
    ['What is the function of the kidneys?', ['Pump blood', 'Filter waste from blood', 'Exchange gases', 'Digest proteins'], 1, 'Kidneys filter wastes and excess water from the blood.'],
    ['Which type of reproduction involves one parent and no fusion of gametes?', ['Sexual', 'Asexual', 'Cross-pollination', 'Fertilisation'], 1, 'Asexual reproduction produces offspring from one parent without gamete fusion.'],
    ['Which nutrient is primarily used for growth and repair of body tissues?', ['Protein', 'Water', 'Fibre', 'Vitamin C'], 0, 'Proteins provide amino acids used to build and repair tissues.'],
    ['What is the name of the cell division that produces two genetically identical daughter cells?', ['Mitosis', 'Meiosis', 'Fertilisation', 'Mutation'], 0, 'Mitosis produces two daughter cells with the same chromosome number as the parent cell.'],
    ['Which blood group is commonly called the universal red-cell donor when Rh factor is considered?', ['AB positive', 'O negative', 'A positive', 'B negative'], 1, 'O-negative red blood cells lack A, B and Rh D antigens.'],
    ['What is the role of decomposers in an ecosystem?', ['Recycle nutrients from dead matter', 'Make sunlight', 'Stop all competition', 'Produce oxygen from rocks'], 0, 'Decomposers break down organic matter and return nutrients to the ecosystem.'],
    ['Which hormone lowers blood glucose by helping cells take it up?', ['Insulin', 'Adrenaline', 'Thyroxine', 'Oestrogen'], 0, 'Insulin promotes glucose uptake and storage, reducing blood glucose.'],
    ['In a food chain, energy transfer between trophic levels is generally:', ['100% efficient', 'Inefficient, with energy lost as heat and activity', 'Always reversed', 'Independent of organisms'], 1, 'Much energy is used or lost as heat at each trophic level.'],
    ['Which part of a plant transports water from the roots to the leaves?', ['Phloem', 'Xylem', 'Stomata', 'Petal'], 1, 'Xylem vessels carry water and mineral ions upward through a plant.'],
    ['What is the name for the loss of water vapour from plant leaves?', ['Transpiration', 'Pollination', 'Respiration', 'Germination'], 0, 'Transpiration is water loss from plant surfaces, especially through leaf stomata.'],
    ['Which organ produces bile?', ['Pancreas', 'Liver', 'Stomach', 'Heart'], 1, 'The liver produces bile, which helps emulsify fats.'],
    ['What is the genotype of a person with two identical alleles for a gene?', ['Heterozygous', 'Homozygous', 'Hybrid only', 'Dominant only'], 1, 'Homozygous means the two alleles for a gene are the same.'],
    ['Which structure connects a muscle to a bone?', ['Ligament', 'Tendon', 'Cartilage', 'Nerve'], 1, 'Tendons attach muscles to bones.'],
  ],
  furtherMath: [
    ['Solve: 3x − 7 = 11.', ['4', '6', '8', '18'], 1, 'Add 7 to get 3x = 18, then divide by 3: x = 6.'],
    ['What is the gradient of y = 4x + 2?', ['2', '4', '−4', '6'], 1, 'In y = mx + c, the coefficient m is the gradient.'],
    ['What is sin 30°?', ['0', '1/2', '√3/2', '1'], 1, 'The exact value of sin 30° is one half.'],
    ['Expand (x + 3)(x + 2).', ['x² + 5x + 6', 'x² + 6x + 5', 'x² + x + 6', 'x² + 5'], 0, 'Multiply the terms to get x² + 2x + 3x + 6.'],
    ['What is the next term of the arithmetic sequence 5, 9, 13, …?', ['15', '16', '17', '18'], 2, 'The common difference is 4, so the next term is 13 + 4 = 17.'],
    ['Factorise x² − 9.', ['(x − 3)(x + 3)', '(x − 9)(x + 1)', '(x − 3)²', '(x + 9)(x − 1)'], 0, 'This is a difference of squares: a² − b² = (a − b)(a + b).'],
    ['What is the value of log₁₀(1000)?', ['2', '3', '10', '100'], 1, '10³ = 1000, so log₁₀(1000) = 3.'],
    ['If vectors a = (2, 1) and b = (3, 4), what is a + b?', ['(1, 3)', '(5, 5)', '(6, 4)', '(5, 4)'], 1, 'Add corresponding components: (2 + 3, 1 + 4) = (5, 5).'],
    ['What is the determinant of [[2, 1], [3, 4]]?', ['5', '8', '11', '14'], 0, 'The determinant is (2 × 4) − (1 × 3) = 5.'],
    ['Differentiate y = x³ with respect to x.', ['x²', '2x', '3x²', '3x'], 2, 'Using the power rule, d(x³)/dx = 3x².'],
    ['Solve the simultaneous equations x + y = 7 and x − y = 1.', ['x = 3, y = 4', 'x = 4, y = 3', 'x = 5, y = 2', 'x = 6, y = 1'], 1, 'Adding the equations gives 2x = 8, so x = 4 and y = 3.'],
    ['What is the sum of the interior angles of a hexagon?', ['360°', '540°', '720°', '900°'], 2, 'A hexagon has (6 − 2) × 180° = 720° interior angle sum.'],
    ['If f(x) = 2x + 1, what is f(4)?', ['7', '8', '9', '10'], 2, 'Substitute x = 4: f(4) = 2(4) + 1 = 9.'],
    ['What is the value of cos 60°?', ['0', '1/2', '√3/2', '1'], 1, 'The exact value of cos 60° is one half.'],
    ['What is the mode of 2, 3, 3, 4, 5?', ['2', '3', '4', '5'], 1, 'The mode is the value that occurs most often: 3.'],
    ['Solve x² − 5x + 6 = 0.', ['x = 1 or 6', 'x = 2 or 3', 'x = −2 or −3', 'x = 0 or 6'], 1, 'Factorise as (x − 2)(x − 3) = 0.'],
    ['What is the derivative of sin x?', ['−sin x', 'cos x', '−cos x', 'tan x'], 1, 'The derivative of sin x is cos x.'],
    ['What is the sum of the first 10 positive integers?', ['45', '50', '55', '100'], 2, 'The sum is n(n + 1)/2 = 10 × 11 / 2 = 55.'],
    ['If P(A) = 0.3, what is P(not A)?', ['0.3', '0.6', '0.7', '1.3'], 2, 'The complement probability is 1 − 0.3 = 0.7.'],
    ['What is the gradient of a line perpendicular to a line with gradient 2?', ['2', '−2', '1/2', '−1/2'], 3, 'Perpendicular non-vertical lines have gradients whose product is −1.'],
  ],
  agriculturalScience: [
    ['Which soil type usually drains water most quickly?', ['Clay', 'Sandy', 'Peaty', 'Loamy'], 1, 'Large spaces between sand particles allow quick drainage.'],
    ['What is crop rotation?', ['Growing one crop repeatedly', 'Changing crops grown on a field over seasons', 'Harvesting at night', 'Planting without soil'], 1, 'Crop rotation changes the crop sequence to support soil fertility and reduce pests.'],
    ['Which farm tool is commonly used for loosening soil by hand?', ['Sickle', 'Hoe', 'Rake only', 'Watering can'], 1, 'A hoe is used to loosen soil and control weeds.'],
    ['What do leguminous crops often add to soil through root bacteria?', ['Nitrogen compounds', 'Salt', 'Sand', 'Carbon monoxide'], 0, 'Root-nodule bacteria fix nitrogen, enriching the soil.'],
    ['Which animal is a ruminant?', ['Pig', 'Cattle', 'Chicken', 'Rabbit'], 1, 'Cattle chew cud and have a specialised multi-compartment stomach.'],
    ['What is the main purpose of vaccination in livestock?', ['Improve soil', 'Prevent specific diseases', 'Increase rainfall', 'Replace feed'], 1, 'Vaccines help animals develop protection against particular diseases.'],
    ['Which practice helps reduce soil erosion on a hillside?', ['Downhill ploughing', 'Contour farming', 'Removing all vegetation', 'Overgrazing'], 1, 'Contour farming follows the slope contours and slows water runoff.'],
    ['What is a young female chicken called before it begins laying?', ['Cockerel', 'Pullet', 'Ram', 'Kid'], 1, 'A pullet is a young female chicken.'],
    ['Which nutrient is especially important for leafy vegetative growth in plants?', ['Nitrogen', 'Sodium', 'Chlorine', 'Lead'], 0, 'Nitrogen is needed to make proteins and chlorophyll for plant growth.'],
    ['What does germination describe?', ['Seed beginning to grow', 'Fruit being harvested', 'Soil being watered', 'Plants losing leaves'], 0, 'Germination is the start of growth from a viable seed.'],
    ['What is the main purpose of a farm budget?', ['Plan and estimate farm income and expenses', 'Measure rainfall only', 'Replace soil testing', 'Count wild animals'], 0, 'A farm budget helps plan expected costs, income and resource use.'],
    ['Which disease is commonly controlled in poultry through vaccination?', ['Newcastle disease', 'Rust of wheat', 'Cassava mosaic only', 'Citrus canker'], 0, 'Vaccination is an important method for preventing Newcastle disease in poultry.'],
    ['What is the process of removing excess water from farmland called?', ['Drainage', 'Mulching', 'Pruning', 'Thinning'], 0, 'Drainage removes excess water from soil to improve root conditions.'],
    ['Which livestock feed component is a major source of energy?', ['Carbohydrates', 'Mineral salts only', 'Water only', 'Vitamins only'], 0, 'Carbohydrates such as grains provide energy in animal diets.'],
    ['What does selective breeding aim to do?', ['Increase desirable inherited traits', 'Make all offspring identical by chance', 'Remove the need for feed', 'Stop reproduction'], 0, 'Selective breeding chooses parents with useful traits for future generations.'],
    ['Which farming practice covers soil to conserve moisture and suppress weeds?', ['Mulching', 'Overgrazing', 'Bush burning', 'Deforestation'], 0, 'Mulch protects soil, reduces evaporation and can suppress weeds.'],
    ['What is compost mainly made from?', ['Decomposed organic material', 'Crushed glass', 'Petroleum only', 'Metal scraps'], 0, 'Compost is made from decomposed organic matter and can improve soil.'],
    ['Which farm record tracks births, deaths and treatments of animals?', ['Livestock record', 'Weather map', 'Sales poster', 'Crop calendar only'], 0, 'Livestock records track herd or flock events and management.'],
    ['What is irrigation?', ['Artificial application of water to crops', 'Removal of harvested grain', 'Mixing animal breeds', 'Storing farm tools'], 0, 'Irrigation supplies water to crops when rainfall is insufficient.'],
    ['Which practice helps control weeds without using herbicides?', ['Hand weeding', 'Overwatering', 'Late harvesting', 'Overstocking'], 0, 'Hand weeding physically removes unwanted plants from fields.'],
  ],
  computerStudies: [
    ['What does CPU stand for?', ['Central Processing Unit', 'Computer Power Utility', 'Core Program User', 'Central Print Unit'], 0, 'The CPU processes instructions and controls many computer operations.'],
    ['Which device is mainly used to enter text into a computer?', ['Monitor', 'Keyboard', 'Speaker', 'Projector'], 1, 'A keyboard is an input device for text and commands.'],
    ['Which of these is an operating system?', ['Linux', 'HTML', 'USB', 'JPEG'], 0, 'Linux is an operating system that manages computer hardware and software.'],
    ['What is the main purpose of a web browser?', ['Create electricity', 'Access and view websites', 'Print paper only', 'Scan for viruses only'], 1, 'A web browser retrieves and displays web pages.'],
    ['Which binary digit represents an off/false state?', ['1', '0', '2', '10'], 1, 'Binary uses 0 and 1; 0 commonly represents off or false.'],
    ['What is a strong password practice?', ['Reuse one short password', 'Use a unique long password', 'Share it with friends', 'Write it publicly'], 1, 'Unique, long passwords reduce the risk from stolen credentials.'],
    ['Which component stores files even when a computer is turned off?', ['RAM', 'SSD', 'Cache only', 'Register'], 1, 'An SSD is non-volatile storage and retains data without power.'],
    ['What does URL identify?', ['A web address', 'A keyboard key', 'A file size', 'A processor speed'], 0, 'A URL is the address used to locate a resource on the web.'],
    ['Which is an example of an output device?', ['Mouse', 'Microphone', 'Monitor', 'Scanner'], 2, 'A monitor displays information from the computer.'],
    ['Why should important files be backed up?', ['To delete them', 'To restore them if lost or damaged', 'To slow the computer', 'To make passwords public'], 1, 'Backups provide copies that can be restored after loss or damage.'],
    ['In a spreadsheet, what does a formula usually begin with?', ['=', '#', '&', '@'], 0, 'Spreadsheet formulas commonly begin with an equals sign.'],
    ['What is phishing?', ['A fraudulent attempt to obtain sensitive information', 'A way to compress images', 'A spreadsheet calculation', 'A computer cooling method'], 0, 'Phishing messages impersonate trusted sources to steal information.'],
    ['Which network device forwards data between different networks?', ['Router', 'Keyboard', 'Monitor', 'Printer'], 0, 'A router directs packets between networks.'],
    ['What is an algorithm?', ['A finite sequence of steps to solve a problem', 'A computer screen', 'A type of storage cable', 'A printed photograph'], 0, 'An algorithm is a defined sequence of instructions for a task.'],
    ['Which language is primarily used to structure content on a web page?', ['HTML', 'SQL', 'Bash', 'C'], 0, 'HTML describes the structure and content of web pages.'],
    ['What does RAM provide to a computer?', ['Temporary working memory', 'Permanent printed output', 'Internet service', 'Electrical grounding'], 0, 'RAM temporarily holds data and instructions currently in use.'],
    ['Which file extension commonly indicates a JavaScript file?', ['.js', '.jpg', '.mp3', '.docx'], 0, 'JavaScript source files commonly use the .js extension.'],
    ['What is two-factor authentication?', ['Using two different verification steps to sign in', 'Using two usernames only', 'Sharing one password twice', 'Turning off account security'], 0, 'Two-factor authentication adds a second proof of identity beyond a password.'],
    ['Which data type is best for storing a whole number in a program?', ['Integer', 'Boolean', 'Image', 'Audio'], 0, 'An integer represents a whole number without a fractional part.'],
    ['What is the purpose of a computer firewall?', ['Filter network traffic according to security rules', 'Increase screen brightness', 'Print documents', 'Charge a battery'], 0, 'A firewall monitors and filters network traffic to help protect systems.'],
  ],
  geography: [
    ['What is the imaginary line at 0° latitude called?', ['Prime Meridian', 'Equator', 'Tropic of Cancer', 'Arctic Circle'], 1, 'The Equator divides Earth into the Northern and Southern Hemispheres.'],
    ['Which instrument records earthquake waves?', ['Anemometer', 'Seismograph', 'Hygrometer', 'Rain gauge'], 1, 'A seismograph records ground motion caused by earthquakes.'],
    ['What is the process by which water vapour becomes liquid droplets?', ['Evaporation', 'Condensation', 'Infiltration', 'Transpiration'], 1, 'Condensation changes water vapour into liquid droplets.'],
    ['Which direction is opposite east on a compass?', ['North', 'South', 'West', 'North-east'], 2, 'West is opposite east.'],
    ['What is a delta?', ['A desert dune', 'Deposited sediment at a river mouth', 'A mountain pass', 'A type of cloud'], 1, 'A river delta forms where sediment is deposited near its mouth.'],
    ['Which map feature explains the meaning of symbols?', ['Scale', 'Legend or key', 'Grid line', 'Title only'], 1, 'The map key explains the symbols used on the map.'],
    ['What is the name for the long-term average pattern of weather in a place?', ['Climate', 'Forecast', 'Season', 'Atmosphere'], 0, 'Climate describes long-term average weather conditions.'],
    ['Lines joining places of equal height above sea level are called:', ['Isobars', 'Contours', 'Meridians', 'Latitudes'], 1, 'Contour lines join points of equal elevation.'],
    ['Which type of rainfall occurs when moist air rises over a mountain?', ['Relief rainfall', 'Convectional rainfall', 'Frontal rainfall', 'Cyclonic rainfall'], 0, 'Relief rainfall forms as air is forced up a highland slope.'],
    ['What is urbanisation?', ['Growth in the proportion of people living in towns and cities', 'Loss of all rivers', 'Movement from cities to farms only', 'A change in wind direction'], 0, 'Urbanisation is the increasing share of a population living in urban areas.'],
    ['What is the difference between weather and climate?', ['Weather is short-term; climate describes long-term patterns', 'They mean exactly the same', 'Climate changes hourly only', 'Weather is measured over centuries only'], 0, 'Weather describes short-term conditions; climate summarises long-term patterns.'],
    ['Which scale is used to represent distance on a map?', ['Map scale', 'Compass rose', 'Legend only', 'Contour interval only'], 0, 'A map scale relates map distance to real-world distance.'],
    ['What is migration?', ['Movement of people from one place to another to live', 'Daily change in temperature', 'River erosion only', 'A type of cloud'], 0, 'Migration is the movement of people between places, often involving a change of residence.'],
    ['Which process wears away and transports rock or soil?', ['Erosion', 'Condensation', 'Deposition only', 'Rotation'], 0, 'Erosion removes and transports weathered material.'],
    ['What is a population density?', ['Number of people per unit area', 'Number of houses in a country only', 'Births per family', 'Total rainfall per year'], 0, 'Population density is commonly measured as people per unit of land area.'],
    ['What is the Prime Meridian’s longitude?', ['0°', '90° N', '180°', '23.5° S'], 0, 'The Prime Meridian is the 0° longitude reference line.'],
    ['Which process builds up sediment in a new location?', ['Deposition', 'Erosion', 'Weathering', 'Evaporation'], 0, 'Deposition occurs when transported material is laid down.'],
    ['What is a renewable resource?', ['A resource naturally replenished on a human timescale', 'A resource that can never be replaced', 'A type of map symbol', 'A temporary weather event'], 0, 'Renewable resources can be replenished naturally over a relatively short period.'],
    ['Which instrument measures wind speed?', ['Anemometer', 'Barometer', 'Thermometer', 'Seismograph'], 0, 'An anemometer measures wind speed.'],
    ['What is deforestation?', ['Large-scale removal of forest cover', 'Planting trees in a city', 'Movement of a river delta', 'Formation of a cloud'], 0, 'Deforestation is the clearing or removal of forests.'],
  ],
  economics: [
    ['What is opportunity cost?', ['The money printed by a bank', 'The next best alternative given up', 'A tax on imports', 'Total business profit'], 1, 'Opportunity cost is the value of the next best option forgone.'],
    ['What usually happens to quantity demanded when a price falls, other things equal?', ['It falls', 'It rises', 'It becomes zero', 'It never changes'], 1, 'The law of demand says lower prices generally increase quantity demanded.'],
    ['Which is a factor of production that includes workers?', ['Land', 'Labour', 'Capital', 'Enterprise'], 1, 'Labour is human effort used in producing goods and services.'],
    ['What is inflation?', ['A general rise in prices over time', 'A fall in all wages', 'A type of export', 'A business loan'], 0, 'Inflation is a sustained increase in the general price level.'],
    ['If demand is greater than supply at the current price, what pressure may occur?', ['Price may rise', 'Price must be zero', 'Supply disappears forever', 'Demand becomes negative'], 0, 'Shortages can put upward pressure on market prices.'],
    ['Which institution commonly sets a country’s monetary policy?', ['Central bank', 'Local shop', 'Trade union', 'School board'], 0, 'A central bank manages monetary policy and often influences interest rates.'],
    ['What is a budget deficit?', ['Revenue exceeds spending', 'Spending exceeds revenue', 'Exports equal imports', 'A fall in population'], 1, 'A deficit occurs when expenditure is greater than revenue.'],
    ['What does GDP measure?', ['The value of final goods and services produced within a country', 'The number of schools only', 'A country’s rainfall', 'The price of one product'], 0, 'GDP measures the value of final output produced within a country over a period.'],
    ['A market with many sellers offering similar products is closest to:', ['Perfect competition', 'Monopoly', 'Monopsony', 'Bilateral monopoly'], 0, 'Many sellers and similar products are features of competitive markets.'],
    ['What is a progressive tax?', ['A tax rate that rises as taxable income rises', 'A fixed fee for every person', 'A tax only on exports', 'A voluntary donation'], 0, 'Progressive taxes take a larger share at higher income levels.'],
    ['What is the main function of money as a medium of exchange?', ['It is accepted to pay for goods and services', 'It grows crops', 'It sets weather patterns', 'It replaces every resource'], 0, 'A medium of exchange makes buying and selling easier than barter.'],
    ['If a country imports more goods and services than it exports, it has a trade:', ['Surplus', 'Deficit', 'Quota', 'Subsidy'], 1, 'A trade deficit occurs when imports exceed exports in value.'],
    ['What is the opportunity cost of using savings to buy a phone?', ['The best alternative use of those savings that is given up', 'The phone’s colour', 'The shop’s opening time', 'The number of phone apps'], 0, 'Opportunity cost is the next best alternative sacrificed.'],
    ['What is a subsidy?', ['Government financial support to reduce costs or encourage an activity', 'A tax on every customer', 'A household budget', 'A type of currency'], 0, 'A subsidy is support, often financial, provided to encourage production or consumption.'],
    ['When demand increases while supply stays the same, equilibrium price will generally:', ['Rise', 'Fall to zero', 'Remain impossible to determine in every case', 'Become negative'], 0, 'Higher demand with unchanged supply generally raises equilibrium price.'],
    ['What is the law of supply, other things being equal?', ['Higher prices tend to increase quantity supplied', 'Higher prices always reduce supply to zero', 'Supply never responds to price', 'Demand equals population'], 0, 'The law of supply describes a positive relationship between price and quantity supplied.'],
    ['What is a public good typically characterised by?', ['Non-rivalry and non-excludability', 'Private ownership only', 'A price set by one seller', 'Being available to one buyer only'], 0, 'Public goods are generally non-rival and difficult to exclude people from using.'],
    ['What is a recession?', ['A significant decline in economic activity', 'A rise in one shop’s sales', 'A change in currency colour', 'A government election'], 0, 'A recession is a broad decline in economic activity over time.'],
    ['What does a higher interest rate generally do to the cost of borrowing?', ['Raises it', 'Makes it zero', 'Removes repayment', 'Has no possible effect'], 0, 'Higher interest rates generally increase the cost of borrowing.'],
    ['What is comparative advantage?', ['Ability to produce at a lower opportunity cost', 'Ability to print more money', 'Having the largest population', 'Selling at the highest price only'], 0, 'Comparative advantage is based on producing at a lower opportunity cost.'],
  ],
  commerce: [
    ['What is trade?', ['Exchange of goods and services', 'Growing crops only', 'Making laws', 'Measuring rainfall'], 0, 'Trade is the buying, selling, or exchange of goods and services.'],
    ['Which document is commonly sent by a seller to request payment?', ['Invoice', 'Receipt', 'Catalogue', 'Cheque'], 0, 'An invoice lists goods or services supplied and the amount due.'],
    ['What is a retailer?', ['A seller to final consumers', 'A producer of raw materials only', 'A central bank', 'A ship captain'], 0, 'Retailers sell goods in relatively small quantities to consumers.'],
    ['Which form of transport is usually most suitable for crude oil over long distances on land?', ['Pipeline', 'Bicycle', 'Air freight', 'Hand cart'], 0, 'Pipelines move large quantities of liquids continuously over land.'],
    ['What is warehousing mainly used for?', ['Storing goods until they are needed', 'Setting tax rates', 'Growing crops', 'Issuing passports'], 0, 'Warehouses store goods before distribution or sale.'],
    ['What does insurance help a business do?', ['Transfer or reduce specified financial risks', 'Guarantee every profit', 'Avoid all laws', 'Eliminate competition'], 0, 'Insurance provides financial protection against covered risks.'],
    ['Which is an example of e-commerce?', ['Buying a book through a website', 'Writing a paper ledger only', 'Growing vegetables', 'Repairing a road'], 0, 'E-commerce is buying or selling using electronic networks.'],
    ['What is a wholesaler?', ['A trader who sells in bulk to retailers', 'A final consumer', 'A tax collector', 'A factory machine'], 0, 'Wholesalers commonly buy in bulk and supply retailers.'],
    ['What is the main purpose of a receipt?', ['Proof that payment was made', 'A request for a quote', 'A transport route', 'A list of employees'], 0, 'A receipt acknowledges that money or goods have been received.'],
    ['Which trade is conducted between different countries?', ['Internal trade', 'Home trade', 'International trade', 'Retail trade only'], 2, 'International trade involves exchange across national borders.'],
    ['What does a bill of lading acknowledge?', ['Receipt of goods for shipment and the terms of carriage', 'Payment of income tax', 'Ownership of a shop', 'A staff appointment'], 0, 'A bill of lading is a transport document acknowledging goods received for shipment.'],
    ['What is hire purchase?', ['Buying goods through instalments while using them under an agreement', 'Paying only with barter', 'Renting without any purchase option', 'A cash-only wholesale sale'], 0, 'Hire purchase allows use of goods while paying instalments under agreed terms.'],
    ['What is a tariff on imports?', ['A tax charged on imported goods', 'A discount for exporters', 'A warehouse receipt', 'A transport route'], 0, 'A tariff is a duty imposed on goods crossing a border, often on imports.'],
    ['Which service helps transfer money between buyers and sellers?', ['Banking', 'Warehousing', 'Advertising only', 'Packaging'], 0, 'Banks facilitate payments and other financial transactions.'],
    ['What is a commercial invoice used for in international trade?', ['Details goods, prices and transaction information', 'Records a school examination', 'Measures a ship’s speed', 'Lists a country’s rainfall'], 0, 'A commercial invoice describes the exported goods and their transaction values.'],
    ['What is a pro forma invoice?', ['A preliminary invoice or quotation sent before a final sale', 'Proof of a completed cash payment only', 'A court order', 'A staff attendance record'], 0, 'A pro forma invoice outlines expected goods and costs before final billing.'],
    ['Which document lists goods packed in a shipment and their quantities?', ['Packing list', 'Agenda', 'Trial balance', 'Share certificate'], 0, 'A packing list details the contents and quantities in a shipment.'],
    ['What is a cooperative society?', ['A business owned and run for the benefit of its members', 'A single-person government office', 'A type of import tax', 'A transport document'], 0, 'A cooperative is jointly owned and democratically controlled by its members.'],
    ['What is a trade discount?', ['A reduction from list price, often given to trade buyers', 'A tax on income', 'A fee for storing records', 'An insurance claim'], 0, 'Trade discounts reduce list prices for qualifying business buyers.'],
    ['What does a customs authority commonly do?', ['Enforce rules on goods crossing national borders', 'Set classroom grades', 'Manage private shops', 'Produce all exports'], 0, 'Customs authorities inspect and regulate goods entering or leaving a country.'],
  ],
  financialAccounting: [
    ['What is the basic accounting equation?', ['Assets = Liabilities + Capital', 'Assets = Sales − Wages', 'Capital = Cash + Purchases', 'Profit = Assets + Drawings'], 0, 'The accounting equation is Assets = Liabilities + Owner’s equity.'],
    ['Which book first records transactions in chronological order?', ['Journal', 'Balance sheet', 'Trial balance', 'Bank statement'], 0, 'Transactions are initially recorded in a journal before posting to ledgers.'],
    ['A cash sale is recorded by debiting:', ['Sales', 'Cash', 'Purchases', 'Capital'], 1, 'Cash increases on a cash sale, so the cash account is debited.'],
    ['What is depreciation?', ['Allocation of an asset’s cost over its useful life', 'An increase in sales', 'A cash discount', 'A bank deposit'], 0, 'Depreciation allocates the depreciable cost of a non-current asset over time.'],
    ['Which statement shows assets and liabilities at a specific date?', ['Statement of financial position', 'Income statement', 'Cash receipt', 'Sales day book'], 0, 'A statement of financial position reports assets, liabilities and equity at a date.'],
    ['What is a trial balance used mainly to check?', ['Equality of debit and credit ledger balances', 'Whether every sale was profitable', 'The cash in a till only', 'The market price of stock'], 0, 'A trial balance checks that total debits equal total credits.'],
    ['Goods bought for resale are usually recorded in which account?', ['Purchases', 'Drawings', 'Rent income', 'Fixtures'], 0, 'Goods acquired for resale are recorded as purchases or inventory, depending on the system.'],
    ['What is a debtor in accounting?', ['A customer who owes the business money', 'A supplier the business owes', 'A bank employee', 'An owner who invests cash'], 0, 'A debtor or receivable owes money to the business.'],
    ['Which error is not necessarily revealed by a balanced trial balance?', ['Complete omission of a transaction', 'Debit posted as a credit only', 'Unequal ledger totals', 'A one-sided entry'], 0, 'A transaction omitted entirely leaves debit and credit totals equally understated.'],
    ['If revenue is $900 and expenses are $650, what is the profit?', ['$150', '$250', '$1,550', '$650'], 1, 'Profit equals revenue minus expenses: $900 − $650 = $250.'],
    ['A business buys equipment for cash. Which account is credited?', ['Equipment', 'Cash', 'Purchases', 'Sales'], 1, 'Cash decreases, so the cash account is credited.'],
    ['What is a creditor?', ['A supplier or person the business owes', 'A customer who owes the business', 'An item of stock', 'An owner’s drawing'], 0, 'A creditor is owed money by the business.'],
    ['What is working capital?', ['Current assets minus current liabilities', 'Fixed assets plus sales', 'Capital minus drawings only', 'Revenue minus tax only'], 0, 'Working capital is current assets less current liabilities.'],
    ['Which document records money paid into or out of a bank account?', ['Bank statement', 'Delivery note', 'Catalogue', 'Agenda'], 0, 'A bank statement lists transactions processed through the account.'],
    ['A business has assets of $50,000 and liabilities of $18,000. What is its equity?', ['$18,000', '$32,000', '$50,000', '$68,000'], 1, 'Equity = assets − liabilities = $50,000 − $18,000 = $32,000.'],
    ['What is the double-entry principle?', ['Each transaction has equal debit and credit entries', 'Every transaction is recorded once only', 'Only cash transactions are recorded', 'Assets are never credited'], 0, 'Double-entry bookkeeping records equal debit and credit values for each transaction.'],
    ['Which account is debited when a business pays rent in cash?', ['Rent expense', 'Cash', 'Capital', 'Sales'], 0, 'Rent expense increases with a debit; cash decreases with a credit.'],
    ['What is a bank reconciliation statement used to explain?', ['Differences between the cash book and bank statement balances', 'The difference between sales and purchases', 'A change in staff numbers', 'The value of inventory only'], 0, 'Bank reconciliation identifies and explains timing or recording differences.'],
    ['What are drawings?', ['Cash or goods taken by the owner for personal use', 'A business’s sales revenue', 'Money owed by customers', 'A non-current asset'], 0, 'Drawings are resources withdrawn by the owner for personal use.'],
    ['Which account normally has a credit balance?', ['Sales revenue', 'Rent expense', 'Drawings', 'Purchases'], 0, 'Revenue accounts normally carry credit balances.'],
  ],
  businessStudies: [
    ['What is an entrepreneur?', ['A person who organises a business and takes business risks', 'A government tax', 'A type of receipt', 'A customer only'], 0, 'Entrepreneurs organise resources and accept risks to pursue business opportunities.'],
    ['Which business function focuses on hiring and developing staff?', ['Human resources', 'Marketing', 'Production', 'Purchasing'], 0, 'Human resources manages recruitment, training and employee support.'],
    ['What is a sole trader?', ['A business owned by one person', 'A company owned by a government', 'A partnership of ten firms', 'A charity department'], 0, 'A sole trader is owned and usually managed by one individual.'],
    ['What does profit represent?', ['Revenue minus costs', 'Costs plus taxes', 'Assets minus sales', 'Cash received only'], 0, 'Profit is the amount remaining when costs are subtracted from revenue.'],
    ['Why do businesses prepare a business plan?', ['To set out goals and how the business intends to achieve them', 'To guarantee success', 'To replace all records', 'To avoid serving customers'], 0, 'A business plan describes objectives, operations and how resources will be used.'],
    ['Which is an example of a fixed cost in the short run?', ['Monthly shop rent', 'Raw materials per unit', 'Sales commission per item', 'Packaging for each product'], 0, 'Rent often stays constant over a range of output in the short run.'],
    ['What is a stakeholder?', ['A person or group affected by a business', 'Only the business owner', 'A type of machine', 'A government currency'], 0, 'Stakeholders include people and groups with an interest in business decisions.'],
    ['What does productivity compare?', ['Output with the inputs used', 'Profit with tax only', 'Assets with debts only', 'Price with advertising'], 0, 'Productivity measures output relative to resources or inputs used.'],
    ['Which form of ownership is owned by shareholders?', ['Limited company', 'Sole trader only', 'Informal club', 'Household'], 0, 'Shareholders own shares in a limited company.'],
    ['What is customer service intended to do?', ['Help customers before, during, and after a purchase', 'Increase production errors', 'Replace accounting', 'Stop all feedback'], 0, 'Good customer service supports customers and can build loyalty.'],
    ['What is a business objective?', ['A specific result the business aims to achieve', 'A customer complaint only', 'An office chair', 'A tax receipt'], 0, 'Objectives give a business measurable aims or results to work toward.'],
    ['What does delegation involve?', ['Assigning responsibility and authority for a task', 'Avoiding all decisions', 'Closing a business', 'Advertising a product'], 0, 'Delegation assigns tasks and appropriate authority to another person.'],
    ['What is quality control?', ['Checking products or services against required standards', 'Setting every price to zero', 'Hiring customers', 'Counting advertisements'], 0, 'Quality control checks output to identify whether it meets standards.'],
    ['Which is an example of an intangible business asset?', ['A trademark', 'A delivery van', 'A building', 'A machine'], 0, 'A trademark is an identifiable non-physical business asset.'],
    ['What is cash flow?', ['Movement of money into and out of a business', 'A count of employees', 'A product’s colour', 'A market research interview'], 0, 'Cash flow tracks cash receipts and payments over time.'],
    ['What is a mission statement?', ['A brief statement of an organisation’s purpose', 'A list of daily sales only', 'A customer invoice', 'A staff holiday form'], 0, 'A mission statement communicates an organisation’s core purpose.'],
    ['What is span of control?', ['Number of employees directly supervised by a manager', 'Number of products in a shop', 'Length of a business loan', 'Total yearly revenue'], 0, 'Span of control is the number of direct reports a manager oversees.'],
    ['What does a break-even point indicate?', ['Output or sales where total revenue equals total cost', 'The highest possible profit', 'When all assets are sold', 'A point where no customers exist'], 0, 'At break-even, there is neither a profit nor a loss.'],
    ['Which is an example of a variable cost?', ['Raw materials used for each unit produced', 'Annual building rent', 'A fixed insurance premium', 'A manager’s fixed salary'], 0, 'Raw material costs usually change with the number of units produced.'],
    ['What is delegation intended to improve when used appropriately?', ['Work distribution and employee responsibility', 'Confusion about every task', 'The number of unnecessary meetings', 'Customer prices only'], 0, 'Delegation shares work and gives employees responsibility and authority.'],
  ],
  marketing: [
    ['In the marketing mix, what are the traditional “4 Ps”?', ['Product, price, place, promotion', 'People, profit, plan, payment', 'Product, profit, policy, process', 'Price, payroll, people, place'], 0, 'The classic 4 Ps are product, price, place and promotion.'],
    ['What is market research?', ['Collecting information about customers and markets', 'Counting cash only', 'Making a product without feedback', 'Setting tax rules'], 0, 'Market research gathers information to guide marketing decisions.'],
    ['What is a target market?', ['The group of customers a business aims to serve', 'A competitor’s factory', 'Every person in the world', 'A storage room'], 0, 'A target market is the chosen customer group for a product or service.'],
    ['Which is an example of promotion?', ['An advertisement for a new product', 'A warehouse shelf', 'A tax return', 'A production machine'], 0, 'Advertising communicates product information to potential customers.'],
    ['What is a brand?', ['A name or identity distinguishing an offering', 'A delivery receipt', 'A type of loan', 'A stock count'], 0, 'A brand helps identify and distinguish a product or organisation.'],
    ['What is a discount price?', ['A reduced price from the usual or listed price', 'A compulsory tax', 'A production cost only', 'A product warranty'], 0, 'A discount lowers the amount the customer pays.'],
    ['Why might a business segment a market?', ['To group customers with similar needs', 'To prevent all sales', 'To remove product choices', 'To avoid research'], 0, 'Segmentation helps businesses tailor offers to groups with similar characteristics.'],
    ['Which marketing channel uses email to reach customers?', ['Direct digital marketing', 'Road transport', 'Wholesale storage', 'Accounting audit'], 0, 'Email campaigns are a form of direct digital marketing.'],
    ['What does product packaging help communicate?', ['Product identity and useful information', 'Only staff salaries', 'A company’s tax bill', 'Weather forecasts'], 0, 'Packaging can identify a product and communicate its features and instructions.'],
    ['What is customer loyalty?', ['A tendency to continue choosing a business or brand', 'A one-time complaint', 'A production method', 'A cash-flow statement'], 0, 'Loyal customers repeatedly choose a brand or business over time.'],
    ['What is a unique selling proposition?', ['A distinctive benefit that sets an offer apart', 'A company’s annual tax', 'A warehouse address', 'A staff attendance list'], 0, 'A unique selling proposition explains a distinguishing customer benefit.'],
    ['What is price skimming?', ['Launching at a high price and lowering it over time', 'Giving every product away', 'Setting price equal to tax only', 'Selling only to employees'], 0, 'Price skimming starts high to reach willing early buyers before reducing the price.'],
    ['What does market positioning describe?', ['How customers perceive an offering relative to alternatives', 'Where the warehouse doors are', 'The number of staff on shift', 'A country’s location'], 0, 'Positioning shapes the place a brand occupies in customers’ minds.'],
    ['Which research method directly asks customers questions?', ['Survey', 'Stock count', 'Depreciation', 'Invoice'], 0, 'Surveys collect responses directly from selected participants.'],
    ['What is product differentiation?', ['Making an offer distinct from competing alternatives', 'Removing all product features', 'Copying every competitor exactly', 'Stopping customer research'], 0, 'Differentiation highlights meaningful differences that may appeal to customers.'],
    ['What is a loss leader?', ['A product sold at very low margin to attract customers', 'A product with no customers ever', 'A staff training plan', 'A type of market survey'], 0, 'A loss leader attracts customers who may also buy other products.'],
    ['What is the purpose of a call to action in an advertisement?', ['Encourage the audience to take a next step', 'Hide product information', 'List staff birthdays', 'Replace the product name'], 0, 'A call to action prompts a response such as visiting, signing up or purchasing.'],
    ['What does brand awareness measure?', ['How familiar consumers are with a brand', 'The number of boxes in a warehouse', 'A firm’s tax rate', 'The length of a product warranty'], 0, 'Brand awareness measures whether consumers recognise or recall a brand.'],
    ['Which is a primary market research method?', ['Interviewing potential customers', 'Reading an old public report', 'Checking a published census only', 'Reviewing a competitor’s annual report only'], 0, 'Interviews directly gather new information from participants.'],
    ['What is a loyalty programme designed to encourage?', ['Repeat purchases and continued engagement', 'One-time complaints', 'Higher product defects', 'The end of customer communication'], 0, 'Loyalty programmes reward customers for continued purchases or engagement.'],
  ],
  officePractice: [
    ['What is the main purpose of an agenda?', ['List items to be discussed at a meeting', 'Record a bank balance', 'Advertise a product', 'Ship office furniture'], 0, 'An agenda gives participants the planned topics for a meeting.'],
    ['Which device makes paper copies of digital documents?', ['Printer', 'Router', 'Keyboard', 'Microphone'], 0, 'A printer produces paper output from digital documents.'],
    ['How should a confidential document be handled?', ['Stored securely and shared only with authorised people', 'Left in a public area', 'Posted openly online', 'Discarded without care'], 0, 'Confidential information should be protected from unauthorised access.'],
    ['What is the purpose of minutes?', ['Record key discussions and decisions at a meeting', 'List products for sale', 'Replace the agenda', 'Track weather'], 0, 'Minutes provide an official record of meeting discussions and decisions.'],
    ['Which filing method arranges names from A to Z?', ['Alphabetical filing', 'Numerical filing', 'Chronological filing', 'Geographical filing'], 0, 'Alphabetical filing organises records by letter order.'],
    ['What should a professional email subject line do?', ['Briefly describe the email topic', 'Contain the entire message', 'Be left blank always', 'Include a password'], 0, 'A clear subject line helps the recipient understand and find the email.'],
    ['Which is an example of office correspondence?', ['A business letter', 'A farm plough', 'A laboratory sample', 'A road map'], 0, 'Business letters are a formal form of office correspondence.'],
    ['What is a calendar commonly used to manage?', ['Appointments and deadlines', 'Computer memory', 'Stock quality only', 'Cash denominations'], 0, 'Calendars help organise dates, appointments and deadlines.'],
    ['What is the safest response to an unexpected email asking for a password?', ['Do not share it; verify the sender through a trusted route', 'Reply with the password', 'Forward it to everyone', 'Turn off the monitor'], 0, 'Legitimate services should not ask you to disclose your password by email.'],
    ['What does “cc” in an email field mean?', ['Carbon copy', 'Computer code', 'Confidential content', 'Current calendar'], 0, 'Cc sends a visible copy of the email to additional recipients.'],
    ['Which record helps an office track incoming and outgoing mail?', ['Mail register', 'Trial balance', 'Crop schedule', 'Weather chart'], 0, 'A mail register logs correspondence received and dispatched.'],
    ['What is a memorandum commonly used for?', ['Internal communication within an organisation', 'International shipping only', 'Recording a personal diary', 'Measuring stock weight'], 0, 'A memorandum is a brief document used for internal business communication.'],
    ['Which action best protects personal data on a shared office computer?', ['Sign out when finished', 'Leave accounts open', 'Share passwords', 'Save data in a public folder'], 0, 'Signing out helps prevent unauthorised access to an account.'],
    ['What is the purpose of a filing index?', ['Help locate records quickly', 'Calculate business profit', 'Print photographs', 'Schedule road deliveries'], 0, 'An index points users to the location of stored records.'],
    ['What should a receptionist do when answering a business call?', ['Greet the caller and identify the organisation politely', 'Ignore the caller', 'Share confidential records', 'End the call immediately'], 0, 'A courteous greeting and clear identification are basic telephone etiquette.'],
    ['What is a docket or dispatch note used to accompany?', ['Goods being delivered', 'A staff interview', 'A bank loan application', 'A meeting agenda only'], 0, 'A delivery or dispatch note accompanies goods and describes the items sent.'],
    ['Which item is most appropriate for a formal business letter heading?', ['The date and recipient details', 'A personal password', 'An unrelated joke', 'A shopping list'], 0, 'Formal letters normally include date and recipient details.'],
    ['What should be done with an office document that is no longer needed and contains confidential data?', ['Dispose of it securely', 'Leave it in a public bin', 'Post it online', 'Give it to an unauthorised visitor'], 0, 'Confidential papers should be securely shredded or otherwise safely destroyed.'],
    ['What is the purpose of a visitor log?', ['Record visitors entering and leaving', 'Calculate annual profit', 'Order office supplies automatically', 'Replace a fire alarm'], 0, 'A visitor log records who visits and when for security and administration.'],
    ['Which behaviour is best in a professional meeting?', ['Listen and allow others to finish speaking', 'Interrupt every speaker', 'Share confidential information publicly', 'Ignore the agenda'], 0, 'Respectful listening supports effective and professional meetings.'],
  ],
  literature: [
    ['Who tells the events in a first-person narrative?', ['A narrator using “I”', 'The title only', 'The reader', 'A stage direction'], 0, 'A first-person narrator tells the story from an “I” perspective.'],
    ['What is a metaphor?', ['A direct comparison saying one thing is another', 'A repeated vowel sound only', 'A list of characters', 'A stage setting'], 0, 'A metaphor describes one thing as another to suggest a resemblance.'],
    ['What is the main purpose of a play’s stage directions?', ['Guide performance, movement, or setting', 'List chapter summaries', 'Explain a dictionary', 'Show the author’s address'], 0, 'Stage directions give actors and directors instructions about performance and setting.'],
    ['What is a protagonist?', ['A central character in a story', 'The final line of a poem', 'A type of rhyme', 'The book cover'], 0, 'The protagonist is a principal character around whom the story is centred.'],
    ['What is alliteration?', ['Repetition of initial consonant sounds', 'A comparison using “like”', 'A change of narrator', 'A type of plot ending'], 0, 'Alliteration repeats similar starting consonant sounds in nearby words.'],
    ['What is the setting of a story?', ['Its time and place', 'Its list of themes only', 'The author’s biography', 'The book’s price'], 0, 'Setting describes when and where a story takes place.'],
    ['What is dramatic irony?', ['The audience knows something a character does not', 'A poem with no rhythm', 'A story with no conflict', 'A character speaking alone'], 0, 'Dramatic irony occurs when the audience has knowledge withheld from a character.'],
    ['What is a theme in a literary work?', ['A central idea or concern', 'A spelling mistake', 'A list of page numbers', 'A type of punctuation'], 0, 'A theme is an important idea explored through a work.'],
    ['A comparison using “like” or “as” is called a:', ['Simile', 'Metaphor', 'Pun', 'Soliloquy'], 0, 'A simile explicitly compares things using like or as.'],
    ['What is a sonnet traditionally?', ['A poem of 14 lines', 'A play in one act', 'A novel in verse only', 'A story without characters'], 0, 'A sonnet is traditionally a 14-line poem, often with a set rhyme scheme.'],
    ['What is a soliloquy mainly used to reveal?', ['A character’s private thoughts', 'The weather forecast', 'A list of scenery', 'The author’s bibliography'], 0, 'A soliloquy lets the audience hear a character’s thoughts.'],
    ['What is foreshadowing?', ['Hints about events that may happen later', 'A summary of the ending', 'A repeated rhyme only', 'A list of characters'], 0, 'Foreshadowing gives clues about later events in a work.'],
    ['What is the climax of a plot?', ['The turning point of greatest tension', 'The opening description only', 'The list of chapters', 'The author’s dedication'], 0, 'The climax is the point of greatest tension or decisive change.'],
    ['What is satire?', ['Writing that uses humour or irony to criticise', 'A factual timetable', 'A type of dictionary', 'A poem without language'], 0, 'Satire uses wit, irony or exaggeration to expose shortcomings.'],
    ['What is imagery in literature?', ['Language that creates sensory impressions', 'A list of page numbers', 'A character’s legal name', 'The price of a book'], 0, 'Imagery uses descriptive language to appeal to the senses.'],
    ['What is a rhyme scheme?', ['The pattern of end rhymes in a poem', 'The order of scenes in a play', 'A list of characters', 'A prose paragraph'], 0, 'A rhyme scheme labels how line-ending sounds repeat.'],
    ['What is a flashback?', ['A scene that presents an earlier event', 'A prediction of the future', 'A list of stage props', 'A repeated chorus only'], 0, 'A flashback interrupts the current action to show an earlier event.'],
    ['What is a foil character?', ['A character whose qualities highlight another character’s traits', 'The story’s setting', 'A narrator with no role', 'A type of stanza'], 0, 'A foil contrasts with another character to make traits more noticeable.'],
    ['What is a couplet?', ['Two consecutive poetic lines, often rhyming', 'A poem with fourteen stanzas', 'A stage direction', 'A paragraph of dialogue'], 0, 'A couplet is a pair of consecutive lines, often with a shared rhyme.'],
    ['What is a soliloquy?', ['A speech in which a character speaks thoughts aloud, often alone', 'A group dance', 'A chapter heading', 'A rhyming couplet'], 0, 'A soliloquy reveals a character’s thoughts through an extended speech.'],
  ],
  government: [
    ['What is a constitution?', ['A fundamental set of rules for governing a state', 'A shop receipt', 'A campaign poster only', 'A court witness'], 0, 'A constitution establishes core principles and structures of government.'],
    ['Which branch of government interprets laws?', ['Judiciary', 'Executive', 'Legislature', 'Civil service only'], 0, 'Courts in the judiciary interpret and apply laws.'],
    ['What is the main role of a legislature?', ['Make and review laws', 'Conduct all court trials', 'Print every newspaper', 'Manage private shops'], 0, 'Legislatures debate, make and review laws.'],
    ['What does universal adult suffrage mean?', ['Eligible adults have the right to vote', 'Only landowners can vote', 'Voting is limited to one family', 'No elections are held'], 0, 'Universal adult suffrage extends voting rights to eligible adults.'],
    ['What is a secret ballot designed to protect?', ['Privacy of a voter’s choice', 'The price of a ballot paper', 'A candidate’s identity', 'The election date'], 0, 'A secret ballot helps voters choose freely without revealing their selection.'],
    ['What is federalism?', ['Constitutional division of powers between levels of government', 'Rule by one person without limits', 'Government by judges only', 'A system without laws'], 0, 'Federalism shares governing authority between central and regional governments.'],
    ['What is the purpose of an opposition party in a democracy?', ['Scrutinise government and offer alternatives', 'Cancel all elections', 'Control every court', 'Prevent public debate'], 0, 'Opposition parties hold governments accountable and present alternative policies.'],
    ['What is citizenship?', ['Legal membership of a political community with rights and duties', 'A type of tax only', 'A job title', 'A town boundary'], 0, 'Citizenship defines membership and associated rights and responsibilities.'],
    ['Which principle means that public power is subject to law?', ['Rule of law', 'Rule by decree only', 'Censorship', 'Patronage'], 0, 'The rule of law requires people and authorities to follow the law.'],
    ['What is decentralisation?', ['Transfer of some authority from central to local levels', 'Removal of every local council', 'A ban on public services', 'A type of election ballot'], 0, 'Decentralisation shifts decision-making closer to regional or local communities.'],
    ['What is separation of powers?', ['Division of government functions among branches', 'One official controls every institution', 'A ban on courts', 'A method of counting votes'], 0, 'Separation of powers distributes authority among branches to limit its concentration.'],
    ['What is a referendum?', ['A direct vote by citizens on a particular question', 'A court sentence', 'A party membership card', 'A government budget'], 0, 'A referendum asks voters to decide directly on a specific issue.'],
    ['What is a pressure group?', ['An organisation seeking to influence public policy', 'A branch of the armed forces', 'A tax office', 'A court of appeal'], 0, 'Pressure groups campaign to influence decisions without necessarily seeking to form government.'],
    ['What is a coalition government?', ['A government formed by two or more political parties working together', 'A government with no ministers', 'A single court ruling', 'A local election register'], 0, 'Coalition parties share government, often when no party has a majority alone.'],
    ['What is public accountability?', ['Officials explaining and taking responsibility for their decisions', 'Keeping every decision secret', 'Removing public records', 'Avoiding all audits'], 0, 'Accountability requires public officials to answer for their actions and decisions.'],
    ['What is the main role of an electoral commission?', ['Organise and oversee elections', 'Interpret every criminal case', 'Set private company prices', 'Manage all schools'], 0, 'An electoral commission administers elections and related processes.'],
    ['What does civic participation include?', ['Engaging in community and public decision-making', 'Avoiding all public issues', 'Damaging public facilities', 'Suppressing other voters'], 0, 'Civic participation includes activities through which people contribute to public life.'],
    ['What is a by-law?', ['A local rule made by an authorised local body', 'A national anthem', 'A private diary', 'A court witness'], 0, 'By-laws are local regulations made under powers granted by law.'],
    ['What is a pressure group’s main method of influence?', ['Advocacy and public campaigning', 'Counting private stock', 'Replacing every election', 'Operating a weather station'], 0, 'Pressure groups use advocacy to influence public policy and opinion.'],
    ['What does transparency in government encourage?', ['Open access to information about public decisions', 'Secret spending without records', 'The removal of public audits', 'A ban on questions'], 0, 'Transparency makes public processes and decisions more visible to citizens.'],
  ],
  history: [
    ['What is a primary historical source?', ['A document or object created during the period studied', 'A modern summary only', 'A fictional story about the past', 'A future prediction'], 0, 'Primary sources come directly from the time or people being studied.'],
    ['Why do historians compare multiple sources?', ['To check evidence and consider different perspectives', 'To avoid reading evidence', 'To make dates disappear', 'To guarantee every source agrees'], 0, 'Comparing sources helps assess reliability, bias and differing accounts.'],
    ['Which is a chronological order?', ['Events arranged by date', 'Events arranged by colour', 'Names arranged by length', 'Places arranged by size'], 0, 'Chronology arranges events in the order they happened.'],
    ['What is an artefact?', ['An object made or used by people in the past', 'A weather forecast', 'A current election result', 'A mathematical formula'], 0, 'Artefacts are objects that provide evidence about past human activity.'],
    ['What does “cause” mean in historical study?', ['A factor that helps bring about an event', 'A result that follows an event', 'A list of sources', 'A date on a calendar'], 0, 'Causes are factors that contribute to why an event occurred.'],
    ['What is a consequence of a historical event?', ['An outcome or effect that followed it', 'Its original source only', 'A map scale', 'A person’s birth name'], 0, 'Consequences are effects that result from an event.'],
    ['What is an oral history?', ['An account of the past collected through spoken testimony', 'A map drawn from satellites', 'A printed law only', 'A measurement of rainfall'], 0, 'Oral history records spoken memories and testimony.'],
    ['What does an archaeologist study?', ['Material remains of past human societies', 'Future weather only', 'Living languages only', 'Stars through a telescope'], 0, 'Archaeologists study objects, structures and other material evidence.'],
    ['Why might a historical source be biased?', ['Its creator may have a particular viewpoint or interest', 'It contains a date', 'It is written on paper', 'It is stored in a museum'], 0, 'A source’s creator, purpose and context can shape its viewpoint.'],
    ['What is a timeline useful for?', ['Showing the order and spacing of events', 'Showing soil fertility', 'Measuring temperature', 'Calculating shop profit'], 0, 'Timelines display events in chronological order and can show their relative dates.'],
    ['What does corroboration mean in historical research?', ['Checking a claim against other evidence', 'Changing a source’s date', 'Ignoring contradictory evidence', 'Writing a fictional ending'], 0, 'Corroboration compares evidence from different sources.'],
    ['What is an empire?', ['A group of territories or peoples governed by one authority', 'A single household', 'A type of farming tool', 'A short-lived weather system'], 0, 'An empire governs multiple territories or peoples under a central power.'],
    ['What is a historical artefact’s provenance?', ['Its origin and history of ownership or custody', 'Its market price only', 'Its colour', 'Its modern spelling'], 0, 'Provenance records where an object came from and how it was passed on.'],
    ['What is a treaty?', ['A formal agreement between states or parties', 'A type of crop disease', 'A personal diary', 'A weather instrument'], 0, 'Treaties are formal agreements, commonly between countries.'],
    ['What is a turning point in history?', ['An event after which the direction of developments significantly changes', 'Any date on a calendar', 'A source with no author', 'A map symbol'], 0, 'A turning point marks a significant change in the course of events.'],
    ['What is a historical period?', ['A span of time grouped by shared characteristics or events', 'A type of compass', 'A modern voting method', 'A list of unrelated names'], 0, 'Historians use periods to organise and study stretches of the past.'],
    ['What does “bias” mean when analysing a source?', ['A tendency to present a particular viewpoint', 'A source’s paper size', 'The date it was stored', 'The number of paragraphs'], 0, 'Bias is a tendency that can shape how a source presents information.'],
    ['What is an archive?', ['A collection of historical records preserved for research', 'A type of farm animal', 'A mountain formation', 'A modern election'], 0, 'Archives preserve records for future reference and research.'],
    ['What is a primary source example for studying a past election?', ['A campaign leaflet from that election', 'A recent textbook summary only', 'A future prediction', 'A fictional story set later'], 0, 'A campaign leaflet produced at the time is direct evidence from the period.'],
    ['What is historical continuity?', ['Features that remain similar over time', 'A sudden change only', 'A source’s spelling', 'A map legend'], 0, 'Continuity refers to aspects of life that persist across periods.'],
  ],
  civicEducation: [
    ['What is a civic responsibility?', ['A duty citizens are expected to fulfil', 'A private business profit', 'A type of weather', 'A school subject fee'], 0, 'Civic responsibilities include obeying laws and respecting others’ rights.'],
    ['Which action is an example of community participation?', ['Taking part in a local clean-up', 'Damaging public property', 'Spreading private passwords', 'Ignoring every meeting'], 0, 'Community activities allow people to contribute to shared needs.'],
    ['What is a human right?', ['A basic freedom or protection people are entitled to', 'A reward only for officials', 'A type of business loan', 'A rule for sports only'], 0, 'Human rights are fundamental protections and freedoms belonging to people.'],
    ['What should a citizen do if they witness a serious crime?', ['Report it to an appropriate authority safely', 'Destroy evidence', 'Publish victims’ private details', 'Confront danger without help'], 0, 'Reporting through appropriate channels can help authorities respond safely.'],
    ['What is corruption?', ['Abuse of entrusted power for private gain', 'Fair public service', 'A lawful election', 'Community volunteering'], 0, 'Corruption involves misuse of entrusted authority for personal benefit.'],
    ['Why are public rules important?', ['They help protect safety, rights and orderly cooperation', 'They remove all responsibilities', 'They guarantee identical opinions', 'They prevent learning'], 0, 'Fair rules support safety and cooperation in a community.'],
    ['What is tolerance?', ['Respecting people who have different beliefs or backgrounds', 'Forcing everyone to agree', 'Excluding neighbours', 'Ignoring the law'], 0, 'Tolerance recognises and respects differences among people.'],
    ['Which is a peaceful way to resolve a disagreement?', ['Dialogue and mediation', 'Threats', 'Vandalism', 'Spreading rumours'], 0, 'Dialogue and mediation help parties seek solutions without violence.'],
    ['What is the purpose of a free and fair election?', ['Allow eligible voters to choose representatives', 'Select leaders by force', 'Prevent citizens from voting', 'Remove all public debate'], 0, 'Free and fair elections let voters choose representatives without coercion.'],
    ['Which is an example of protecting public property?', ['Using a public library responsibly', 'Damaging a bus stop', 'Removing road signs', 'Breaking classroom desks'], 0, 'Responsible use helps keep shared facilities available for everyone.'],
    ['What is the purpose of a national identity document?', ['Help establish a person’s identity', 'Replace every law', 'Guarantee a job', 'Record the daily weather'], 0, 'Identity documents provide recognised information to help verify identity.'],
    ['What does the right to freedom of expression generally protect?', ['Sharing opinions within lawful limits', 'Threatening others without consequence', 'Destroying public records', 'Ignoring every responsibility'], 0, 'Freedom of expression protects communication while remaining subject to lawful limits.'],
    ['What is an ombudsman commonly responsible for?', ['Investigating complaints about public administration', 'Setting all market prices', 'Running every school class', 'Issuing weather alerts'], 0, 'An ombudsman investigates complaints about public bodies or services.'],
    ['What is a peaceful demonstration?', ['A public gathering to express a view without violence', 'An act of vandalism', 'A secret court hearing', 'A private business contract'], 0, 'Peaceful demonstrations allow people to express views collectively without violence.'],
    ['Why is community service valuable?', ['It helps address shared needs and builds civic responsibility', 'It removes all laws', 'It guarantees private profit', 'It prevents cooperation'], 0, 'Community service contributes to local needs and encourages participation.'],
    ['What is the purpose of a national census?', ['Collect information about a population', 'Choose a school subject', 'Set shop discounts', 'Measure daily wind speed'], 0, 'A census systematically counts and gathers information about a population.'],
    ['Which action supports road safety?', ['Obeying traffic signs and signals', 'Crossing without looking', 'Ignoring speed limits', 'Blocking pedestrian paths'], 0, 'Following traffic rules helps protect drivers, passengers and pedestrians.'],
    ['What does equality before the law mean?', ['The law applies fairly to people without improper favour', 'Only officials follow laws', 'Laws change for every individual', 'Courts are unnecessary'], 0, 'Equality before the law means people receive equal legal treatment.'],
    ['What is volunteerism?', ['Giving time and effort freely to help others or a cause', 'A compulsory tax', 'A type of private loan', 'A court appeal'], 0, 'Volunteers contribute their time without requiring payment for the service.'],
    ['What is a conflict of interest?', ['A private interest that could improperly affect an official duty', 'A peaceful community meeting', 'A fair election rule', 'A public library visit'], 0, 'A conflict of interest can arise when personal interests interfere with public responsibilities.'],
  ],
  religiousStudies: [
    ['What is a sacred text?', ['A writing regarded as holy by a religious community', 'A business invoice', 'A weather chart', 'A sports schedule'], 0, 'Religious communities treat sacred texts as important sources of teaching and guidance.'],
    ['Which value is shared by many religious and ethical traditions?', ['Compassion for others', 'Dishonesty', 'Cruelty', 'Unfairness'], 0, 'Many traditions encourage compassion and care for other people.'],
    ['What is a place of worship?', ['A place where a religious community gathers for worship', 'A market warehouse', 'A court registry', 'A weather station'], 0, 'Places of worship serve communities for prayer, teaching or religious gatherings.'],
    ['What is the purpose of a religious festival?', ['To remember or celebrate an important belief or event', 'To replace all daily responsibilities', 'To set market prices', 'To conduct a weather survey'], 0, 'Festivals commemorate or celebrate events and beliefs important to a tradition.'],
    ['What does charity generally involve?', ['Giving help or resources to people in need', 'Taking others’ belongings', 'Refusing all assistance', 'Damaging shared property'], 0, 'Charity is voluntary assistance for people or causes in need.'],
    ['What is a parable?', ['A short story used to teach a moral or spiritual lesson', 'A list of measurements', 'A legal contract only', 'A type of map'], 0, 'Parables use stories to communicate lessons or principles.'],
    ['What is interfaith dialogue?', ['Respectful conversation between people of different faiths', 'A ban on religious discussion', 'A form of accounting', 'A sporting competition'], 0, 'Interfaith dialogue encourages understanding between religious communities.'],
    ['Which practice is commonly associated with reflection or devotion?', ['Prayer or meditation', 'Forgery', 'Vandalism', 'Tax evasion'], 0, 'Prayer and meditation are forms of spiritual reflection in many traditions.'],
    ['What does forgiveness generally mean?', ['Choosing to let go of resentment after harm', 'Pretending no rules exist', 'Encouraging further harm', 'Forgetting every lesson'], 0, 'Forgiveness can mean releasing resentment while still learning from what happened.'],
    ['Why do religious communities often serve others?', ['To express care, responsibility and compassion', 'To prevent cooperation', 'To avoid helping neighbours', 'To create unfairness'], 0, 'Service is an expression of care and responsibility in many faith traditions.'],
    ['What is stewardship?', ['Responsible care for resources or the natural world', 'Wasteful use of every resource', 'A type of election', 'A method of bookkeeping'], 0, 'Stewardship emphasises responsible care of resources and creation.'],
    ['What does a religious pilgrimage involve?', ['A journey to a place of spiritual significance', 'A weekly market sale', 'A school examination', 'A farming rotation'], 0, 'A pilgrimage is a journey undertaken for religious or spiritual reasons.'],
    ['What is a moral teaching?', ['Guidance about right conduct and values', 'A weather measurement', 'A business invoice', 'A map coordinate'], 0, 'Moral teachings guide choices about conduct, duties and values.'],
    ['What is the Golden Rule commonly expressed as?', ['Treat others as you would like to be treated', 'Always seek the largest profit', 'Never listen to others', 'Ignore community needs'], 0, 'The Golden Rule encourages consideration of how one’s actions affect others.'],
    ['What is a religious community’s act of worship most likely to include?', ['Shared prayer, reflection or ritual', 'A bank audit', 'A road survey', 'A crop harvest record'], 0, 'Worship often includes communal prayer, reflection or religious ritual.'],
    ['What is the purpose of fasting in many religious traditions?', ['A practice of spiritual discipline or reflection', 'A method of measuring distance', 'A type of business tax', 'A form of public transport'], 0, 'Fasting can serve as spiritual discipline, reflection or devotion.'],
    ['What is a religious pilgrimage?', ['A journey to a sacred or spiritually important place', 'A business inventory', 'A local election', 'A farming technique'], 0, 'Pilgrimage is a journey to a place of religious significance.'],
    ['What does reconciliation generally seek to do?', ['Restore understanding or relationships after conflict', 'Increase disagreement', 'Avoid all communication', 'Remove community rules'], 0, 'Reconciliation seeks to repair relationships and restore peaceful understanding.'],
    ['What is almsgiving?', ['Giving support or charity to people in need', 'A form of crop rotation', 'A method of taxation only', 'A type of map'], 0, 'Almsgiving is charitable giving, practised in several religious traditions.'],
    ['What is a religious ritual?', ['A set form of actions with religious meaning', 'A business balance sheet', 'A weather report', 'A school timetable'], 0, 'Rituals are actions performed according to a tradition and carry religious meaning.'],
  ],
};

Object.entries(additionalQuestionData).forEach(([subject, entries]) => {
  questionBank[subject] = entries.map(([question, answers, correct, fact]) => {
    const shuffledAnswers = shuffle(answers);
    return {
      category: subjectLabels[subject].toUpperCase(),
      question,
      answers: shuffledAnswers,
      correct: shuffledAnswers.indexOf(answers[correct]),
      fact,
    };
  });
});

const setupPanel = document.querySelector('#setup-panel');
const quizPanel = document.querySelector('#quiz-panel');
const resultPanel = document.querySelector('#result-panel');
const candidateNameInput = document.querySelector('#candidate-name');
const candidateAgeInput = document.querySelector('#candidate-age');
const candidateClassInput = document.querySelector('#candidate-class');
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

let questions = [];
let questionIndex = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;
let candidate = null;
let quizDifficultyLevel = 'standard';
let timeRemaining = 30 * 60;
let timerInterval = null;

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function getClassGrade(className) {
  const value = className.toLowerCase();
  const juniorSecondary = value.match(/\b(?:jss|junior\s+secondary)\s*(\d{1,2})\b/);
  if (juniorSecondary) return Math.min(12, 6 + Number(juniorSecondary[1]));
  const seniorSecondary = value.match(/\b(?:sss|senior\s+secondary)\s*(\d{1,2})\b/);
  if (seniorSecondary) return Math.min(12, 9 + Number(seniorSecondary[1]));
  const grade = value.match(/\b(?:grade|year|class|standard|primary)\s*(\d{1,2})\b/) || value.match(/^(\d{1,2})(?:\s|[a-z]|$)/);
  return grade ? Math.min(12, Number(grade[1])) : null;
}

function getDifficulty(age, className) {
  const ageGrade = Number.isFinite(Number(age)) && Number(age) > 0
    ? Math.min(12, Math.max(1, Number(age) - 5))
    : null;
  const classGrade = getClassGrade(className);
  const estimates = [ageGrade, classGrade].filter((grade) => grade !== null);
  const estimatedGrade = estimates.length
    ? estimates.reduce((total, grade) => total + grade, 0) / estimates.length
    : 6;

  if (estimatedGrade <= 4) return 'easy';
  if (estimatedGrade <= 8) return 'standard';
  return 'advanced';
}

function getDifficultyQuotas(count, difficulty, capacities) {
  const weights = {
    easy: [0.65, 0.25, 0.10],
    standard: [0.25, 0.50, 0.25],
    advanced: [0.10, 0.25, 0.65],
  }[difficulty];
  const quotas = weights.map((weight, index) => Math.min(capacities[index], Math.floor(count * weight)));

  while (quotas.reduce((total, quota) => total + quota, 0) < count) {
    let bestTier = -1;
    let greatestNeed = -Infinity;
    weights.forEach((weight, tier) => {
      const need = count * weight - quotas[tier];
      if (quotas[tier] < capacities[tier] && need > greatestNeed) {
        greatestNeed = need;
        bestTier = tier;
      }
    });
    if (bestTier === -1) break;
    quotas[bestTier] += 1;
  }
  return quotas;
}

function selectDifficultyQuestions(pool, count, difficulty) {
  const tierSize = Math.ceil(pool.length / 3);
  const levels = [pool.slice(0, tierSize), pool.slice(tierSize, tierSize * 2), pool.slice(tierSize * 2)];
  const quotas = getDifficultyQuotas(count, difficulty, levels.map(() => count));
  return levels.flatMap((levelQuestions, index) => {
    const selected = [];
    while (selected.length < quotas[index] && levelQuestions.length > 0) {
      const remaining = quotas[index] - selected.length;
      selected.push(...shuffle(levelQuestions).slice(0, remaining));
    }
    return selected.map((question) => ({ ...question, difficultyTier: index }));
  });
}

function orderQuestionsForDifficulty(questions, difficulty) {
  const tierOrder = {
    easy: [0, 1, 2],
    standard: [1, 0, 2],
    advanced: [2, 1, 0],
  }[difficulty];
  return tierOrder.flatMap((tier) => shuffle(questions.filter((question) => question.difficultyTier === tier)));
}

function buildQuestionSet(subject, count, difficulty) {
  if (subject !== 'mixed') return orderQuestionsForDifficulty(
    selectDifficultyQuestions(questionBank[subject], count, difficulty),
    difficulty,
  );
  const questionsPerSubject = count / 2;
  const mathQuestions = selectDifficultyQuestions(questionBank.math, questionsPerSubject, difficulty);
  const scienceQuestions = selectDifficultyQuestions(questionBank.science, questionsPerSubject, difficulty);
  return orderQuestionsForDifficulty([...mathQuestions, ...scienceQuestions], difficulty);
}

function updateQuestionCountOptions() {
  const subject = subjectSelect.value;
  const availableQuestions = questionBank[subject]?.length ?? 0;
  const previousCount = Number(questionCountSelect.value);
  if (!subject || availableQuestions === 0) {
    questionCountSelect.replaceChildren(new Option('Select a subject first', '', true, true));
    questionCountSelect.disabled = true;
    setupQuestionSummary.textContent = 'Choose a subject';
    questionBankNote.hidden = true;
    return;
  }
  const availableCounts = [20, 30, 40, 50, 60];
  questionCountSelect.replaceChildren(...availableCounts.map((count) => new Option(`${count} questions`, String(count))));
  if (availableCounts.includes(previousCount)) questionCountSelect.value = String(previousCount);
  else questionCountSelect.value = String(availableCounts.includes(20) ? 20 : availableCounts.at(-1));
  questionCountSelect.disabled = false;
  setupQuestionSummary.textContent = `${questionCountSelect.value} questions`;
  questionBankNote.hidden = false;
  questionBankNote.textContent = Number(questionCountSelect.value) > availableQuestions
    ? `This subject has ${availableQuestions} unique questions. The selected quiz will repeat questions to reach ${questionCountSelect.value}.`
    : `${availableQuestions} unique questions available for this subject.`;
}

function updateDepartmentSubjects() {
  const subjectKeys = departmentSubjects[departmentSelect.value] ?? [];
  subjectSelect.replaceChildren(new Option('Select a subject', '', true, true));
  subjectKeys.forEach((key) => subjectSelect.add(new Option(subjectLabels[key], key)));
  subjectSelect.disabled = subjectKeys.length === 0;
  updateQuestionCountOptions();
}

function updateDifficultyHint() {
  if (!candidateAgeInput.value && !candidateClassInput.value.trim()) {
    difficultyNote.textContent = "Quiz difficulty will be matched to the candidate's age and class.";
    return;
  }
  const difficulty = getDifficulty(candidateAgeInput.value, candidateClassInput.value);
  const labels = { easy: 'Easy', standard: 'Standard', advanced: 'Advanced' };
  difficultyNote.textContent = `Estimated quiz difficulty: ${labels[difficulty]} (based on age and class).`;
}

function updateTimer() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  quizTimer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  quizTimer.classList.toggle('timer-warning', timeRemaining <= 60);
  if (timeRemaining === 0) {
    window.clearInterval(timerInterval);
    timerInterval = null;
    showResults(true);
    return;
  }
  timeRemaining -= 1;
}

function startTimer() {
  window.clearInterval(timerInterval);
  updateTimer();
  timerInterval = window.setInterval(updateTimer, 1000);
}

function startQuiz(event) {
  event.preventDefault();
  candidateNameInput.value = candidateNameInput.value.trim();
  candidateClassInput.value = candidateClassInput.value.trim();
  if (!setupPanel.reportValidity()) return;
  candidate = {
    name: candidateNameInput.value.trim(),
    age: candidateAgeInput.value,
    className: candidateClassInput.value.trim(),
    department: departmentSelect.options[departmentSelect.selectedIndex].text,
    subject: subjectSelect.options[subjectSelect.selectedIndex].text,
  };
  quizDifficultyLevel = getDifficulty(candidate.age, candidate.className);
  const requestedQuestionCount = Number(questionCountSelect.value);
  const requestedTimeLimit = Number(timeLimitSelect.value);
  timeRemaining = requestedTimeLimit * 60;
  questions = buildQuestionSet(subjectSelect.value, requestedQuestionCount, quizDifficultyLevel);
  questionIndex = 0;
  score = 0;
  setupPanel.hidden = true;
  resultPanel.hidden = true;
  quizPanel.hidden = false;
  const difficultyLabels = { easy: 'Easy', standard: 'Standard', advanced: 'Advanced' };
  document.querySelector('#candidate-summary').textContent = `Quiz for ${candidate.name} · ${candidate.department} · ${candidate.subject} · ${questions.length} questions · ${requestedTimeLimit} minutes`;
  quizDifficulty.textContent = difficultyLabels[quizDifficultyLevel].toUpperCase();
  startTimer();
  renderQuestion();
}

function renderQuestion() {
  const question = questions[questionIndex];
  selectedAnswer = null;
  answered = false;
  questionCount.textContent = `QUESTION ${questionIndex + 1} OF ${questions.length}`;
  scoreDisplay.textContent = String(score);
  questionCategory.textContent = question.category;
  questionText.textContent = question.question;
  progressTrack.setAttribute('aria-valuemax', String(questions.length));
  progressTrack.setAttribute('aria-valuenow', String(questionIndex));
  progressFill.style.width = `${(questionIndex / questions.length) * 100}%`;
  feedback.textContent = '';
  feedback.classList.remove('is-incorrect');
  nextButton.disabled = true;
  nextButton.innerHTML = 'Check answer <span aria-hidden="true">→</span>';
  answersElement.replaceChildren();

  question.answers.forEach((answer, index) => {
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'answer-option';
    option.setAttribute('aria-pressed', 'false');
    option.innerHTML = `<span class="answer-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span><span></span>`;
    option.lastElementChild.textContent = answer;
    option.addEventListener('click', () => selectAnswer(index));
    answersElement.append(option);
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
  nextButton.innerHTML = 'Check answer <span aria-hidden="true">→</span>';
  feedback.textContent = '';
  feedback.classList.remove('is-incorrect');
}

function checkAnswer() {
  if (answered) {
    questionIndex += 1;
    if (questionIndex === questions.length) showResults();
    else renderQuestion();
    return;
  }
  if (selectedAnswer === null) return;

  answered = true;
  const question = questions[questionIndex];
  const correct = selectedAnswer === question.correct;
  if (correct) score += 1;

  [...answersElement.children].forEach((option, index) => {
    option.disabled = true;
    if (index === question.correct) option.classList.add('correct');
    else if (index === selectedAnswer) option.classList.add('incorrect');
  });
  feedback.textContent = `${correct ? 'That’s right!' : 'Not quite.'} ${question.fact}`;
  feedback.classList.toggle('is-incorrect', !correct);
  scoreDisplay.textContent = String(score);
  progressTrack.setAttribute('aria-valuenow', String(questionIndex + 1));
  progressFill.style.width = `${((questionIndex + 1) / questions.length) * 100}%`;
  nextButton.innerHTML = questionIndex === questions.length - 1
    ? 'See my results <span aria-hidden="true">→</span>'
    : 'Next question <span aria-hidden="true">→</span>';
}

function showResults(timeExpired = false) {
  window.clearInterval(timerInterval);
  timerInterval = null;
  quizPanel.hidden = true;
  resultPanel.hidden = false;
  const percentage = score / questions.length;
  const percentageScore = Math.round(percentage * 100);
  const title = percentage === 1 ? 'Flawless!' : percentage >= 0.7 ? 'Nicely done!' : percentage >= 0.4 ? 'Look at you go!' : 'Curiosity wins!';
  const message = timeExpired
    ? `Time is up. You answered ${Math.min(questionIndex + (answered ? 1 : 0), questions.length)} of ${questions.length} questions. Keep practising and try again!`
    : percentage === 1
    ? 'A perfect round! Your curious mind is on fire.'
    : percentage >= 0.7
      ? 'You know your stuff. Keep that curious mind growing!'
      : percentage >= 0.4
        ? 'A lovely effort. Every question is a chance to learn something new.'
        : 'Every great thinker starts with a question. Ready to give it another go?';
  document.querySelector('#result-title').textContent = title;
  document.querySelector('#result-candidate').textContent = `${candidate.name} · Age ${candidate.age} · Class ${candidate.className} · ${candidate.department} · ${candidate.subject} · ${questions.length} questions`;
  document.querySelector('#result-percentage').textContent = `${percentageScore}%`;
  document.querySelector('#result-score').textContent = `${score} out of ${questions.length} correct`;
  document.querySelector('#result-message').textContent = message;
  document.querySelector('#result-badge').textContent = percentage >= 0.7 ? '✦' : '♡';
  document.querySelector('#restart-button').focus({ preventScroll: true });
}

function restartQuiz() {
  resultPanel.hidden = true;
  setupPanel.hidden = false;
  document.querySelector('#start-button').focus({ preventScroll: true });
}

setupPanel.addEventListener('submit', startQuiz);
departmentSelect.addEventListener('change', updateDepartmentSubjects);
subjectSelect.addEventListener('change', updateQuestionCountOptions);
candidateAgeInput.addEventListener('input', updateDifficultyHint);
candidateClassInput.addEventListener('input', updateDifficultyHint);
nextButton.addEventListener('click', checkAnswer);
document.querySelector('#restart-button').addEventListener('click', restartQuiz);
questionCountSelect.addEventListener('change', () => {
  setupQuestionSummary.textContent = `${questionCountSelect.value} questions`;
  updateQuestionCountOptions();
});
timeLimitSelect.addEventListener('change', () => {
  setupTimeSummary.textContent = `${timeLimitSelect.value} minutes`;
});

const installButton = document.querySelector('#install-button');
const installStatus = document.querySelector('#install-status');
let pendingInstallPrompt = null;

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
      : 'To install on Windows or Android, open this app from a secure HTTPS website, then choose “Install app” in your browser menu.';
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
      installStatus.textContent = 'Offline support could not start. Check that the app is hosted on HTTPS.';
    });
  });
}

if (window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true) {
  installButton.hidden = true;
}
