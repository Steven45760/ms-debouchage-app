// ------------------------------
// Génération automatique du numéro
// ------------------------------
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


// ------------------------------
// Remplir automatiquement la liste "Demandé par"
// ------------------------------
function remplirDemandeurs() {
    const demandeurs = [
        "Sacha",
        "Steven",
        "Client direct",
        "Entreprise partenaire"
    ];

    let select = document.getElementById("demandeur");

    demandeurs.forEach(nom => {
        let option = document.createElement("option");
        option.value = nom;
        option.textContent = nom;
        select.appendChild(option);
    });
}


// ------------------------------
// Remplir automatiquement la liste "Type"
// ------------------------------
function remplirTypes() {
    const types = [
        "Curage",
        "ITV",
        "Curage + ITV"
    ];

    let select = document.getElementById("type");

    types.forEach(t => {
        let option = document.createElement("option");
        option.value = t;
        option.textContent = t;
        select.appendChild(option);
    });
}


// ------------------------------
// Chargement initial du formulaire
// ------------------------------
window.onload = function () {
    remplirDemandeurs();
    remplirTypes();
};


// ------------------------------
// Sauvegarde d’une intervention
// ------------------------------
document.getElementById("interventionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupère les interventions existantes
    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];

    // Crée une nouvelle intervention
    let nouvelleIntervention = {
        id: Date.now(), // ID unique
        numero: genererNumeroIntervention(), // <-- AUTOMATIQUE
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

    // Ajoute l’intervention
    interventions.push(nouvelleIntervention);

    // Sauvegarde dans LocalStorage
    localStorage.setItem("interventions", JSON.stringify(interventions));

    // Retour à la liste
    window.location.href = "index.html";
});
