let compteur = 1;

function ajouterLigne() {
 const container = document.getElementById("container");

 const p = document.createElement("p");
 const label = document.createElement("label");
 const checkbox = document.createElement("input");
 checkbox.type = "checkbox";
 checkbox.id = "tache" + compteur;
 
 const input = document.createElement("input");
 input.type = "text";
 input.placeholder = "Entrez une tâche...";
 input.setAttribute("aria-describedby", "label");
 
 label.appendChild(checkbox);
 label.appendChild(input);
 p.appendChild(label);
 container.appendChild(p);
 
 compteur++;
}

function supprimerLigne() {
 const container = document.getElementById("container");
 if (container.lastElementChild) {
  container.removeChild(container.lastElementChild);
  compteur--;
 }
}
