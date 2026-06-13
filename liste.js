// ------------------------------
// Charger les interventions
// ------------------------------
function chargerInterventions() {
    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];

    // Afficher TOUTES les interventions
    afficherInterventions(interventions);
}


// ------------------------------
// Afficher les interventions dans le tableau
// ------------------------------
function afficherInterventions(interventions) {
    let tbody = document.querySelector("#tableauInterventions tbody");
    tbody.innerHTML = "";

    interventions.forEach(inter => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${inter.numero}</td>
            <td>${inter.chantier}</td>
            <td>${inter.demandeur}</td>
            <td>${inter.type}</td>
            <td>${inter.datePlanif || ""}</td>
            <td>${inter.ville}</td>
            <td>
                <button class="btn" onclick="modifierIntervention(${inter.id})">Modifier</button>
                <button class="btn-danger" onclick="supprimerIntervention(${inter.id})">Supprimer</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}


// ------------------------------
// Recherche en direct
// ------------------------------
document.getElementById("recherche").addEventListener("input", function () {
    let recherche = this.value.toLowerCase();

    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];

    let resultat = interventions.filter(inter =>
        inter.numero.toLowerCase().includes(recherche) ||
        inter.chantier.toLowerCase().includes(recherche) ||
        inter.demandeur.toLowerCase().includes(recherche) ||
        inter.type.toLowerCase().includes(recherche) ||
        inter.ville.toLowerCase().includes(recherche)
    );

    afficherInterventions(resultat);
});


// ------------------------------
// Suppression
// ------------------------------
function supprimerIntervention(id) {
    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];

    interventions = interventions.filter(inter => inter.id !== id);

    localStorage.setItem("interventions", JSON.stringify(interventions));

    chargerInterventions();
}


// ------------------------------
// Modifier
// ------------------------------
function modifierIntervention(id) {
    window.location.href = `modifier.html?id=${id}`;
}


// ------------------------------
// Charger au démarrage
// ------------------------------
window.onload = chargerInterventions;
