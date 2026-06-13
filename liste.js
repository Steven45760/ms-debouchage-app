// Fonction pour appliquer la bonne couleur selon le statut
function getStatutClass(statut) {
    if (!statut) return "";

    switch (statut.toLowerCase()) {
        case "à planifier":
        case "a planifier":
            return "statut-a-planifier";

        case "planifié":
        case "planifie":
            return "statut-planifie";

        case "en cours":
            return "statut-en-cours";

        case "terminé":
        case "termine":
            return "statut-termine";

        default:
            return "";
    }
}

// Charger toutes les interventions
function chargerInterventions() {
    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];
    afficherInterventions(interventions);
}

// Affichage du tableau
function afficherInterventions(interventions) {
    let tbody = document.querySelector("#tableauInterventions tbody");
    if (!tbody) return;

    tbody.innerHTML = "";

    interventions.forEach(inter => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${inter.numero || ""}</td>
            <td>${inter.chantier || ""}</td>
            <td>${inter.demandeur || ""}</td>
            <td>${inter.type || ""}</td>
            <td>${inter.datePlanif || ""}</td>
            <td>${inter.ville || ""}</td>
            <td>
                <span class="statut ${getStatutClass(inter.statut)}">
                    ${inter.statut}
                </span>
            </td>
            <td>
                <button class="btn" onclick="modifierIntervention(${inter.id})">Modifier</button>
                <button class="btn-danger" onclick="supprimerIntervention(${inter.id})">Supprimer</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

// Recherche
document.getElementById("recherche")?.addEventListener("input", function () {
    let recherche = this.value.toLowerCase();
    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];

    let resultat = interventions.filter(inter =>
        (inter.numero || "").toLowerCase().includes(recherche) ||
        (inter.chantier || "").toLowerCase().includes(recherche) ||
        (inter.demandeur || "").toLowerCase().includes(recherche) ||
        (inter.type || "").toLowerCase().includes(recherche) ||
        (inter.ville || "").toLowerCase().includes(recherche) ||
        (inter.statut || "").toLowerCase().includes(recherche)
    );

    afficherInterventions(resultat);
});

// Suppression
function supprimerIntervention(id) {
    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];
    interventions = interventions.filter(inter => inter.id !== id);
    localStorage.setItem("interventions", JSON.stringify(interventions));
    chargerInterventions();
}

// Modification
function modifierIntervention(id) {
    window.location.href = `modifier.html?id=${id}`;
}

window.onload = chargerInterventions;
