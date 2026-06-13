// Génère un numéro d’intervention automatique (AAAA/numéro)
function genererNumeroIntervention() {
    const annee = new Date().getFullYear();

    // Récupère les interventions existantes
    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];

    // Filtre celles de l'année en cours
    let interventionsAnnee = interventions.filter(inter => 
        inter.numero.startsWith(annee.toString())
    );

    // Détermine le prochain numéro
    let prochainNumero = interventionsAnnee.length + 1;

    return `${annee}/${prochainNumero}`;
}

// Remplit automatiquement le numéro au chargement
window.onload = function () {
    document.getElementById("numero").value = genererNumeroIntervention();
};


// 🔥 Sauvegarde d’une intervention
document.getElementById("interventionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupère les interventions existantes
    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];

    // Crée une nouvelle intervention
    let nouvelleIntervention = {
        id: Date.now(), // ID unique
        numero: document.getElementById("numero").value,
        chantier: document.getElementById("chantier").value,
        demandeur: document.getElementById("demandeur").value,
        type: document.getElementById("
