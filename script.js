const gamesData = [
    {
        id: 'ac-mirage',
        title: "Assassin's Creed Mirage",
        genre: "Action-Adventure",
        platform: "PC (Ubisoft Connect)",
        status: "Installed",
        playtime: 15.5,
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
        playtime: 45.2,
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
        playtime: 185.7,
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
        playtime: 40.6,
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
        playtime: 30.5,
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
        playtime: 98.3,
        lastPlayed: "2025-09-01",
        isFavorite: true,
        cover: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
        backgroundImage: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_2161747738f8863673b9e4a3d46777f98d781b0f.1920x1080.jpg?t=1695213693",
        description: "An open-world, action-adventure RPG set in Night City, a megalopolis obsessed with power, glamour and body modification. Play as V, a mercenary outlaw."
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