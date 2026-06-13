// liste.js - version debug

function chargerInterventions() {
    console.log("chargerInterventions: démarrage");
    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];

    console.log("chargerInterventions: interventions récupérées", interventions);

    // Si aucune intervention, on crée des données de test pour vérifier l'affichage
    if (interventions.length === 0) {
        console.warn("Aucune intervention trouvée dans LocalStorage. Création d'exemples de test.");
        interventions = [
            {
                id: 1,
                numero: "2026/1",
                chantier: "Chantier A",
                demandeur: "Sacha",
                type: "Curage",
                datePlanif: "2026-06-20",
                ville: "Orléans",
                statut: "À planifier",
                adresse: "Rue Exemple 1",
                observations: "Test"
            },
            {
                id: 2,
                numero: "2026/2",
                chantier: "Chantier B",
                demandeur: "Steven",
                type: "ITV",
                datePlanif: "2026-06-22",
                ville: "Blois",
                statut: "Planifiée",
                adresse: "Rue Exemple 2",
                observations: "Test 2"
            }
        ];
        localStorage.setItem("interventions", JSON.stringify(interventions));
        console.log("Données de test insérées dans LocalStorage");
    }

    afficherInterventions(interventions);
}

function afficherInterventions(interventions) {
    console.log("afficherInterventions: nombre d'items =", interventions.length);

    let tbody = document.querySelector("#tableauInterventions tbody");
    if (!tbody) {
        console.error("afficherInterventions: impossible de trouver #tableauInterventions tbody");
        return;
    }

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
                <button class="btn" onclick="modifierIntervention(${inter.id})">Modifier</button>
                <button class="btn-danger" onclick="supprimerIntervention(${inter.id})">Supprimer</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

document.getElementById("recherche")?.addEventListener("input", function () {
    let recherche = this.value.toLowerCase();
    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];

    let resultat = interventions.filter(inter =>
        (inter.numero || "").toLowerCase().includes(recherche) ||
        (inter.chantier || "").toLowerCase().includes(recherche) ||
        (inter.demandeur || "").toLowerCase().includes(recherche) ||
        (inter.type || "").toLowerCase().includes(recherche) ||
        (inter.ville || "").toLowerCase().includes(recherche)
    );

    afficherInterventions(resultat);
});

function supprimerIntervention(id) {
    console.log("supprimerIntervention:", id);
    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];
    interventions = interventions.filter(inter => inter.id !== id);
    localStorage.setItem("interventions", JSON.stringify(interventions));
    chargerInterventions();
}

function modifierIntervention(id) {
    console.log("modifierIntervention:", id);
    window.location.href = `modifier.html?id=${id}`;
}

window.onload = function () {
    console.log("window.onload -> chargerInterventions");
    chargerInterventions();
};
