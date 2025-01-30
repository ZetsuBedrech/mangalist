const container = document.getElementById("container");

let series = [];

fetch("../json/serie.json")
    .then(response => response.json())
    .then(data => {
        series = data; // Stocker les mangas récupérés
        filterseries("Tous"); // Afficher tous les mangas au chargement
    })
    .catch(error => console.error("Erreur de chargement du fichier JSON :", error));

function searchseries(query) {
    const lowerCaseQuery = query.toLowerCase(); // Convertir la recherche en minuscules
    container.innerHTML = ""; // Vider le conteneur

    const filteredseries = series.filter(serie =>
        serie.title.toLowerCase().includes(lowerCaseQuery)
    );

    if (filteredseries.length === 0) {
        container.innerHTML = "<p>Aucun serie trouvé.</p>";
    } else {
        filteredseries.forEach(serie => {
            const serieElement = document.createElement("div");
            serieElement.classList.add("serie");
            serieElement.innerHTML = `
                <h2>${serie.title}</h2>
                <p>Nombre d'épisodes : ${serie.numbers}</p>
                <p>${serie.note} / 20</p>
            `;
            container.appendChild(serieElement);
        });
    }
}

// Fonction pour afficher les series filtrés
function filterseries(note) {
    container.innerHTML = ""; // Vider le conteneur

    const filteredseries = note === "Tous"
        ? series // Si "Tous", afficher tous les series
        : series.filter(serie => serie.note === note);

    filteredseries.forEach(serie => {
        const serieElement = document.createElement("div");
        serieElement.classList.add("serie");
        serieElement.innerHTML = `
            <h2>${serie.title}</h2>
            <p>Nombre d'épisodes : ${serie.numbers}</p>
            <p>${serie.note} / 10</p>
        `;
        container.appendChild(serieElement);
    });
}

// Afficher tous les series au chargement initial
filterseries("Tous");