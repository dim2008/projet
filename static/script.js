// Fonction qui associe toutes les cases à leur input voisin
document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      // On prend l'input juste après la checkbox
      const input = checkbox.nextElementSibling;

      if (checkbox.checked) {
        input.classList.add("strike");
      } else {
        input.classList.remove("strike");
      }
    });
  });
});
