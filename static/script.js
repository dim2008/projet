function ajouterLigne() {
    // Trouver le dernier <p> dans le body
    const body = document.body;
    const paragraphs = body.querySelectorAll('p');
    const lastP = paragraphs[paragraphs.length - 1];

    // Cloner la dernière ligne (avec checkbox et input)
    const newP = lastP.cloneNode(true);

    // Nettoyer la nouvelle ligne : décocher checkbox et vider input
    const checkbox = newP.querySelector('input[type="checkbox"]');
    const textInput = newP.querySelector('input[type="text"]');
    checkbox.checked = false;
    textInput.value = '';
    
    // Optionnel : changer l'id de la checkbox pour éviter doublons
    // Exemple : tache + (nombre de lignes + 1)
    checkbox.id = 'tache' + (paragraphs.length + 1);

    // Insérer la nouvelle ligne à la fin
    body.insertBefore(newP, body.querySelector('script'));
}

function supprimerLigne() {
    const body = document.body;
    const paragraphs = body.querySelectorAll('p');
    if (paragraphs.length > 1) {
        const lastP = paragraphs[paragraphs.length - 1];
        body.removeChild(lastP);
    } else {
        alert("Il doit rester au moins une tâche !");
    }
}

function setupCheckboxListeners() {
    document.body.addEventListener('change', function(event) {
        if(event.target && event.target.type === 'checkbox') {
            const checkbox = event.target;
            // Trouver l'input texte frère dans le même label
            const label = checkbox.parentElement;
            if (!label) return;

            const textInput = label.querySelector('input[type="text"]');
            if (!textInput) return;

            if (checkbox.checked) {
                textInput.style.textDecoration = 'line-through';
                textInput.style.color = '#888'; // optionnel : gris pour barré
            } else {
                textInput.style.textDecoration = 'none';
                textInput.style.color = '#fff'; // remettre couleur normale
            }
        }
    });
}

// Appeler au chargement de la page
setupCheckboxListeners();
