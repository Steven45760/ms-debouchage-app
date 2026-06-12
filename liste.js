window.onload = function() {
    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];
    let tbody = document.querySelector("#tableauInterventions tbody");

    interventions.forEach(inter => {
        let tr = document.createElement("tr");

 tr.innerHTML = `
    <td>${inter.numero}</td>
    <td>${inter.chantier}</td>
    <td>${inter.demandeur}</td>
    <td>${inter.type}</td>
    <td>${inter.datePlanif}</td>
    <td>${inter.ville}</td>
    <td>
       <button onclick="window.location.href='modifier.html?id=${inter.id}'">Modifier</button>
        <button onclick="supprimerIntervention(${inter.id})">Supprimer</button>
    </td>
`;
        function supprimerIntervention(id) {
    let interventions = JSON.parse(localStorage.getItem("interventions")) || [];

    // On filtre pour enlever l'intervention ciblée
    interventions = interventions.filter(inter => inter.id !== id);

    // On sauvegarde la nouvelle liste
    localStorage.setItem("interventions", JSON.stringify(interventions));

    // On recharge la page
    location.reload();
}
document.getElementById("recherche").addEventListener("input", function() {
    let filtre = this.value.toLowerCase();
    let lignes = document.querySelectorAll("#tableauInterventions tbody tr");

    lignes.forEach(ligne => {
        let texte = ligne.innerText.toLowerCase();
        ligne.style.display = texte.includes(filtre) ? "" : "none";
    });
});

