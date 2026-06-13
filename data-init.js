console.log("DATA INIT CHARGÉ");

function initializeSampleData(forceReset = false) {
    const existing = JSON.parse(localStorage.getItem('interventions'));

    // Ne recrée les données que si elles sont absentes
    if (existing && existing.length > 0 && !forceReset) return;

    const sample = [
        { id: 1, numero: 'INT-001', chantier: 'Rue des Fleurs 12', demandeur: 'Dupont', type: 'Curage', datePlanif: '2026-06-20', ville: 'Orléans', statut: 'À planifier', observations: '', noteInterne: '' },
        { id: 2, numero: 'INT-002', chantier: 'Avenue Victor 3', demandeur: 'Martin', type: 'ITV', datePlanif: '2026-06-22', ville: 'Tours', statut: 'Planifié', observations: '', noteInterne: '' },
        { id: 3, numero: 'INT-003', chantier: 'Place du Marché', demandeur: 'Leroy', type: 'Curage + ITV', datePlanif: '2026-06-18', ville: 'Orléans', statut: 'En cours', observations: '', noteInterne: '' }
    ];

    localStorage.setItem('interventions', JSON.stringify(sample));
}

initializeSampleData(true);
