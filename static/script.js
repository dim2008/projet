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
            const label = checkbox.parentElement;
            if (!label) return;
            const textInput = label.querySelector('input[type="text"]');
            if (!textInput) return;

            if (checkbox.checked) {
                if (textInput.value.trim() === '') {
                    // Champ vide : on met le placeholder en rouge
                    textInput.style.color = 'red';
                    textInput.placeholder = 'Veuillez entrer une tâche !';
                    checkbox.checked = false; // Empêcher de cocher si vide

                    // Quand on tape, on remet le style normal et placeholder
                    textInput.addEventListener('input', function handler() {
                        if (textInput.value.trim() !== '') {
                            textInput.style.color = '';
                            textInput.placeholder = 'Entrez une tâche...';
                            textInput.removeEventListener('input', handler);
                        }
                    });
                } else {
                    // Champ rempli : barrer le texte
                    textInput.style.textDecoration = 'line-through';
                    textInput.style.color = '#888';
                }
            } else {
                // Décoché : enlever le barré et remettre couleur normale si ce n'est pas vide
                textInput.style.textDecoration = 'none';
                if (textInput.value.trim() !== '') {
                    textInput.style.color = '#fff';
                }
            }
        }
    });
}

setupCheckboxListeners();
