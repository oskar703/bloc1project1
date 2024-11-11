const reservedProductCountElement = document.getElementById("reservedProductCount");
  const reservedTotalPriceElement = document.getElementById("reservedTotalPrice");

  // Récupérer des données depuis le localStorage
  const productCount = localStorage.getItem("productCount");
  const totalPrice = localStorage.getItem("totalPrice");

  reservedProductCountElement.textContent = productCount;
  reservedTotalPriceElement.textContent = `$${totalPrice}`;

  /*** BUTTON + SPINNER ***/
  const paymentButton = document.getElementById("paymentButton");
  const overlay = document.getElementById("overlay");
  const spinner = document.getElementById("spinner");
  const confirmationMessage = document.getElementById("confirmationMessage");

  // Fonction pour vérifier si tous les champs du formulaire sont remplis
  function areAllFieldsFilled() {
    // Récupérer tous les éléments d'entrée des deux formulaires
    const allInputs = document.querySelectorAll('.formPersonalInfo input, .formCreditCardInfo input');

    for (const input of allInputs) {
      // Voir si le champ est requis et s'il est vide (après avoir enlevé les espaces)
      if (input.required && input.value.trim() === '') {
        return false; // A required field is empty
      }
    }

    return true; // Tous les champs obligatoires sont remplis
  }

/*****     PAIEMENT & OVERLAY     *****/
  paymentButton.addEventListener("click", () => {
    if (areAllFieldsFilled()) {
      // Procéder à l'activation du bouton si tous les champs sont remplis
      overlay.style.display = "block";
      spinner.style.display = "block";

      setTimeout(() => {
        overlay.style.display = "none";
        spinner.style.display = "none";
        confirmationMessage.style.display = "block";
      }, 5000); // 5 seconds
    } else {
      // Afficher un message d'erreur si un champ obligatoire est vide
      alert("Veuillez remplir tous les champs obligatoires avant de payer.");
    }
  });