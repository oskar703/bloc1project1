/*****     INDEX.HTML: SELECCIONER & RESERVER     *****/
 let productCount = 0;
  let totalPrice = 0;

  const addProductButton = document.getElementById("addProduct");
  const productCountElement = document.getElementById("productCount");
  const totalPriceElement = document.getElementById("totalPrice");
  const buyButton = document.getElementById("buyButton");

    addProductButton.addEventListener("click", () => {
    productCount++;
    totalPrice += 10; // Remplacer 10 par le prix réel du produit

    productCountElement.textContent = `Nombre de billets: ${productCount}`;
    totalPriceElement.textContent = `Montant total: $${totalPrice.toFixed(2)}`;

    // Stocker des données dans le localStorage
    localStorage.setItem("productCount", productCount);
    localStorage.setItem("totalPrice", totalPrice);

    // Activer le bouton d'achat si le nombre de produits est supérieur à 0
    buyButton.disabled = productCount === 0;
    });

    buyButton.addEventListener("click", () => {
    if (productCount > 0) {
      window.location.href = "reservation.html";
    } else {
      alert("Veuillez sélectionner au moins un produit avant de continuer.");
    }
  });

