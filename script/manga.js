const container = document.getElementById("container");

let mangas = [];

fetch("json/manga.json")
    .then(response => response.json())
    .then(data => {
        mangas = data; // Stocker les mangas récupérés
        filterMangas("Tous"); // Afficher tous les mangas au chargement
    })
    .catch(error => console.error("Erreur de chargement du fichier JSON :", error));

function searchMangas(query) {
    const lowerCaseQuery = query.toLowerCase(); // Convertir la recherche en minuscules
    container.innerHTML = ""; // Vider le conteneur

    const filteredMangas = mangas.filter(manga =>
        manga.title.toLowerCase().includes(lowerCaseQuery)
    );

    if (filteredMangas.length === 0) {
        container.innerHTML = "<p>Aucun manga trouvé.</p>";
    } else {
        filteredMangas.forEach(manga => {
            const mangaElement = document.createElement("div");
            mangaElement.classList.add("manga");
            mangaElement.innerHTML = `
                <h2>${manga.title}</h2>
                <p>Nombre de tomes : ${manga.numbers}</p>
                <p>${manga.priority}</p>
            `;
            container.appendChild(mangaElement);
        });
    }
}

// Fonction pour afficher les mangas filtrés
function filterMangas(priority) {
    container.innerHTML = ""; // Vider le conteneur

    const filteredMangas = priority === "Tous"
        ? mangas // Si "Tous", afficher tous les mangas
        : mangas.filter(manga => manga.priority === priority);

    filteredMangas.forEach(manga => {
        const mangaElement = document.createElement("div");
        mangaElement.classList.add("manga");
        mangaElement.innerHTML = `
            <h2>${manga.title}</h2>
            <p>Nombre de tomes : ${manga.numbers}</p>
            <p>${manga.priority}</p>
        `;
        container.appendChild(mangaElement);
    });
}

// Afficher tous les mangas au chargement initial
filterMangas("Tous");