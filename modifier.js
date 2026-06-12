// Récupère l'ID dans l'URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// Charge l'intervention
let interventions = JSON.parse(localStorage.getItem("interventions")) || [];
let inter = interventions.find(i => i.id === id);

// Pré-remplit le formulaire
document.getElementById("id").value = inter.id;
document.getElementById("numero").value = inter.numero;
document.getElementById("chantier").value = inter.chantier;
document.getElementById("demandeur").value = inter.demandeur;
document.getElementById("type").value = inter.type;
document.getElementById("datePlanif").value = inter.datePlanif;
document.getElementById("ville").value = inter.ville;

// Sauvegarde les modifications
document.getElementById("modifierForm").addEventListener("submit", function(e) {
    e.preventDefault();

    inter.numero = document.getElementById("numero").value;
    inter.chantier = document.getElementById("chantier").value;
    inter.demandeur = document.getElementById("demandeur").value;
    inter.type = document.getElementById("type").value;
    inter.datePlanif = document.getElementById("datePlanif").value;
    inter.ville = document.getElementById("ville").value;

    // Sauvegarde dans LocalStorage
    localStorage.setItem("interventions", JSON.stringify(interventions));

    // Retour à la liste
    window.location.href = "liste.html";
});
