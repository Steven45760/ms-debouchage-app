// Fonction : récupère l'année actuelle
function getAnnee() {
    return new Date().getFullYear();
}

// Fonction : récupère le dernier numéro (temporaire)
function getDernierNumero() {
    // Pour l'instant, on simule une valeur
    return 1;
}

// Fonction : génère le numéro complet AAAA/numéro
function genererNumeroIntervention() {
    const annee = getAnnee();
    const dernierNumero = getDernierNumero();
    const nouveauNumero = dernierNumero + 1;

    return `${annee}/${nouveauNumero}`;
}

// Au chargement de la page
window.onload = function() {
    document.getElementById("numero").value = genererNumeroIntervention();
};
// Sauvegarde une intervention dans LocalStorage
function sauvegarderIntervention(data) {
    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];
    interventions.push(data);
    localStorage.setItem("interventions", JSON.stringify(interventions));
}
// Gestion de la soumission du formulaire
document.getElementById("interventionForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs du formulaire
    const data = {
        numero: document.getElementById("numero").value,
        chantier: document.getElementById("chantier").value,
        demandeur: document.getElementById("demandeur").value,
        type: document.getElementById("type").value,
        dateDebut: document.getElementById("dateDebut").value,
        datePlanif: document.getElementById("datePlanif").value,
        statut: document.getElementById("statut").value,
        adresse: document.getElementById("adresse").value,
        ville: document.getElementById("ville").value,
        observations: document.getElementById("observations").value,
        noteInterne: document.getElementById("noteInterne").value
    };

    // Sauvegarde dans LocalStorage
    sauvegarderIntervention(data);

    // Redirection vers la liste
    window.location.href = "liste.html";
});

