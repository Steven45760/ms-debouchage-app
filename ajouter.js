
console.log("AJOUTER.JS CHARGÉ");
document.getElementById("ajouterForm").addEventListener("submit", function(e){
    console.log("SUBMIT OK");


document.getElementById("ajouterForm").addEventListener("submit", function(e){
    e.preventDefault();

    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];

    let newId = interventions.length > 0 ? Math.max(...interventions.map(i => i.id)) + 1 : 1;

    const inter = {
        id: newId,
        numero: "INT-" + String(newId).padStart(3, "0"),
        chantier: document.getElementById("chantier").value,
        demandeur: document.getElementById("demandeur").value,
        type: document.getElementById("type").value,
        datePlanif: document.getElementById("datePlanif").value,
        ville: document.getElementById("ville").value,
        statut: "À planifier",
        observations: document.getElementById("observations").value,
        noteInterne: ""
    };

    interventions.push(inter);
    localStorage.setItem("interventions", JSON.stringify(interventions));

    let popup = document.getElementById("popupValidation");
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
        window.location.href = "index.html";
    }, 1200);
});
