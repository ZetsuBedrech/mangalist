const container = document.getElementById("container");

let films = [];

fetch("../json/film.json")
    .then(response => response.json())
    .then(data => {
        films = data; // Stocker les films récupérés
        filterFilms("Tous"); // Afficher tous les films seulement après le chargement
    })
    .catch(error => console.error("Erreur de chargement du fichier JSON :", error));


function searchFilms(query) {
    const lowerCaseQuery = query.toLowerCase(); // Convertir la recherche en minuscules
    container.innerHTML = ""; // Vider le conteneur

    const filteredFilms = films.filter(film =>
        film.title.toLowerCase().includes(lowerCaseQuery)
    );

    if (filteredFilms.length === 0) {
        container.innerHTML = "<p>Aucun film trouvé.</p>";
    } else {
        filteredFilms.forEach(film => {
            const filmElement = document.createElement("div");
            filmElement.classList.add("film");
            filmElement.innerHTML = `
                <h2>${film.title}</h2>
                <p>${film.note} / 20</p>
            `;
            container.appendChild(filmElement);
        });
    }
}

// Fonction pour afficher les films filtrés
function filterFilms(note) {
    container.innerHTML = ""; // Vider le conteneur

    const filteredFilms = note === "Tous"
        ? films // Si "Tous", afficher tous les films
        : films.filter(film => film.note === note);

    filteredFilms.forEach(film => {
        const filmElement = document.createElement("div");
        filmElement.classList.add("film");
        filmElement.innerHTML = `
            <h2>${film.title}</h2>
            <p>${film.note} / 10</p>
        `;
        filmElement.addEventListener("click", () => {
            window.location.href = `detailsfilm.html?title=${encodeURIComponent(film.title)}`;
        });
        container.appendChild(filmElement);
    });
}

// Afficher tous les films au chargement initial
filterFilms("Tous");
