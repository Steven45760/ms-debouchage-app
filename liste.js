// Charge les interventions depuis le LocalStorage
let interventions = JSON.parse(localStorage.getItem("interventions")) || [];

// Sélection du tableau
const tbody = document.querySelector("#tableauInterventions tbody");

// Affiche toutes les interventions dans le tableau
function afficherInterventions() {
    tbody.innerHTML = "";

    interventions.forEach(inter => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${inter.numero}</td>
            <td>${inter.chantier}</td>
            <td>${inter.demandeur}</td>
            <td>${inter.type}</td>
            <td>${inter.datePlanif}</td>
            <td>${inter.ville}</td>
            <td>
                <button onclick="window.location.href='modifier.html?id=${inter.id}'">
                    Modifier
                </button>
                <button onclick="supprimerIntervention(${inter.id})">
                    Supprimer
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

afficherInterventions();


// 🔥 Fonction de suppression
function supprimerIntervention(id) {
    interventions = interventions.filter(inter => inter.id !== id);
    localStorage.setItem("interventions", JSON.stringify(interventions));
    afficherInterventions();
}


// 🔍 Recherche en temps réel
document.getElementById("recherche").addEventListener("input", function () {
    let filtre = this.value.toLowerCase();
    let lignes = document.querySelectorAll("#tableauInterventions tbody tr");

    lignes.forEach(ligne =>
