const people = [
{
  name: "Amir",
  role: "CEO",
  nationality: "Danish/Bosnian",
  location: "Spain",
  team: "cxo",
  fact: "Ran an Age of Empires clan and competed at a high level, then spent the next 20+ years following the Korean StarCraft scene like a true esports lifer."
},
{
  name: "Brenna",
  role: "CMO",
  nationality: "American",
  location: "USA",
  team: "cxo",
  fact: "Former figure skater who trained before school for 11 years and later DJ'd an indie-rock radio show during a long stretch living in Chile."
},
{
  imageKey: "Gonçalo",
  name: "Goncalo",
  role: "CTO",
  nationality: "Portuguese",
  location: "Portugal",
  team: "cxo",
  fact: "Once slept 18 hours after a 64-hour no-sleep marathon for a college project. Legendary chaos energy, terrible sleep hygiene, elite commitment."
},
{
  name: "Rasto",
  role: "Head of Android",
  nationality: "Slovakian",
  location: "Slovakia",
  team: "android",
  fact: "Picked up bouldering on a whim, found himself unexpectedly sore the next day, and has been climbing weekly ever since."
},
{
  name: "Afzal",
  role: "Engineer",
  nationality: "Canadian/Pakistani",
  location: "Canada",
  team: "android",
  fact: "Originally from Karachi, moved to Canada for uni in 2009, became a Canadian citizen in 2020, and grew up speaking both Urdu and English."
},
{
  name: "Carrie",
  role: "Engineer",
  nationality: "British",
  location: "UK",
  team: "android",
  fact: "Is a certified PADI Divemaster and once dove in Iceland's Silfra fissure between tectonic plates in winter, where the water was warmer than the air."
},
{
  name: "Julia",
  role: "Engineer",
  nationality: "Russian",
  location: "Georgia",
  team: "android",
  fact: "Born in Kyrgyzstan, raised in Ukraine and in an Arctic town, then moved alone at 15 to a boarding school in St. Petersburg to escape the cold."
},
{
  name: "Kris",
  role: "Engineer",
  nationality: "Polish",
  location: "Spain",
  team: "android",
  fact: "Lives in Málaga, loves spicy food, enjoys Pokémon Go and long hikes, and is possibly the only person there who doesn't like the beach."
},
{
  name: "Olga",
  role: "Engineer",
  nationality: "Russian",
  location: "Spain",
  team: "android",
  fact: "Started wakesurfing unable to stand up for 40 minutes; two seasons later ranked #1 in the world by rating and still hooked on the sport."
},
{
  imageKey: "Pedro-android",
  name: "Pedro",
  role: "Lead Engineer",
  nationality: "Portuguese",
  location: "Portugal",
  team: "android",
  fact: "A lifelong dog person who unexpectedly became best friends with one specific cat, to the point that the cat now follows him room to room."
},
{
  name: "Prateek",
  role: "Lead Engineer",
  nationality: "Indian",
  location: "UAE",
  team: "android",
  fact: "Huge space nerd with a Voyager 1 tattoo, loves rockets and propulsion systems, and once nerded out at Bletchley Park about Alan Turing's stuff."
},
{
  name: "Sergey",
  role: "Engineer",
  nationality: "Belarusian",
  location: "Belarus",
  team: "android",
  fact: "Originally from Polotsk, one of the oldest cities in Belarus. Admin of a local meme channel with roughly 8,000 followers and growing steadily."
},
{
  name: "Jaime",
  role: "Head of Apple",
  nationality: "Portuguese",
  location: "Portugal",
  team: "apple",
  fact: "Loves architecture and Danish mid-century design. Fascinated by functional, long-lasting furniture and the craft behind beautiful buildings."
},
{
  name: "Andris",
  role: "Engineer",
  nationality: "Latvian",
  location: "Latvia",
  team: "apple",
  fact: "Participated in the 1989 Baltic Way at age seven, joining a 600 km human chain of two million people standing for freedom."
},
{
  name: "Enric",
  role: "Engineer",
  nationality: "Spanish",
  location: "Spain",
  team: "apple",
  fact: "Once ran a teen Apple-blog that got featured on WordPress' homepage multiple times, even hosting a Spanish live coverage of an Apple event."
},
{
  name: "Erik",
  role: "Engineer",
  nationality: "American",
  location: "USA",
  team: "apple",
  fact: "Parent of five kids (so far!) plus seven cats and a goat, somehow balancing family mayhem, rescued animals, and Nintendo nights."
},
{
  name: "Hiroki",
  role: "Engineer",
  nationality: "Japanese",
  location: "Japan",
  team: "apple",
  fact: "Once played youth soccer against Italian academy teams, later summited Mont Blanc, and now builds indie iOS apps on weekends just for the joy of it."
},
{
  name: "Nolan",
  role: "Engineer",
  nationality: "American",
  location: "South Korea",
  team: "apple",
  fact: "Lived in Tokyo for over a decade, speaks fluent Japanese, and later studied Korean for a year, reaching conversational level."
},
{
  name: "Paul",
  role: "Engineer",
  nationality: "British",
  location: "UK",
  team: "apple",
  fact: "Feels most at peace in the sea, and has had memorable encounters with wildlife like whales, seals, and sharks."
},
{
  name: "Witold",
  role: "Engineer",
  nationality: "Polish",
  location: "Poland",
  team: "apple",
  fact: "Big fan of cities, movies, and music, from wandering urban side streets to enjoying hip-hop, funk, soul, jazz, and classic cinema."
},
{
  name: "Jacobo",
  role: "Head of Backend",
  nationality: "Spanish",
  location: "Spain",
  team: "backend",
  fact: "Loves escape rooms, keeps a strict \"no glitter\" house rule, and is learning music production with a dream of releasing a song on Spotify."
},
{
  imageKey: "Andrew-backend",
  name: "Andrew",
  role: "Engineer",
  nationality: "Polish",
  location: "Poland",
  team: "backend",
  fact: "Graduated in archaeology, still holds excavation permits, and can technically jump into emergency digs if ancient surprises ever surface."
},
{
  name: "Chiara",
  role: "Engineer",
  nationality: "Maltese",
  location: "Malta",
  team: "backend",
  fact: "Has worked remote for 8+ years, is an ex-Hotjar, longtime Todoist power user, who is obsessed with intentional product design."
},
{
  name: "Felipe (Bidu)",
  role: "Engineer",
  nationality: "Brazilian",
  location: "Portugal",
  team: "backend",
  fact: "Background in physics and computer science, with years working in genomics and bioinformatics, including RNA virus research."
},
{
  name: "Gil",
  role: "Backend Engineer",
  nationality: "Portuguese",
  location: "UK",
  team: "backend",
  fact: "Picked up bass guitar last year after years of failed attempts, mostly inspired by ridiculously good bass lines and Primus."
},
{
  name: "Janusz",
  role: "Engineer",
  nationality: "Polish",
  location: "Poland",
  team: "backend",
  fact: "Brews tea the traditional way with a gaiwan and has strong opinions on data integrity, hence the legendary \"everything is in ruin\" nickname."
},
{
  name: "Lefteris",
  role: "Engineer",
  nationality: "Greek",
  location: "Greece",
  team: "backend",
  fact: "Converted a university server room from Solaris, AIX, and HP-UX to Debian and BSD, all while happily reorganizing racks and tidying cables."
},
{
  name: "Luke",
  role: "Engineer",
  nationality: "British",
  location: "UK",
  team: "backend",
  fact: "Creator of the \"Bumpsy Trail,\" a Bristol route tracking 40 Mr Men graffiti pieces, and is now inexplicably known for it on local radio and TV."
},
{
  name: "Modasser",
  role: "Engineer",
  nationality: "Bangladeshi",
  location: "Bangladesh",
  team: "backend",
  fact: "Enjoys books, blogs, comics, and technical writing, previously translated books into Bangla, and maintains a personal blog when time allows."
},
{
  name: "Rory",
  role: "Engineer",
  nationality: "Irish",
  location: "Ireland",
  team: "backend",
  fact: "Has broken bones in rugby, snowboarding, and American football, then fell headlong into golf - no new bones broken so far."
},
{
  name: "Thomas",
  role: "Engineer",
  nationality: "French",
  location: "France",
  team: "backend",
  fact: "Started programming by tinkering with QBasic from a \"borrowed\" CD-ROM and now unwinds by fencing épée whenever he's not deep in code."
},
{
  name: "Valente",
  role: "Engineer",
  nationality: "Portuguese",
  location: "Portugal",
  team: "backend",
  fact: "Collects vinyl with stories attached, like a sealed 1972 Nolan Porter gifted by a teammate and a Chico Buarque record carried from Brazil."
},
{
  name: "Willian (Pothix)",
  role: "Engineer",
  nationality: "Brazilian",
  location: "Brazil",
  team: "backend",
  fact: "Motorcycle commuter turned Tolkien reader, keyboard builder, twin father, and organizer of tech communities - while dressed in black."
},
{
  name: "Evert",
  role: "Head of CX",
  nationality: "Dutch",
  location: "Sweden",
  team: "cx",
  fact: "Played bass in a metal band just to tick a bucket-list item: one live gig, mostly friends in the crowd, and zero regrets."
},
{
  imageKey: "Carol",
  name: "Carol",
  role: "CX Specialist",
  nationality: "Brazilian",
  location: "Brazil",
  team: "cx",
  fact: "Licensed lawyer since 2015 who never practiced law, pivoted careers, and still teaches kids through years of hands-on Sunday school work."
},
{
  name: "Dermot",
  role: "CX Specialist",
  nationality: "Irish",
  location: "Netherlands",
  team: "cx",
  fact: "Former touring singer who traveled extensively, including a tour across China, before deciding a slower, more grounded pace suited better."
},
{
  name: "Diane",
  role: "CX Lead",
  nationality: "South Korean",
  location: "South Korea",
  team: "cx",
  fact: "Born and raised in South Korea, lived in New Zealand for a decade, and still believes Wellington might be the coolest small capital city."
},
{
  name: "Galina",
  role: "CX Lead",
  nationality: "Canadian/Russian",
  location: "Canada",
  team: "cx",
  fact: "Knits and crochets as meditation, loves horror movies, and once got into a childhood fight for the noble cause of saving a bullied pigeon."
},
{
  name: "Keita",
  role: "CX Lead",
  nationality: "Japanese",
  location: "Greece",
  team: "cx",
  fact: "Has worked as everything from assistant sushi chef to cabin crew to school counselor - every job adding a surprising skill to the toolkit."
},
{
  name: "Marco",
  role: "CX Specialist",
  nationality: "Italian",
  location: "Italy",
  team: "cx",
  fact: "Certified Italian sommelier who lives in a top wine region and still insists there's always another grape, bottle, or vineyard worth discovering."
},
{
  name: "Melis",
  role: "CX Specialist",
  nationality: "Turkish",
  location: "Cyprus",
  team: "cx",
  fact: "Born in Nicosia, the world's only divided capital city, grew up trilingual while celebrating both Christmas and Eid."
},
{
  name: "Nina",
  role: "CX Specialist",
  nationality: "Serbian",
  location: "Serbia",
  team: "cx",
  fact: "A lifelong F1 fan who bought birthday race tickets for Barcelona 2020… only to be thwarted by, well, 2020. Still waiting for her first live race."
},
{
  name: "Olivia",
  role: "CX Specialist",
  nationality: "Polish",
  location: "Poland",
  team: "cx",
  fact: "Keeps a list of every song that's ever caught her ear (now nearly 1,200 tracks long) and is slowly collecting each one on CD for a lifelong playlist."
},
{
  name: "Pierre",
  role: "CX Specialist",
  nationality: "Canadian",
  location: "Canada",
  team: "cx",
  fact: "Obsessed with learning languages and travel, has visited 40+ countries and once worked remotely while living in hostel dorms."
},
{
  name: "Rachel",
  role: "HC Specialist",
  nationality: "South African",
  location: "South Africa",
  team: "cx",
  fact: "Grew up spending holidays on South African farms feeding lambs, riding horses in the mountains, and falling asleep to the sound of the sea."
},
{
  name: "Rikke",
  role: "CX Specialist",
  nationality: "Danish",
  location: "UK",
  team: "cx",
  fact: "Once won an essay competition with the EU and used the prize trip to Bruges to attend the Bruges Beer Festival."
},
{
  name: "Samara",
  role: "CX Specialist",
  nationality: "Iraqi/New Zealander",
  location: "Australia",
  team: "cx",
  fact: "Started a career in biomedical science and oncology clinical research, later shifted into tech seeking flexibility and long-term remote work."
},
{
  name: "Sergio",
  role: "CX Specialist",
  nationality: "Brazilian",
  location: "Brazil",
  team: "cx",
  fact: "Loves slow, contemplative films, especially Akira Kurosawa's Dreams, and prefers quiet time in nature over noise and crowds."
},
{
  name: "Stacey",
  role: "CX Specialist",
  nationality: "British",
  location: "Spain",
  team: "cx",
  fact: "Moved from Nottingham, UK, to Spain seven years ago, raising bilingual kids who are already better at Spanish than their parents."
},
{
  name: "Stef",
  role: "CX Specialist",
  nationality: "Filipina",
  location: "Philippines",
  team: "cx",
  fact: "Has never worked a traditional office job, started freelancing in 2008, and discovered Todoist through a love of testing new Mac and iOS apps."
},
{
  name: "Summer",
  role: "CX Specialist",
  nationality: "Malaysian",
  location: "Australia",
  team: "cx",
  fact: "Grew up on Penang Island, surrounded by jungle, waterfalls, street food, and monkeys. Loves the sea and keeps two stand-up paddleboards."
},
{
  name: "Ana",
  role: "Head of Design",
  nationality: "Portuguese",
  location: "Portugal",
  team: "design",
  fact: "Studied design for logos but fell in love with HTML tables, which led to web, app design, and joining Doist as an early in-house designer."
},
{
  imageKey: "Alex-design",
  name: "Alex",
  role: "Design Lead",
  nationality: "German",
  location: "Germany",
  team: "design",
  fact: "Loves hands-on crafts like linocut and pottery, and has a long-running tradition of attending FC Nuremberg matches with family."
},
{
  name: "Ben",
  role: "Design Lead",
  nationality: "Luxembourgish",
  location: "Luxembourg",
  team: "design",
  fact: "A landlocked surfer who still chases waves around the world, in countries such as France, Portugal, Ireland, Bali, Spain and Thailand."
},
{
  name: "Heather",
  role: "Motion Designer",
  nationality: "American",
  location: "USA",
  team: "design",
  fact: "Spent four years in a band as guitarist and vocalist, released two EPs, produced a music video, and toured briefly. Also has a cute dog named Olive."
},
{
  name: "Luis",
  role: "Product Designer",
  nationality: "Portuguese",
  location: "UK",
  team: "design",
  fact: "Learning guitar thanks to The Last of Us, plays story-driven games only, and regularly snacks on cherry tomatoes growing within arm's reach."
},
{
  name: "Marija",
  role: "Junior Designer",
  nationality: "Latvian",
  location: "Latvia",
  team: "design",
  fact: "Former personal trainer and certified yoga instructor, a lover of volleyball, and known for being competitive whatever game she plays."
},
{
  name: "Michael",
  role: "Product Designer",
  nationality: "Canadian",
  location: "Canada",
  team: "design",
  fact: "Collects old gadgets like relics - first-gen iPod with a spinning wheel, PSP Go, GameBoy Camera - and still hunting for a brat-green iPhone 5c."
},
{
  name: "Nastya",
  role: "Brand Designer",
  nationality: "Russian",
  location: "Netherlands",
  team: "design",
  fact: "Learns a new hobby every year, including crochet, pottery, reading, and lately baking sourdough bread and pizza from scratch."
},
{
  name: "Panos",
  role: "Product Designer",
  nationality: "Greek",
  location: "UK/Greece",
  team: "design",
  fact: "Runs on side projects, such as designing, coding, marketing, and launching Ghost themes solo for the fun of the challenge."
},
{
  name: "Menghan",
  role: "Head of Finance",
  nationality: "American/Chinese",
  location: "USA",
  team: "finance",
  fact: "Grew up with a name that means \"dreams of knowledge,\" now blends photography, tech, matcha, and basketball fandom into daily life."
},
{
  name: "Maeg",
  role: "Finance Operations Partner",
  nationality: "American",
  location: "USA",
  team: "finance",
  fact: "Wears light-up cat headphones in meetings, loves open-world video games, and happily gets lost figuring things out with zero instructions."
},
{
  name: "Sally",
  role: "Strategic Finance Partner",
  nationality: "Korean/American",
  location: "USA",
  team: "finance",
  fact: "Proudly Korean-American, and happily blends cultures through food, from kimchi cream pasta to kimbap paired with Krispy Kreme donuts."
},
{
  name: "Henning",
  role: "Head of Frontend",
  nationality: "German",
  location: "Germany",
  team: "frontend",
  fact: "Brews 20–30L batches of beer at home - including a raspberry Berliner Weisse he served at his own wedding."
},
{
  name: "Anton",
  role: "BrandDev Lead",
  nationality: "Australian",
  location: "Australia",
  team: "frontend",
  fact: "Has trained in martial arts most of his life, including Karate, Muay Thai, Boxing, and Brazilian Jiu Jitsu, and spent several weeks training Kung Fu in China."
},
{
  name: "Craig",
  role: "Engineer",
  nationality: "Canadian",
  location: "Canada",
  team: "frontend",
  fact: "One of the few to visit both North and South Korea, toured Pyongyang and the DMZ, then later explored Seoul and Suwon in separate trips."
},
{
  imageKey: "David-frontend",
  name: "David",
  role: "Brand Developer",
  nationality: "French",
  location: "France",
  team: "frontend",
  fact: "Reached a FIDE rating of 1800 after years of chess tournaments. Now no longer competing but still following top players and events."
},
{
  name: "Dawid",
  role: "Brand Developer",
  nationality: "Polish",
  location: "Poland",
  team: "frontend",
  fact: "Formerly explored web security in academic research before moving fully into tech; security remains a strong personal interest."
},
{
  name: "Ernesto",
  role: "Lead Engineer",
  nationality: "Cuban",
  location: "Chile",
  team: "frontend",
  fact: "Collects fridge magnets from every trip, incl. all Doist retreat locations since 2019, a travel habit that doubles as a tiny world museum on the fridge."
},
{
  name: "Francesca",
  role: "Engineer",
  nationality: "Italian",
  location: "Italy",
  team: "frontend",
  fact: "Italian who lives up to the hand-talking and pizza stereotypes, but skips coffee, ignores fashion, and draws a hard line at pineapple on pizza."
},
{
  name: "Frankie",
  role: "Lead Engineer",
  nationality: "Canadian",
  location: "Canada",
  team: "frontend",
  fact: "Avid gamer who once created custom NBA Live mods with character reskins and fictional teams, gaining a small online following."
},
{
  name: "Jef",
  role: "Brand Developer",
  nationality: "Canadian",
  location: "Canada",
  team: "frontend",
  fact: "Co-founded a dog-walking business that grew from two dogs to 130 clients, a fleet of trucks, and five employees before being sold."
},
{
  name: "Natalie",
  role: "Lead Engineer",
  nationality: "British",
  location: "Gibraltar",
  team: "frontend",
  fact: "From Gibraltar, speaks English and Spanish fluently, and appeared as an audience member in Clean Bandit's Symphony music video."
},
{
  name: "Omar",
  role: "Brand Developer",
  nationality: "Jamaican",
  location: "Canada",
  team: "frontend",
  fact: "Once wrote a Mission-Impossible-style university trojan that exposed weak security and became a case study in the computer science curriculum."
},
{
  name: "Pawel",
  role: "Engineer",
  nationality: "American/Polish",
  location: "USA",
  team: "frontend",
  fact: "Born in Poland, raised near Chicago. Plays guitar and drums, is learning piano, and once took a year off after college to focus on jazz guitar."
},
{
  imageKey: "Pedro-frontend",
  name: "Pedro",
  role: "Engineer",
  nationality: "Portuguese",
  location: "Italy",
  team: "frontend",
  fact: "Born and raised in the Azores, lived on a military airbase, and once flew to the mainland on a seatless C-130 cargo plane."
},
{
  name: "Ricardo",
  role: "Engineer",
  nationality: "Portuguese",
  location: "Portugal",
  team: "frontend",
  fact: "Prefers tea over coffee, has a house stocked with different blends, and can happily go through the day without caffeine entirely."
},
{
  name: "Rui",
  role: "Engineer",
  nationality: "Portuguese",
  location: "Portugal",
  team: "frontend",
  fact: "Plays keyboards and guitar, releases music on Spotify, and finds inspiration in everything from Paul McCartney to modern electronic records."
},
{
  name: "Scott",
  role: "Engineer",
  nationality: "British",
  location: "UK",
  team: "frontend",
  fact: "Bowled competitively for 31 years, represented two counties, and relearned the sport left-handed after an injury."
},
{
  name: "Seva",
  role: "Engineer",
  nationality: "Russian",
  location: "USA",
  team: "frontend",
  fact: "Grew up with Arctic white nights, then later lived in five countries and picked up pieces of several languages along the way."
},
{
  name: "Emily",
  role: "Head of Marketing",
  nationality: "American",
  location: "USA",
  team: "marketing",
  fact: "Owns a 24-foot travel trailer named Trailer Swift and takes it to music festivals in the Sierra Nevada mountains."
},
{
  name: "Brianny",
  role: "Growth Marketer",
  nationality: "Nicaraguan",
  location: "Nicaragua",
  team: "marketing",
  fact: "Has a black belt in Taekwondo, despite starting the sport late in life, thereby turning persistence into one of her proudest achievements."
},
{
  name: "Dani",
  role: "International Development Specialist",
  nationality: "Spanish",
  location: "Spain",
  team: "marketing",
  fact: "Once appeared on the front page of Spain's biggest newspaper during a protest - captured mid-march, not posing, just living in the moment."
},
{
  name: "Denise",
  role: "Product Marketer",
  nationality: "Dutch",
  location: "Curaçao",
  team: "marketing",
  fact: "Is a self-taught piano player with a wide-ranging music taste, from Motown and jazz to Prince and Paul Simon."
},
{
  name: "Juan",
  role: "Growth Marketing Lead",
  nationality: "Venezuelan",
  location: "USA",
  team: "marketing",
  fact: "Former martial artist who competed at state and national levels, finding focus and discipline through kung fu, kickboxing, and taekwondo."
},
{
  name: "Naomi",
  role: "Content Marketing Lead",
  nationality: "Irish",
  location: "Scotland",
  team: "marketing",
  fact: "Sold everything and flew to Bangkok three days after getting married, kicking off months of travel that eventually led to living in Australia."
},
{
  name: "Chase",
  role: "Head of Operations",
  nationality: "American",
  location: "USA",
  team: "operations",
  fact: "Took snowboarding as a college class, finished a half Ironman, tore an Achilles days later, and now swears daily movement makes life better."
},
{
  name: "Nadia",
  role: "Head of People",
  nationality: "South African",
  location: "South Africa",
  team: "people",
  fact: "Once banned from watering plants after killing orchids and succulents, now proudly keeps fiddle-leaf figs and orchids alive through research."
},
{
  imageKey: "Andrew-people",
  name: "Andrew",
  role: "People Business Partner",
  nationality: "American/Egyptian",
  location: "USA",
  team: "people",
  fact: "Has traveled on mission trips across Africa and Latin America, building deep connections and co-founding a small mission organization."
},
{
  imageKey: "Alex-platform",
  name: "Alex",
  role: "Head of Platform",
  nationality: "Portuguese",
  location: "Portugal",
  team: "platform",
  fact: "Drummer with eclectic music taste, avid non-fiction reader, and unapologetic lover of black coffee and sushi."
},
{
  name: "Artyom",
  role: "Engineer",
  nationality: "Russian",
  location: "Croatia",
  team: "platform",
  fact: "Deep into specialty coffee but prefers simple gear: hand grinder, Aeropress, V60, moka pot, and a French press - enough to cover every mood."
},
{
  name: "Luciano",
  role: "Engineer",
  nationality: "Uruguayan",
  location: "Uruguay",
  team: "platform",
  fact: "Collects vinyl across rock and metal, including a prized second pressing of Black Sabbath's 1970 debut album."
},
{
  name: "Dominique",
  role: "Head of Product",
  nationality: "Swiss/Ghanaian",
  location: "Switzerland",
  team: "product",
  fact: "Part Swiss, part Ghanaian, grew up in Ghana before moving to Switzerland at 12 and told classmates stories about riding a pet tiger to school."
},
{
  name: "Hugo",
  role: "Product Manager",
  nationality: "French",
  location: "France",
  team: "product",
  fact: "Moved to Biarritz and became so addicted to surfing that he sometimes clocks 7 hours a week in freezing water. Calls it meditation, not madness."
},
{
  name: "Kaitlin (Kash)",
  role: "Product Manager",
  nationality: "American",
  location: "USA",
  team: "product",
  fact: "Answers to \"Kash\" thanks to a 20-year nickname and once had a wedding led by a second-line band through NYC after a park ceremony."
},
{
  name: "Rain",
  role: "Product Manager",
  nationality: "Singaporean",
  location: "UK",
  team: "product",
  fact: "Born on a rainy day and named after Joaquin Phoenix's sibling \"Rain,\" which makes every introduction feel like a tiny indie-film origin story."
},
{
  name: "Samuel",
  role: "Product Manager",
  nationality: "British",
  location: "UK",
  team: "product",
  fact: "Has appeared unknowingly in widely used Unsplash photos taken by his brother, with images viewed and reused across the internet for years."
},
{
  name: "Michał",
  role: "Backend Engineer",
  nationality: "Polish",
  location: "Gran Canaria",
  team: "backend",
  fact: "Fostered dogs for a year, failed immediately with Frida, and now shares matching dog tattoos with his wife."
},
{
  name: "Maria",
  role: "Lifecycle Marketer",
  nationality: "Greek",
  location: "Greece",
  team: "marketing",
  fact: "Caught the travel bug after a first trip to Cuba in 2019 and has already visited 25+ countries, with Antarctica still topping the list."
},
{
  name: "Alicia",
  role: "Product Marketing Lead",
  nationality: "American",
  location: "UK",
  team: "marketing",
  fact: "Long-term dream is to build a dog rescue and goat farm in Point Reyes, California, combining animal rescue, education, and environmental work."
},
{
  name: "Carlin",
  role: "Product Marketer",
  nationality: "American",
  location: "USA",
  team: "marketing",
  fact: "Loves an outdoors-focused lifestyle: hiking, yoga, ballet, and pilates, especially living right next to nature trails."
},
{
  name: "Carly",
  role: "Social & Community Marketer",
  nationality: "American",
  location: "USA",
  team: "marketing",
  fact: "Deep into mystery, haunting, and eerie-history podcasts and YouTube channels as a favourite guilty-pleasure hobby."
},
{
  name: "Miikka",
  role: "Data Engineer",
  nationality: "Finnish",
  location: "Finland",
  team: "platform",
  fact: "Food interests include seasonal Finnish pastries (especially Runeberg torte), third-wave coffee, and natural wines."
},
{
  name: "Nico",
  role: "Frontend Engineer",
  nationality: "Italian",
  location: "Italy",
  team: "frontend",
  fact: "Once served as 'mayor for a day' in Longiano and even officiated (unofficially and unknowingly illegally) weddings for friends."
},
{
  name: "Manoj",
  role: "Backend Engineer",
  nationality: "Indian",
  location: "Dubai",
  team: "backend",
  fact: "Enjoys simple, meaningful routines like cycling with his son, long phone-free walks, and spontaneous reflection time."
},
{
  name: "Giuliano",
  role: "Data Engineer",
  nationality: "Brazilian",
  location: "Brazil",
  team: "platform",
  fact: "Studied economics instead of CS, but pivoted into tech by the third year of university and never left the industry."
}
];
