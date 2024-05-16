let productsContainer = document.getElementById("products");
let productsDropdownMenu = document.getElementById("products-dropdown-menu");
let productsMenuBtn = document.getElementById("products-menu-btn");
let dropdownMenuOption = "all";

function renderCatalogue() {
  productsContainer.innerHTML = "";
  dropdownMenuOption = productsDropdownMenu.value;
  let productToFilter;
  if (dropdownMenuOption == "all") {
    productToFilter = productsDataBase;
  } else {
    productToFilter = productsDataBase.filter(function (product) {
      return product.type == dropdownMenuOption;
    });
  }

  for (product of productToFilter) {
    productsContainer.innerHTML += `
        <div class="product">
            <img class="product__img" src="${product.imgSrc}">
            <div class="product-info-box">
                <p class="product__name">${product.name}</p>
                <p class="product__price">${product.price}</p>
                <p class="product__units">Disponibles: ${product.units}</p>
            </div>
            <div class="product-btns-box">
                <button class="product__add-cart-btn" product-id="${product.id}">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
                <button class="product__show-info-btn" product-id="${product.id}">
                    <i class="fa-solid fa-info"></i>
                </button>
            </div>
        </div>
        `;
  }

  /*Shopping Cart Listeners*/
  let productAddCardBtns = document.querySelectorAll(".product__add-cart-btn");
  productAddCardBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let productId = btn.getAttribute("product-id");
      addToShoppingCart(productId);
    });
  });
}

renderCatalogue();

productsMenuBtn.addEventListener("click", function () {
  renderCatalogue();
});
