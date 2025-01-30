const container = document.getElementById("container");

let animes = [];

fetch("../json/anime.json")
    .then(response => response.json())
    .then(data => {
        animes = data; // Stocker les mangas récupérés
        filterAnimes("Tous"); // Afficher tous les mangas au chargement
    })
    .catch(error => console.error("Erreur de chargement du fichier JSON :", error));

function searchAnimes(query) {
    const lowerCaseQuery = query.toLowerCase(); // Convertir la recherche en minuscules
    container.innerHTML = ""; // Vider le conteneur

    const filteredanimes = animes.filter(anime =>
        anime.title.toLowerCase().includes(lowerCaseQuery)
    );

    if (filteredanimes.length === 0) {
        container.innerHTML = "<p>Aucun anime trouvé.</p>";
    } else {
        filteredanimes.forEach(anime => {
            const animeElement = document.createElement("div");
            animeElement.classList.add("anime");
            animeElement.innerHTML = `
                <h2>${anime.title}</h2>
                <p>Nombre d'épisodes : ${anime.numbers}</p>
                <p>${anime.note} / 20</p>
            `;
            container.appendChild(animeElement);
        });
    }
}

// Fonction pour afficher les animes filtrés
function filterAnimes(note) {
    container.innerHTML = ""; // Vider le conteneur

    const filteredanimes = note === "Tous"
        ? animes // Si "Tous", afficher tous les animes
        : animes.filter(anime => anime.note === note);

    filteredanimes.forEach(anime => {
        const animeElement = document.createElement("div");
        animeElement.classList.add("anime");
        animeElement.innerHTML = `
            <h2>${anime.title}</h2>
            <p>Nombre d'épisodes : ${anime.numbers}</p>
            <p>Tags : ${anime.tags.join(", ")}</p>
            <p>${anime.note} / 10</p>
        `;
        container.appendChild(animeElement);
    });
}

// Afficher tous les animes au chargement initial
filterAnimes("Tous");