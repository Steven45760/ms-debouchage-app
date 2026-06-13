// Charger l'intervention à modifier
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];
    let inter = interventions.find(i => i.id === id);

    if (!inter) {
        alert("Intervention introuvable");
        window.location.href = "index.html";
        return;
    }

    // Remplir les champs du formulaire
    document.getElementById("id").value = inter.id;
    document.getElementById("numero").value = inter.numero || "";
    document.getElementById("chantier").value = inter.chantier || "";
    document.getElementById("demandeur").value = inter.demandeur || "";
    document.getElementById("type").value = inter.type || "";
    document.getElementById("datePlanif").value = inter.datePlanif || "";
    document.getElementById("ville").value = inter.ville || "";
    document.getElementById("statut").value = inter.statut || "À planifier";
    document.getElementById("observations").value = inter.observations || "";
    document.getElementById("noteInterne").value = inter.noteInterne || "";
};

// Sauvegarder les modifications
document.getElementById("modifierForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];

    let id = parseInt(document.getElementById("id").value);
    let index = interventions.findIndex(i => i.id === id);

    // Mise à jour de l'intervention
    interventions[index] = {
        id: id,
        numero: document.getElementById("numero").value,
        chantier: document.getElementById("chantier").value,
        demandeur: document.getElementById("demandeur").value,
        type: document.getElementById("type").value,
        datePlanif: document.getElementById("datePlanif").value,
        ville: document.getElementById("ville").value,
        statut: document.getElementById("statut").value,
        observations: document.getElementById("observations").value,
        noteInterne: document.getElementById("noteInterne").value
    };

    // Sauvegarde dans LocalStorage
    localStorage.setItem("interventions", JSON.stringify(interventions));

    // Animation de validation
    let popup = document.getElementById("popupValidation");
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
        window.location.href = "index.html";
    }, 1500);
});
