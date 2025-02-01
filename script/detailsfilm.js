const params = new URLSearchParams(window.location.search);
const title = params.get("title");


fetch("../json/film.json")
    .then(response => response.json())
    .then(films => {
        const film = films.find(s => s.title === title);
        if (film) {
            document.getElementById("serie-details").innerHTML = `
                <h1>${film.title}</h1>
                <p>Note : ${film.note} / 10</p>
                <p>Description : ${film.description}</p>
                <img src="${film.img}" alt="${film.title}">
                <button onclick="window.history.back()">Retour</button>
            `;
        } else {
            document.getElementById("film-details").innerHTML = "<p>Série non trouvée.</p>";
        }
    })
    .catch(error => console.error("Erreur de chargement des détails :", error));
