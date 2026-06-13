// Initialise des données de test uniquement si aucune donnée n'existe
function initializeSampleData(forceReset = false) {
    const existing = JSON.parse(localStorage.getItem('interventions'));
    if (existing && !forceReset) return;

    const sample = [
        { id: 1, numero: 'INT-001', chantier: 'Rue des Fleurs 12', demandeur: 'Dupont', type: 'Débouchage', datePlanif: '2026-06-20', ville: 'Orléans', statut: 'À planifier', observations: 'Accès par cour', noteInterne: 'Prioritaire' },
        { id: 2, numero: 'INT-002', chantier: 'Avenue Victor 3', demandeur: 'Martin', type: 'Inspection', datePlanif: '2026-06-22', ville: 'Tours', statut: 'Planifié', observations: '', noteInterne: '' },
        { id: 3, numero: 'INT-003', chantier: 'Place du Marché', demandeur: 'Leroy', type: 'Réparation', datePlanif: '2026-06-18', ville: 'Orléans', statut: 'En cours', observations: 'Matériel sur site', noteInterne: '' },
        { id: 4, numero: 'INT-004', chantier: 'Impasse du Moulin', demandeur: 'Moreau', type: 'Nettoyage', datePlanif: '2026-06-10', ville: 'Blois', statut: 'Terminé', observations: 'OK', noteInterne: 'Facturer' }
    ];

    localStorage.setItem('interventions', JSON.stringify(sample));
}

// Exécuter uniquement si aucune donnée n'existe
initializeSampleData(false);
