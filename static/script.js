const checkbox = document.getElementById("tache1");
    const inputText = document.getElementById("texte1");

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        inputText.classList.add("barre");
      } else {
        inputText.classList.remove("barre");
      }
    });
