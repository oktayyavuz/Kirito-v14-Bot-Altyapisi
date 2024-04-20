const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

const animeList = [
    "Akame ga Kill",
    "Another",
    "Ao Haru Ride",
    "Asura Cryin",
    "Assassination Classroom",
    "Baka to Test to Shoukanjuu",
    "Blend-S",
    "Boku no Hero Academia",
    "Bunny Girl Senpai",
    "Charlotte",
    "Chio-chan no Tsuugakuro",
    "Chuunibyou demo Koi ga Shitai",
    "Code Geass",
    "Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku You Desu",
    "Darwin’s Game",
    "Darling in the Franxx",
    "Date A Live",
    "Death Note",
    "D-Frag",
    "Dororo",
    "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka",
    "Eiyuuou, Bu wo Kiwameru",
    "Eromanga Sensei",
    "Erased",
    "Gate",
    "Hai to Gensou no Grimgar",
    "Hataraku Saibou",
    "High School DxD",
    "Infinite Dendrogram",
    "Inu x Boku SS",
    "Jitsu wa Watashi wa",
    "Jujutsu Kaisen",
    "Kakegurui",
    "Kamisama ni Natta Hi",
    "Keijo",
    "Kimetsu no Yaiba",
    "Kimi no Aishita Hitori o Boku e",
    "Kimi no Aishita o Boku e",
    "Kobayashi-san Chi no Maid Dragon",
    "Kono Subarashii Sekai ni Shukufuku wo!",
    "K-project",
    "Kuzu no Honkai",
    "Kyoukai no Kanata",
    "Log Horizon",
    "Mahou Sensou",
    "Mirai Nikki",
    "Mondaiji-tachi ga Isekai kara Kuru Sou Desu yo",
    "Nakanohito Genome [Jikkyouchuu]",
    "Nanatsu no Taizai",
    "Netoge no Yome wa Onnanoko ja Nai to Omotta",
    "New Game!",
    "Nisekoi",
    "No Game No Life",
    "Noragami",
    "Okaa-san Online",
    "Overlord",
    "Owari no Seraph",
    "Re:Zero",
    "Rent a Girlfriend",
    "ReLife",
    "Rokujouma no Shinryakusha!?",
    "Rewrite",
    "Sword Art Online",
    "Sakamoto desu ga?",
    "Sakurasou no Pet na Kanojo",
    "Saiki Kusuo no Psi-nan",
    "Seiren",
    "Shironeko Project: Zero Chronicle",
    "Spice and Wolf",
    "Soredemo Sekai wa Utsukushii",
    "Sukinago ga Megane wo Wasureta",
    "Tenki no Ko",
    "Tensei shitara Slime Datta Ken",
    "The Great Cleric",
    "The Hidden Dungeon Only I Can Enter",
    "The Promised Neverland",
    "The Rising of Shield Hero",
    "Tondemo Skill de Isekai Hourou Meshi",
    "Tonikaku Kawaii",
    "Toshoshitsu no Kanojo",
    "Your Lie in April",
    "Your Name",
    "Zero no Tsukaima",
    "Zoom 100",
		"Bleach",
		"Dragon Ball Z",
		"Fairy Tail",
		"Naruto: Shippuden",
		"One Punch Man Season 2",
		"Demon Slayer",
		"The Ancient Magus' Bride",
		"A Place Further Than the Universe",
		"Vinland Saga",
		"The Quintessential Quintuplets",
		"Kaguya-sama: Love is War",
		"The Misfit of Demon King Academy",
		"Re Zero Starting Life in Another World",
		"That Time I Got Reincarnated as a Slime",
		"Tower of God",
		"The God of High School",
		"Fire Force",
		"Black Clover",
		"My Next Life as a Villainess: All Routes Lead to Doom!",
		"Ascendance of a Bookworm",
		"The Day I Became a God",
		"I'm Standing on a Million Lives",
		"Jujutsu Kaisen",
		"Moriarty the Patriot",
		"Noblesse",
		"Yashahime: Princess Half-Demon",
		"Attack on Titan: The Final Season",
		"Horimiya",
		"Back Arrow",
		"The Executioner and Her Way of Life",
		"The Saint's Magic Power is Omnipotent",
		"Combatants Will Be Dispatched!",
		"86",
		"Fruits Basket: The Final",
		"To Your Eternity",
		"Don't Toy with Me, Miss Nagatoro",
		"I've Been Killing Slimes for 300 Years and Maxed Out My Level",
		"The Duke of Death and His Maid",
		"Cardfight!! Vanguard overDress",
		"Battle Game in 5 Seconds",
		"The Night Beyond the Tricornered Window",
		"Muv-Luv Alternative",
		"Platinum End",
		"Restaurant to Another World 2",
		"Selection Project",
		"Takt Op. Destiny",
		"The Heike Story",
		"Blue Period",
		"Ranking of Kings",
		"Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
		"The Case Study of Vanitas",
		"Miss Kobayashi's Dragon Maid S",
		"Taisho Otome Fairy Tale",
		"86: Eighty-Six Season 2",
		"The Aquatope on White Sand",
		"The Great Jahy Will Not Be Defeated!",
		"My Senpai is Annoying",
		"The Fruit of Evolution: Before I Knew It, My Life Had It Made",
		"The Night Beyond the Tricornered Window Season 2",
		"The Strongest Sage with the Weakest Crest",
		"Attack on Titan",
		"Fullmetal Alchemist",
		"Naruto",
		"One Piece",
		"Death Parade",
		"Cowboy Bebop",
		"Ghost in the Shell",
		"Neon Genesis Evangelion",
		"Steins;Gate",
		"Gintama",
		"Hunter x Hunter",
		"JoJo's Bizarre Adventure",
		"Kill la Kill",
		"Mob Psycho 100",
		"My Hero Academia",
		"One Punch Man",
		"Psycho-Pass",
		"Puella Magi Madoka Magica",
		"Samurai Champloo",
		"Serial Experiments Lain",
		"Space Dandy",
		"Tokyo Ghoul",
		"Trigun",
		"Yu Yu Hakusho",
		"Assassination Classroom",
		"Baby Steps",
		"Back Street Girls: Gokudols",
		"Banana Fish",
		"Barakamon",
		"Bartender",
		"Bastard!! Heavy Metal, Dark Fantasy",
		"Beastars",
		"Beautiful Bones: Sakurako’s Investigation",
		"Beelzebub",
		"Berserk",
		"Beyblade Burst",
		"Beyond the Boundary",
		"Binbougami ga!",
		"Black Bullet",
		"Black Lagoon",
		"Blood Blockade Battlefront",
		"Blood Lad",
		"Blue Exorcist",
		"Boruto: Naruto Next Generations",
		"Bungo Stray Dogs",
		"Cardcaptor Sakura: Clear Card",
		"Carole & Tuesday",
		"Case Closed",
		"Cells at Work!",
		"Chainsaw Man",
		"Charlotte",
		"Chihayafuru",
		"Chio's School Road",
		"Chrono Crusade",
		"Clannad",
		"Code: Breaker",
		"Cromartie High School",
		"D.Gray-man",
		"DARLING in the FRANXX",
		"Death Note",
		"Dies Irae",
		"Digimon Adventure",
		"Dimension W",
		"Durarara!!",
		"Erased",
		"Fate/stay night: Unlimited Blade Works",
		"Fate/Zero",
		"Food Wars! Shokugeki no Soma",
		"Free! - Iwatobi Swim Club",
		"From the New World",
		"Fruits Basket",
		"Full Dive: This Ultimate Next-Gen Full Dive RPG Is Even Shittier than Real Life!",
		"Full Metal Panic!",
		"Fullmetal Alchemist: Brotherhood",
		"Fumetsu no Anata e",
		"Gabriel DropOut",
		"Gakuen Babysitters",
		"Gangsta.",
		"Garo: Vanishing Line",
		"Gatchaman Crowds",
		"Ghost Stories",
		"Golden Kamuy",
		"Goblin Slayer",
		"Gurren Lagann",
		"Haikyu!!!",
		"Hakumei and Mikochi",
		"Hanasaku Iroha",
		"HappinessCharge PreCure!",
		"Hataraku Saibou",
		"Hell Girl",
		"Hellsing Ultimate",
		"High School DxD",
		"Hinamatsuri",
		"Hitorijime My Hero",
		"Houseki no Kuni",
		"Idolish7",
		"In/Spectre",
		"Infinite Stratos",
		"Interviews with Monster Girls",
		"Is It Wrong to Try to Pick Up Girls in a Dungeon?",
		"Kabaneri of the Iron Fortress",
		"Kakegurui"
];

exports.run = async (client, msg) => {
    const randomAnime = animeList[Math.floor(Math.random() * animeList.length)];

    msg.channel.send(`İşte size rastgele bir anime: **${randomAnime}**`);
};

exports.conf = {
    aliases: ['animeoner', 'anime-oner', 'animeöner', 'anime', 'öner', 'animeöner', 'animeöneri'],
    permLevel: 0,
    kategori: 'Eğlence'
};

exports.help = {
    name: 'anime-öner',
    description: 'Rastgele bir anime önerir.',
    usage: 'anime-öner'
};