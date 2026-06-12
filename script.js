// Génération temporaire d'un numéro d'intervention fictif
function genererNumeroIntervention() {
    const annee = new Date().getFullYear();
    const numero = 1; // temporaire, on le remplacera par la vraie logique
    return `${annee}/${numero}`;
}

// Au chargement de la page, on remplit le champ
window.onload = function() {
    document.getElementById("numero").value = genererNumeroIntervention();
};
