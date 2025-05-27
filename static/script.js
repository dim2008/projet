 const checkbox = document.getElementById("tache1");
    const input = document.getElementById("texte1");

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        input.classList.add("input-barre");
      } else {
        input.classList.remove("input-barre");
      }
    });
