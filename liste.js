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
        `;

        tbody.appendChild(tr);
    });
};
