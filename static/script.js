function ajouterLigne() {
    const body = document.body;
    const paragraphs = body.querySelectorAll('p.tache');
    const lastP = paragraphs[paragraphs.length - 1];
    const newP = lastP.cloneNode(true);

    const checkbox = newP.querySelector('input[type="checkbox"]');
    const textInput = newP.querySelector('input[type="text"]');

    // Réinitialiser la checkbox décochée
    checkbox.checked = false;
    // Nettoyer le texte
    textInput.value = '';

    // Enlever le style barré
    textInput.style.textDecoration = 'none';
    textInput.style.color = '#000'; // ou couleur normale

    // Enlever la classe tache-fait si tu l'utilises
    newP.classList.remove('tache-fait');

    checkbox.id = 'tache' + (paragraphs.length + 1);

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
