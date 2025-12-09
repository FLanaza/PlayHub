const gamesData = [
    {
        id: 'ac-mirage',
        title: "Assassin's Creed Mirage",
        genre: "Action-Adventure",
        platform: "PC (Ubisoft Connect)",
        status: "Installed",
        playtime: 15.5, // Realistic main story/some side content
        lastPlayed: "2025-11-29",
        isFavorite: true,
        cover: "https://image.api.playstation.com/vulcan/ap/rnd/202302/2210/68171aa5a3d762955f308cf21820b9e830f3807212356c12.png",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/2215160/ss_2a3437197825d0c7d425579f538e4a9e525a74e1.1920x1080.jpg?t=1697669074", 
        description: "Experience the story of Basim, a cunning street thief, seeking answers and justice in ninth-century Baghdad. This title returns to the roots of the series with a focus on stealth and parkour."
    },
    {
        id: 'spiderman-rm',
        title: "Marvel's Spider-Man Remastered",
        genre: "Action-Adventure",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 45.2, // Realistic for 100% completion including DLC
        lastPlayed: "2025-11-28",
        isFavorite: true,
        cover: "https://cdn1.epicgames.com/b215682337724220b35542b4d2165b4c/offer/Spider-Man_Remastered_Standard%20Edition-1200x1600-d85c2c5c065f3f3895e64883582e21ad.jpg",
        backgroundImage: "https://assetsio.gnwcdn.com/spider-man-remastered-screenshot-1.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
        description: "A seasoned Peter Parker patrols Marvel’s New York. Fight crime, master dynamic web-slinging, and face iconic villains in this critically acclaimed open-world adventure."
    },
    {
        id: 'rdr2',
        title: "Red Dead Redemption 2",
        genre: "Action-Adventure",
        platform: "PC (Epic Games)",
        status: "Completed",
        playtime: 185.7, // Realistic for main story + epilogue + significant side content/exploration
        lastPlayed: "2025-10-15",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Red_Dead_Redemption_2.png/220px-Red_Dead_Redemption_2.png",
        backgroundImage: "https://assets.rockstarweb.com/rockstargames/prod/img/global/backgrounds/rdr2-bg.jpg",
        description: "America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run. Experience an epic tale of life in America's unforgiving heartland."
    },
    {
        id: 'nba2k',
        title: "NBA 2K25",
        genre: "Sports",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 120.6, // Adjusted to be higher for a sports sim with MyCareer/Online play
        lastPlayed: "2025-11-30",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/NBA_2K23_Cover.jpg/220px-NBA_2K23_Cover.jpg", 
        backgroundImage: "https://media.contentapi.ea.com/content/dam/ea/easports/easportsfc/fc-24/pro-clubs/common/common-hero-md-bg-16x9.jpg.adapt.crop16x9.1023w.jpg",
        description: "Experience the thrill of basketball with cutting-edge graphics and gameplay. Dominate the court with your custom MyPLAYER."
    },
    {
        id: 'cod-mw3',
        title: "Call of Duty: Modern Warfare III",
        genre: "FPS",
        platform: "PC (Battle.net)",
        status: "Installed",
        playtime: 95.5, // Adjusted higher for multiplayer engagement, but campaign is short
        lastPlayed: "2025-11-27",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Modern_Warfare_III_cover.jpg/220px-Modern_Warfare_III_cover.jpg",
        backgroundImage: "https://image.api.playstation.com/vulcan/ap/rnd/202307/1119/8489e2277d3f7498c11a00a40d510252a9263a2333ed7356.jpg",
        description: "Captain Price and Task Force 141 face the ultimate threat in Vladimir Makarov, who is extending his grasp across the world."
    },
    {
        id: 'dyinglight',
        title: "Dying Light 2 Stay Human",
        genre: "Survival Horror",
        platform: "PC (Epic Games)",
        status: "Not Installed",
        playtime: 0.0,
        lastPlayed: "N/A",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/3/36/Dying_Light_2_Stay_Human_cover_art.jpg",
        backgroundImage: "https://image.api.playstation.com/vulcan/ap/rnd/202111/0215/M236fR5sH2N41TjW7q97X91D.jpg",
        description: "Set 20 years after the first game, explore The City, a vast urban open world plunged into a modern dark age, where only the strong survive."
    },
    {
        id: 'cyberpunk',
        title: "Cyberpunk 2077",
        genre: "Action RPG",
        platform: "PC (GOG)",
        status: "Installed",
        playtime: 98.3, // Realistic playtime for main game + side quests
        lastPlayed: "2025-09-01",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_2161747738f8863673b9e4a3d46777f98d781b0f.1920x1080.jpg?t=1695213693",
        description: "An open-world, action-adventure RPG set in Night City, a megalopolis obsessed with power, glamour and body modification. Play as V, a mercenary outlaw."
    },
    {
        id: 'genshin',
        title: "Genshin Impact",
        genre: "Action RPG",
        platform: "PC (HoYoverse Launcher)",
        status: "Installed",
        playtime: 250.8, // Realistic for a Gacha/Live Service game
        lastPlayed: "2025-12-05",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Genshin_Impact_cover.jpg/220px-Genshin_Impact_cover.jpg",
        backgroundImage: "https://cdn.mos.cms.futurecdn.net/k4qjF43X73sYxN6xP9rW5S.jpg",
        description: "Explore the vast, beautiful world of Teyvat in this free-to-play open-world action RPG, discovering hidden secrets and mastering elemental combat."
    },
    {
        id: 'elden-ring',
        title: "Elden Ring",
        genre: "Action RPG",
        platform: "PC (Steam)",
        status: "In Progress",
        playtime: 65.1, // Adjusted down slightly, still in progress
        lastPlayed: "2025-11-20",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Elden_Ring_Box_Art.jpg/220px-Elden_Ring_Box_Art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_07b8b4b8a2416f407768e14238e55e3760e405a3.1920x1080.jpg?t=1700676999",
        description: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between."
    },
    {
        id: 'minecraft',
        title: "Minecraft",
        genre: "Sandbox",
        platform: "PC (Minecraft Launcher)",
        status: "Installed",
        playtime: 680.0, // Adjusted up, Sandbox games easily hit these numbers
        lastPlayed: "2025-12-06",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/1575440/ss_d8d1e29c0175d6e273f5507850541743a1a67761.1920x1080.jpg?t=1697224213",
        description: "Explore infinite worlds and build everything from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep in survival mode."
    },
    {
        id: 'l4d2',
        title: "Left 4 Dead 2",
        genre: "FPS",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 155.0, // Realistic for a cooperative multiplayer title
        lastPlayed: "2025-12-04",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Left_4_Dead_2_cover.jpg/220px-Left_4_Dead_2_cover.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/550/ss_017b203c907b2353ef821434c3822f790c74b971.1920x1080.jpg?t=1702484391",
        description: "A cooperative first-person shooter game that casts you and your friends as four new Survivors armed with a wide array of classic and upgraded weapons."
    },
    {
        id: 'witcher3',
        title: "The Witcher 3: Wild Hunt",
        genre: "Action RPG",
        platform: "PC (GOG)",
        status: "Completed",
        playtime: 175.0, // Realistic for 100% completion including DLC
        lastPlayed: "2025-08-10",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/292030/ss_495e921503c5166f2849b784a92636f0ff502b4d.1920x1080.jpg?t=1698246473",
        description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will."
    },
    {
        id: 'stardew',
        title: "Stardew Valley",
        genre: "Simulation",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 210.5, // Adjusted up, simulation games can easily exceed 100 hours
        lastPlayed: "2025-12-01",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Stardew_Valley_cover_art.png/220px-Stardew_Valley_cover_art.png",
        backgroundImage: "https://i.imgur.com/gK2g2f3.jpg",
        description: "You've inherited your grandfather's old farm plot. Armed with hand-me-down tools and a few coins, you set out to begin your new life."
    },
    {
        id: 'apex',
        title: "Apex Legends",
        genre: "Battle Royale",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 310.9, // Realistic for a frequently played live service BR
        lastPlayed: "2025-12-06",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Apex_legends_cover.jpg/220px-Apex_legends_cover.jpg",
        backgroundImage: "https://image.api.playstation.com/vulcan/ap/rnd/202302/1620/b77f32e925b425516a2476d0b30176880287d25e01f65f37.png",
        description: "Master an ever-growing roster of legendary characters with powerful abilities and experience strategic squad play and innovative combat in a next-gen Battle Royale."
    },
    // --- 24 New Games Added Below (Playtime Adjusted) ---
    {
        id: 'hades',
        title: "Hades",
        genre: "Action Roguelike",
        platform: "PC (Epic Games)",
        status: "Completed",
        playtime: 85.3, // Realistic for multiple escapes, true ending, and high heat runs
        lastPlayed: "2025-11-15",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/C/C9/Hades_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/ss_cc1c128507c91c33c2a6396e9447e704e9c70c6e.1920x1080.jpg?t=1697561806",
        description: "Defy the god of the dead as you hack and slash your way out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion and Transistor."
    },
    {
        id: 'valheim',
        title: "Valheim",
        genre: "Survival",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 140.0, // Realistic for reaching late-game bosses/biomes
        lastPlayed: "2025-10-25",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Valheim_cover_art.jpg/220px-Valheim_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_c729b19e7a274533a1e26b1a774775d7e35b0d06.1920x1080.jpg?t=1700676451",
        description: "A brutal exploration and survival game for 1-10 players set in a procedurally-generated purgatory inspired by Norse mythology."
    },
    {
        id: 'civ6',
        title: "Sid Meier's Civilization VI",
        genre: "Strategy",
        platform: "PC (Epic Games)",
        status: "Installed",
        playtime: 290.0, // Realistic for multiple campaigns/high replayability
        lastPlayed: "2025-11-25",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/a/a2/Civilization_VI_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/289070/ss_5d4d1279268d879287c8a678523c0356784d59a7.1920x1080.jpg?t=1694034870",
        description: "Attempt to build an empire that will stand the test of time, starting from the Stone Age up to the Information Age."
    },
    {
        id: 'portal2',
        title: "Portal 2",
        genre: "Puzzle",
        platform: "PC (Steam)",
        status: "Completed",
        playtime: 18.0, // Realistic for single player + coop completion
        lastPlayed: "2025-07-01",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/c/c9/Portal_2_cover.png",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/620/ss_bf4615a6b7d51b39912066c078028a6f4e150337.1920x1080.jpg?t=1672614330",
        description: "A hilariously mind-bending adventure that introduces a host of dynamic new characters, a ton of fresh puzzle elements, and more expansive test chambers."
    },
    {
        id: 'factorio',
        title: "Factorio",
        genre: "Management/Automation",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 410.0, // Realistic for deep automation games
        lastPlayed: "2025-12-06",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Factorio_cover.jpg/220px-Factorio_cover.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/427520/ss_868b417282b95088f1190cc329b3503b414619a9.1920x1080.jpg?t=1686940173",
        description: "Build and maintain factories, utilizing all your resources, and protecting them from hostile creatures."
    },
    {
        id: 'doom-eternal',
        title: "DOOM Eternal",
        genre: "FPS",
        platform: "PC (Steam)",
        status: "Completed",
        playtime: 35.5, // Realistic for 100% campaign and some multiplayer/DLC
        lastPlayed: "2025-05-20",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Doom_Eternal_cover_art.png/220px-Doom_Eternal_cover_art.png",
        backgroundImage: "https://image.api.playstation.com/vulcan/ap/rnd/202003/0909/eJ7gB8vWk2X35Yk62T1V0b1k.jpg",
        description: "The Doom Slayer returns to save humanity from a demonic invasion, featuring intense, fast-paced combat and a deeper lore experience."
    },
    {
        id: 'subnautica',
        title: "Subnautica",
        genre: "Survival",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 70.2, // Realistic for exploring and completing the main story
        lastPlayed: "2025-11-10",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Subnautica_cover_art.jpg/220px-Subnautica_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/264710/ss_b8364c3c3a9f074463428d052a5c88c035d8d1f7.1920x1080.jpg?t=1697669275",
        description: "You have crash-landed on an alien ocean world, and the only way to go is down. Manage your oxygen supply as you explore kelp forests, plateaus, reefs, and more."
    },
    {
        id: 'hollow-knight',
        title: "Hollow Knight",
        genre: "Metroidvania",
        platform: "PC (GOG)",
        status: "In Progress",
        playtime: 55.0, // Adjusted to reflect significant time spent in a difficult game
        lastPlayed: "2025-11-30",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Hollow_Knight_cover_art.png/220px-Hollow_Knight_cover_art.png",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/367520/ss_37435f79a94154a4f8f4118f6f8902d24248ef7e.1920x1080.jpg?t=1689369324",
        description: "Explore a vast, ruined insect kingdom in this beautiful, hand-drawn 2D action-adventure game."
    },
    {
        id: 'r6-siege',
        title: "Rainbow Six Siege",
        genre: "Tactical Shooter",
        platform: "PC (Ubisoft Connect)",
        status: "Installed",
        playtime: 600.0, // Realistic for an ongoing tactical multiplayer shooter
        lastPlayed: "2025-12-05",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Rainbow_Six_Siege_cover_art.jpg/220px-Rainbow_Six_Siege_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/359550/ss_16361a9956cc5e2b43b35582f3484f275e7a9b09.1920x1080.jpg?t=1697561569",
        description: "A fast-paced, ever-evolving multiplayer FPS where the right strategy and destruction can mean victory."
    },
    {
        id: 'masseffect-le',
        title: "Mass Effect Legendary Edition",
        genre: "Action RPG",
        platform: "PC (Origin)",
        status: "Completed",
        playtime: 150.0, // Realistic for finishing the entire trilogy
        lastPlayed: "2025-10-01",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Mass_Effect_Legendary_Edition_cover_art.jpg/220px-Mass_Effect_Legendary_Edition_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/1328670/ss_26e828e6c46a6f675685a443577d341936c39f03.1920x1080.jpg?t=1700676449",
        description: "Relive the legend of Commander Shepard in the critically acclaimed Mass Effect trilogy, remastered and optimized for 4K Ultra HD."
    },
    {
        id: 'outer-wilds',
        title: "Outer Wilds",
        genre: "Exploration/Puzzle",
        platform: "PC (Epic Games)",
        status: "Completed",
        playtime: 25.0, // Realistic for a knowledge-based puzzle game with a fixed story loop
        lastPlayed: "2025-06-12",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Outer_Wilds_Cover_Art.jpg/220px-Outer_Wilds_Cover_Art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/753640/ss_4958f3815e61d8f1610486b3e895782787c88b71.1920x1080.jpg?t=1701282110",
        description: "Explore a solar system trapped in an endless time loop. Solve the mysteries using your knowledge, not by upgrading skills."
    },
    {
        id: 'rocket-league',
        title: "Rocket League",
        genre: "Sports/Arcade",
        platform: "PC (Epic Games)",
        status: "Installed",
        playtime: 550.0, // Realistic for a highly competitive multiplayer title
        lastPlayed: "2025-12-06",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/e/e0/Rocket_League_coverart.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/252950/ss_84f9b88c6e2646c0d603e83921062b1b51e08920.1920x1080.jpg?t=1697669389",
        description: "Soccer meets driving in this physics-based multiplayer successor to Supersonic Acrobatic Rocket-Powered Battle-Cars."
    },
    {
        id: 'terarria',
        title: "Terraria",
        genre: "Sandbox",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 350.0, // Realistic for a 2D sandbox with heavy crafting/boss progression
        lastPlayed: "2025-11-20",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Terraria_cover.jpg/220px-Terraria_cover.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/105600/ss_26673673f44383437535b91b8a4f91e92d77d710.1920x1080.jpg?t=1701282132",
        description: "Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game."
    },
    {
        id: 'fallout-nv',
        title: "Fallout: New Vegas",
        genre: "Action RPG",
        platform: "PC (Steam)",
        status: "Completed",
        playtime: 115.0, // Adjusted up for deep side quests and DLC completion
        lastPlayed: "2025-09-05",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/b/bd/Fallout_New_Vegas_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/22380/ss_dd09c15857211516e10b1a039d96c4293e50257e.1920x1080.jpg?t=1697669300",
        description: "Welcome to Vegas. New Vegas. Enjoy your stay in the post-apocalyptic Mojave Wasteland."
    },
    {
        id: 'dishonored',
        title: "Dishonored",
        genre: "Stealth Action-Adventure",
        platform: "PC (Steam)",
        status: "Completed",
        playtime: 28.0, // Adjusted for two full playthroughs (High Chaos and Low Chaos)
        lastPlayed: "2025-07-15",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/3/36/Dishonored_box_art.png",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/205100/ss_1647a82743820252ff6d5069b183424d852a0a2f.1920x1080.jpg?t=1687361848",
        description: "A first-person stealth game where you play as Corvo Attano, a legendary assassin framed for the murder of the Empress."
    },
    {
        id: 'no-mans-sky',
        title: "No Man's Sky",
        genre: "Exploration",
        platform: "PC (Steam)",
        status: "In Progress",
        playtime: 110.5, // Realistic for ongoing exploration and content updates
        lastPlayed: "2025-11-25",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/No_Man%27s_Sky_cover_art.jpg/220px-No_Man%27s_Sky_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/275850/ss_b87440e227a92c01994e43f54546419409b30c30.1920x1080.jpg?t=1700676451",
        description: "A science fiction game of exploration and survival in an infinite procedurally generated universe."
    },
    {
        id: 'monster-hunter-w',
        title: "Monster Hunter: World",
        genre: "Action RPG",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 190.0, // Realistic for grinding high-level gear and monsters
        lastPlayed: "2025-12-03",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/9/90/Monster_Hunter_World_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/582010/ss_5650117b07d57183e878505d5b739666d9ff7b65.1920x1080.jpg?t=1697669438",
        description: "Hunt colossal creatures in a living, breathing ecosystem. Use the materials to craft better gear and take on even tougher foes."
    },
    {
        id: 'sea-of-thieves',
        title: "Sea of Thieves",
        genre: "Action-Adventure",
        platform: "PC (Xbox App)",
        status: "Installed",
        playtime: 130.0, // Realistic for an open-world cooperative/live service game
        lastPlayed: "2025-12-06",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Sea_of_Thieves_cover_art.jpg/220px-Sea_of_Thieves_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/1172620/ss_75e0c50c056d61d15c8e392683a45c613c9e99a8.1920x1080.jpg?t=1697669354",
        description: "A vibrant, shared-world adventure game where you can be the pirate you've always dreamed of."
    },
    {
        id: 'disco-elysium',
        title: "Disco Elysium - The Final Cut",
        genre: "RPG",
        platform: "PC (Steam)",
        status: "Completed",
        playtime: 60.0, // Realistic for a single, deep playthrough with significant reading
        lastPlayed: "2025-09-20",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Disco_Elysium.jpg/220px-Disco_Elysium.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/632470/ss_163628e830d17d83398c8c736f56d0d970e599b5.1920x1080.jpg?t=1700676451",
        description: "A groundbreaking open world role playing game. You're a detective with a unique skill system at your disposal and a whole city block to carve your path across."
    },
    {
        id: 'resident-evil-4-r',
        title: "Resident Evil 4 (Remake)",
        genre: "Survival Horror",
        platform: "PC (Steam)",
        status: "Completed",
        playtime: 25.0, // Realistic for first completion + a New Game+ run
        lastPlayed: "2025-11-01",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Resident_Evil_4_remake_cover_art.jpg/220px-Resident_Evil_4_remake_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/2050650/ss_20a232759e5170362f6d0f171221b203c9e6d080.1920x1080.jpg?t=1699566904",
        description: "Survival is just the beginning. Six years after the biological disaster in Raccoon City, Leon S. Kennedy searches for the president's missing daughter."
    },
    {
        id: 'flightsim',
        title: "Microsoft Flight Simulator",
        genre: "Simulation",
        platform: "PC (Xbox App)",
        status: "Installed",
        playtime: 50.8, // Realistic for a simulation game that requires dedicated time
        lastPlayed: "2025-11-29",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Microsoft_Flight_Simulator_2020_cover_art.png/220px-Microsoft_Flight_Simulator_2020_cover_art.png",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/1250410/ss_10b1442a8b9e6716075c30c8046b9a896d705c43.1920x1080.jpg?t=1700760161",
        description: "From light planes to wide-body jets, fly highly detailed aircraft in an incredibly realistic world."
    },
    {
        id: 'darkest-dungeon',
        title: "Darkest Dungeon",
        genre: "RPG/Roguelike",
        platform: "PC (Steam)",
        status: "In Progress",
        playtime: 70.0, // Realistic for deep progression in a roguelike RPG
        lastPlayed: "2025-10-15",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Darkest_Dungeon_cover.jpg/220px-Darkest_Dungeon_cover.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/262060/ss_8e100f7964b732f14659b85437882269a6b63d7e.1920x1080.jpg?t=1687361848",
        description: "A challenging gothic roguelike turn-based RPG about the psychological stresses of adventuring."
    },
    {
        id: 'hitman3',
        title: "Hitman 3",
        genre: "Stealth",
        platform: "PC (Epic Games)",
        status: "Installed",
        playtime: 60.5, // Adjusted up for mastering all mission stories and challenges
        lastPlayed: "2025-12-04",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Hitman_3_cover_art.jpg/220px-Hitman_3_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/1659040/ss_30c69d5111b158b09315e1975e01b7c3d1000b01.1920x1080.jpg?t=1700676452",
        description: "Death Awaits. Agent 47 returns as a ruthless professional for the most important contracts of his career."
    },
    {
        id: 'path-of-exile',
        title: "Path of Exile",
        genre: "Action RPG",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 800.0, // Retained high hours for a deep ARPG with seasonal content
        lastPlayed: "2025-12-06",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Path_of_Exile_cover_art.jpg/220px-Path_of_Exile_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/238960/ss_8832a89c922a9442a8a3a0e98030999059f131a2.1920x1080.jpg?t=1697669420",
        description: "A free-to-play online Action RPG set in the dark fantasy world of Wraeclast."
    },
    {
        id: 'tekken8',
        title: "Tekken 8",
        genre: "Fighting",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 145.0, // Adjusted significantly higher for mastery of competitive fighting mechanics
        lastPlayed: "2025-12-05",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Tekken_8_cover_art.jpg/220px-Tekken_8_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_593c6607e4c9e8f495b6a38096f9e0520633b49e.1920x1080.jpg?t=1701282133",
        description: "The next generation of fighting games with 32 fighters engaging in fierce battles."
    },
    {
        id: 'league-of-legends',
        title: "League of Legends",
        genre: "MOBA",
        platform: "PC (Riot Games Launcher)",
        status: "Installed",
        playtime: 1500.0, // Adjusted higher - MOBA hours are often astronomical
        lastPlayed: "2025-12-06",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/League_of_Legends-poster.jpg/220px-League_of_Legends-poster.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_07b8b4b8a2416f407768e14238e55e3760e405a3.1920x1080.jpg?t=1700676999", // Placeholder, MOBA BGs are rare on game sites
        description: "A fast-paced, competitive online game that blends the intensity of an RTS with RPG elements."
    },
    {
        id: 'halo-infinite',
        title: "Halo Infinite",
        genre: "FPS",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 60.5, // Realistic for campaign + some multiplayer time
        lastPlayed: "2025-11-28",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Halo_Infinite_cover.png/220px-Halo_Infinite_cover.png",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/1240440/ss_60a3698b67137f2257e0f22f51f422e17540954b.1920x1080.jpg?t=1701282126",
        description: "When all hope is lost and humanity’s fate hangs in the balance, Master Chief is ready to confront the most ruthless foe he’s ever faced."
    },
    {
        id: 'god-of-war',
        title: "God of War",
        genre: "Action-Adventure",
        platform: "PC (Steam)",
        status: "Completed",
        playtime: 55.0, // Adjusted up for post-game content (Valkyries)
        lastPlayed: "2025-10-22",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/a/ad/God_of_War_4_cover.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/1593500/ss_017b203c907b2353ef821434c3822f790c74b971.1920x1080.jpg?t=1672614330",
        description: "Kratos, living as a man outside the shadow of the gods, ventures into the brutal Norse wilds with his son Atreus."
    },
    {
        id: 'rimworld',
        title: "RimWorld",
        genre: "Construction and Management Simulation",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 380.0, // Adjusted higher for deep colony sim and DLCs
        lastPlayed: "2025-12-05",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/RimWorld_cover_art.jpg/220px-RimWorld_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/294100/ss_75e0c50c056d61d15c8e392683a45c613c9e99a8.1920x1080.jpg?t=1701282128",
        description: "A sci-fi colony simulator driven by an intelligent AI storyteller. Inspired by Firefly, Dwarf Fortress, and Dune."
    },
    {
        id: 'celeste',
        title: "Celeste",
        genre: "Platformer",
        platform: "PC (Steam)",
        status: "Completed",
        playtime: 45.0, // Adjusted higher for tackling C-Sides and Farewell
        lastPlayed: "2025-08-01",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Celeste_box_art_GDC_2018.png/220px-Celeste_box_art_GDC_2018.png",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/504230/ss_07b8b4b8a2416f407768e14238e55e3760e405a3.1920x1080.jpg?t=1697669275",
        description: "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain in this super-tight, hand-crafted platformer."
    },
    {
        id: 'gta5',
        title: "Grand Theft Auto V",
        genre: "Action-Adventure",
        platform: "PC (Rockstar Games Launcher)",
        status: "Installed",
        playtime: 750.0, // Realistic for campaign completion plus heavy GTA Online/roleplay time
        lastPlayed: "2025-11-20",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_2b69460596350e95c477926b66b6c00d463d1efc.1920x1080.jpg?t=1697669385",
        description: "A young street hustler, a retired bank robber and a terrifying psychopath must pull off a series of dangerous heists to survive in a ruthless city."
    },
    {
        id: 'warframe',
        title: "Warframe",
        genre: "Action RPG/Looter Shooter",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 900.0, // Retained high hours for a free-to-play MMO-like looter
        lastPlayed: "2025-12-06",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Warframe_cover_art.jpg/220px-Warframe_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/230410/ss_017b203c907b2353ef821434c3822f790c74b971.1920x1080.jpg?t=1697669400",
        description: "A free-to-play cooperative third-person shooter set in an evolving science fiction world."
    },
    {
        id: 'baldurs-gate-3',
        title: "Baldur's Gate 3",
        genre: "RPG",
        platform: "PC (Steam)",
        status: "In Progress",
        playtime: 80.0, // Realistic for a deep, in-progress first playthrough
        lastPlayed: "2025-12-01",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Baldur%27s_Gate_3_cover_art.jpg/220px-Baldur%27s_Gate_3_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/ss_5d4d1279268d879287c8a678523c0356784d59a7.1920x1080.jpg?t=1700676451",
        description: "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power."
    },
    {
        id: 'rocket-league-2',
        title: "Rocket League",
        genre: "Sports/Arcade",
        platform: "PC (Epic Games)",
        status: "Installed",
        playtime: 550.0, // Duplicate removed, but kept playtime high
        lastPlayed: "2025-12-06",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/e/e0/Rocket_League_coverart.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/252950/ss_84f9b88c6e2646c0d603e83921062b1b51e08920.1920x1080.jpg?t=1697669389",
        description: "Soccer meets driving in this physics-based multiplayer successor to Supersonic Acrobatic Rocket-Powered Battle-Cars."
    },
    {
        id: 'control',
        title: "Control",
        genre: "Action-Adventure",
        platform: "PC (Epic Games)",
        status: "Completed",
        playtime: 30.0, // Realistic for completion and some side missions
        lastPlayed: "2025-07-25",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Control_cover_art.jpg/220px-Control_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/870780/ss_26673673f44383437535b91b8a4f91e92d77d710.1920x1080.jpg?t=1697669275",
        description: "After a secretive agency in New York is invaded by an otherworldly threat, you become the new Director struggling to regain Control."
    },
    {
        id: 'slay-the-spire',
        title: "Slay the Spire",
        genre: "Deck-Building Roguelike",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 180.0, // Realistic for a roguelike with high replayability and ascent runs
        lastPlayed: "2025-12-03",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Slay_the_Spire_cover_art.jpg/220px-Slay_the_Spire_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/646570/ss_dd09c15857211516e10b1a039d96c4293e50257e.1920x1080.jpg?t=1700676451",
        description: "Weave a unique deck, encounter bizarre creatures, discover relics of immense power, and Slay the Spire!"
    },
    {
        id: 'age-of-empires-2',
        title: "Age of Empires II: Definitive Edition",
        genre: "RTS",
        platform: "PC (Steam)",
        status: "Installed",
        playtime: 210.0, // Realistic for a classic RTS with deep multiplayer and campaigns
        lastPlayed: "2025-11-18",
        isFavorite: false,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Age_of_Empires_II_Definitive_Edition_cover_art.jpg/220px-Age_of_Empires_II_Definitive_Edition_cover_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/813780/ss_2b69460596350e95c477926b66b6c00d463d1efc.1920x1080.jpg?t=1700676451",
        description: "Explore all the original campaigns and the best-selling expansions like never before in this definitive real-time strategy experience."
    }
];

const gameListContainer = document.querySelector('.game-list');
const detailTitle = document.getElementById('detail-title');
const detailPlaytime = document.getElementById('detail-playtime');
const detailLastPlayed = document.getElementById('detail-lastplayed');
const detailGenre = document.getElementById('detail-genre');
const detailPlatform = document.getElementById('detail-platform');
const detailStatus = document.getElementById('detail-status');
const detailDescription = document.getElementById('detail-description');
const detailBackgroundImage = document.getElementById('detail-background-image');
const favoriteBtn = document.getElementById('favorite-btn');

const sortBySelect = document.getElementById('sort-by');
const filterGenreSelect = document.getElementById('filter-genre');
const filterStatusSelect = document.getElementById('filter-status');
const searchInput = document.getElementById('search-input');

const profileBtn = document.getElementById('profile-btn');
const userMenu = document.getElementById('user-menu');
const closeModalBtn = document.getElementById('close-modal-btn');
const addGameOpener = document.getElementById('add-game-opener');
const addGameModal = document.getElementById('add-game-modal');
const saveNewGameBtn = document.getElementById('save-new-game');
const friendsBtn = document.getElementById('friends-btn');
const settingsBtn = document.getElementById('settings-btn');

let currentActiveGameId = gamesData[0].id;

function renderGameList(gamesToRender = gamesData) {
    gameListContainer.innerHTML = '';
    
    if (gamesToRender.length === 0) {
        gameListContainer.innerHTML = `<p style="text-align: center; color: #888; padding: 20px;">No games found.</p>`;
        return;
    }

    gamesToRender.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        if (game.id === currentActiveGameId) {
            gameItem.classList.add('active');
        }
        if (game.isFavorite) {
            gameItem.classList.add('favorite');
        }
        gameItem.dataset.gameId = game.id; 

        const playtimeDisplay = game.playtime > 0 ? `${game.playtime.toFixed(1)}h` : 'Not Played';
        
        gameItem.innerHTML = `
            <img src="${game.cover}" alt="${game.title} Cover">
            <div class="game-info">
                <h4>${game.title}</h4>
                <span>${game.status} | ${playtimeDisplay}</span>
            </div>
        `;
        gameItem.addEventListener('click', () => {
            setActiveGame(game.id);
        });
        gameListContainer.appendChild(gameItem);
    });
}

function setActiveGame(gameId) {
    currentActiveGameId = gameId;
    const selectedGame = gamesData.find(game => game.id === gameId);

    document.querySelectorAll('.game-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.gameId === gameId) {
            item.classList.add('active');
        }
    });

    if (selectedGame) {
        const playtimeDisplay = selectedGame.playtime > 0 ? `${selectedGame.playtime.toFixed(1)} Hours Played` : 'Not Played';
        const lastPlayedDate = selectedGame.lastPlayed !== 'N/A' ? new Date(selectedGame.lastPlayed).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A';
        const lastPlayedDisplay = selectedGame.lastPlayed !== 'N/A' ? `Last Played: ${lastPlayedDate}` : 'Never Played';
        
        detailTitle.textContent = selectedGame.title;
        detailPlaytime.textContent = playtimeDisplay;
        detailLastPlayed.textContent = lastPlayedDisplay;
        detailGenre.textContent = selectedGame.genre;
        detailPlatform.textContent = selectedGame.platform;
        detailStatus.textContent = selectedGame.status;
        detailDescription.textContent = selectedGame.description;
        detailBackgroundImage.src = selectedGame.backgroundImage || 'https://via.placeholder.com/1000x250?text=NO+BACKGROUND'; 
        
        favoriteBtn.classList.toggle('is-favorite', selectedGame.isFavorite);
        favoriteBtn.innerHTML = selectedGame.isFavorite ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
}

function sortGames(games, criteria) {
    return [...games].sort((a, b) => {
        if (criteria === 'title-asc') {
            return a.title.localeCompare(b.title);
        } else if (criteria === 'playtime') {
             return b.playtime - a.playtime;
        } else if (criteria === 'favorite') {
             return b.isFavorite - a.isFavorite || a.title.localeCompare(b.title);
        }
        return 0;
    });
}

function applyFiltersAndSort() {
    let currentGames = [...gamesData];
    
    const genre = filterGenreSelect.value;
    const status = filterStatusSelect.value;
    const searchTerm = searchInput.value;
    const sortBy = sortBySelect.value;

    const filteredGames = currentGames.filter(game => {
        const matchesGenre = (genre === 'all' || game.genre === genre);
        const matchesStatus = (status === 'all' || game.status === status);
        const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesGenre && matchesStatus && matchesSearch;
    });

    const finalGames = sortGames(filteredGames, sortBy);

    renderGameList(finalGames);
    
    if (finalGames.length > 0) {
        const activeGameStillExists = finalGames.some(game => game.id === currentActiveGameId);
        if (!activeGameStillExists) {
            setActiveGame(finalGames[0].id);
        } else {
             setActiveGame(currentActiveGameId);
        }
    } else {
        detailTitle.textContent = "No Game Selected";
        detailDescription.textContent = "Please add or adjust filters to view games.";
        detailBackgroundImage.src = '';
    }
}

function populateFilters() {
    const genres = [...new Set(gamesData.map(game => game.genre))].sort();
    const statuses = [...new Set(gamesData.map(game => game.status))].sort();

    filterGenreSelect.innerHTML = '<option value="all">All Genres</option>';
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        filterGenreSelect.appendChild(option);
    });
    filterStatusSelect.innerHTML = '<option value="all">All Statuses</option>';
    statuses.forEach(status => {
        const option = document.createElement('option');
        option.value = status;
        option.textContent = status;
        filterStatusSelect.appendChild(option);
    });
}

function toggleFavorite() {
    const game = gamesData.find(g => g.id === currentActiveGameId);
    if (game) {
        game.isFavorite = !game.isFavorite;
        applyFiltersAndSort();
    }
}

function addNewGame() {
    const title = document.getElementById('new-title').value;
    const genre = document.getElementById('new-genre').value;
    const status = document.getElementById('new-status').value;

    if (!title || !genre) {
        alert("Please enter a Title and Genre.");
        return;
    }

    const newId = 'game-' + Date.now();
    const newGame = {
        id: newId,
        title: title,
        genre: genre,
        platform: "Manual Entry",
        status: status,
        playtime: 0.0,
        lastPlayed: "N/A",
        isFavorite: false,
        cover: "https://via.placeholder.com/50x70?text=NEW", // Placeholder cover
        backgroundImage: "https://via.placeholder.com/1000x250?text=MANUAL+ADD", // Placeholder BG
        description: `This is a manually added game titled: ${title}.`
    };
    
    gamesData.push(newGame); 
    addGameModal.classList.add('hidden'); 
    applyFiltersAndSort(); 
    setActiveGame(newId); 
    populateFilters(); 
    
    document.getElementById('new-title').value = '';
    document.getElementById('new-genre').value = '';
}

function setupEventListeners() {

    sortBySelect.addEventListener('change', applyFiltersAndSort);
    filterGenreSelect.addEventListener('change', applyFiltersAndSort);
    filterStatusSelect.addEventListener('change', applyFiltersAndSort);
    searchInput.addEventListener('input', applyFiltersAndSort);
    favoriteBtn.addEventListener('click', toggleFavorite);

    profileBtn.addEventListener('click', () => {
        userMenu.classList.toggle('hidden');
    });
    document.getElementById('close-menu-btn').addEventListener('click', () => {
        userMenu.classList.add('hidden');
    });
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.user-profile-container') && !userMenu.classList.contains('hidden')) {
             userMenu.classList.add('hidden');
        }
    });

    addGameOpener.addEventListener('click', () => {
        addGameModal.classList.remove('hidden');
    });
    closeModalBtn.addEventListener('click', () => {
        addGameModal.classList.add('hidden');
    });
    saveNewGameBtn.addEventListener('click', addNewGame);
    
    friendsBtn.addEventListener('click', () => {
        alert('HINDI PA TAPOS SIR HAHAHAHAHAHA');
    });
    settingsBtn.addEventListener('click', () => {
        alert('HINDI PA TAPOS SIR HAHAHAHAHA');
    });
    
    document.querySelector('.play-btn').addEventListener('click', () => {
        alert(`Launching ${gamesData.find(g => g.id === currentActiveGameId).title}...`);
    });
    document.querySelector('.edit-btn').addEventListener('click', () => {
        alert(`FUNCTION: Edit Details for ${gamesData.find(g => g.id === currentActiveGameId).title} (TINAMAD NA HINDI NATAPOS)`);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    applyFiltersAndSort(); 
    setupEventListeners();
});