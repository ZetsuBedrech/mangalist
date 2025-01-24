const container = document.getElementById("container");

const films = [
    {
        title: "Interstellar",
        note: "20",
    },
];

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
            <p>${film.note} / 20</p>
        `;
        container.appendChild(filmElement);
    });
}

// Afficher tous les films au chargement initial
filterFilms("Tous");
