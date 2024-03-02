document.addEventListener("DOMContentLoaded", function () {
  // Obtén los elementos relevantes del DOM
  const ratingButtons = document.querySelectorAll(".rating");
  const submitButton = document.querySelector(".submit");
  const secondCard = document.querySelector(".card-thanks");

  let selectedRating = 0;

  // Agrega un evento de clic a cada botón de calificación
  ratingButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      // Resalta la calificación seleccionada
      resetRatingButtons();
      selectedRating = index + 1;
      button.classList.add("bg-primary-orange", "text-white");
    });
  });

  // Agrega un evento de clic al botón de envío
  submitButton.addEventListener("click", function () {
    // Muestra el segundo card con la calificación seleccionada
    if (selectedRating > 0) {
      showSecondCard(selectedRating);
    } else {
      alert("Por favor, selecciona una calificación antes de enviar.");
    }
  });

  // Función para restablecer los estilos de los botones de calificación
  function resetRatingButtons() {
    ratingButtons.forEach((button) => {
      button.classList.remove("bg-primary-orange", "text-white");
    });
  }

  // Función para mostrar el segundo card con la calificación seleccionada
  function showSecondCard(rating) {
    // Oculta el primer card
    document.querySelector(".first-card").style.display = "none";
    // Muestra el segundo card con la calificación seleccionada
    secondCard.classList.remove("hidden");
    // Actualiza el mensaje con la calificación seleccionada
    document.querySelector(".text-info").innerText =
      "You selected " + rating + " out of 5";
  }
});
