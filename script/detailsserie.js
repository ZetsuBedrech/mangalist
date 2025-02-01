const params = new URLSearchParams(window.location.search);
const title = params.get("title");

fetch("../json/serie.json")
    .then(response => response.json())
    .then(series => {
        const serie = series.find(s => s.title === title);
        if (serie) {
            document.getElementById("serie-details").innerHTML = `
                <h1>${serie.title}</h1>
                <p>Note : ${serie.note} / 10</p>
                <p>Description : ${serie.description}</p>
                <img src="${serie.img}" alt="${serie.title}">
                <button onclick="window.history.back()">Retour</button>
            `;
        } else {
            document.getElementById("serie-details").innerHTML = "<p>Série non trouvée.</p>";
        }
    })
    .catch(error => console.error("Erreur de chargement des détails :", error));
