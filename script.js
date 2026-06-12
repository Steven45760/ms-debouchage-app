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
