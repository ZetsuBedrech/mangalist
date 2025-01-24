const container = document.getElementById("container");

const animes = [
    {
        title: "Blue Period",
        numbers: 15,
        note: "15",
    },
]

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
            <p>${anime.note} / 20</p>
        `;
        container.appendChild(animeElement);
    });
}

// Afficher tous les animes au chargement initial
filterAnimes("Tous");