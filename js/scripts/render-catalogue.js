import { productsDataBase } from "../database/data-base.js";
import { addToShoppingCart } from "./shopping-cart.js";
import { createProductModal } from "./product-modals.js";

let $productsContainer = document.getElementById("products");
let $productsDropdownMenu = document.getElementById("products-dropdown-menu");
let $productsMenuBtn = document.getElementById("products-menu-btn");
let dropMenuOption = "all";

export function renderCatalogue() {

  $productsContainer.innerHTML = "";
  dropMenuOption = $productsDropdownMenu.value;
  let productsToFilter;

  if (dropMenuOption == "all") {
    productsToFilter = productsDataBase;
  } else {
    productsToFilter = productsDataBase.filter((product) => product.type == dropMenuOption);
  }

  for (let product of productsToFilter) {
    $productsContainer.innerHTML += `
      <div class="product">
          <img class="product__img" src="${product.imgSrc}">
          <div class="product-info-box">
              <p class="product__name">${product.name}</p>
              <p class="product__price"><span class="green-text">${product.price}<span></p>
              <p class="product__units">Disponibles: ${product.units}</p>
          </div>
          <div class="product-btns-box">
              <button class="product__add-cart-btn animated-btn" product-id="${product.id}">
                  <i class="fa-solid fa-cart-shopping"></i>
              </button>
              <button class="product__show-info-btn animated-btn" product-id="${product.id}">
                  <i class="fa-solid fa-info"></i>
              </button>
          </div>
      </div>
    `;
  }

  document.querySelectorAll(".product__add-cart-btn").forEach(
    (btn) => btn.addEventListener("click", () => addToShoppingCart(btn.getAttribute("product-id")))
  );
  document.querySelectorAll(".product__show-info-btn").forEach(
    (btn) => btn.addEventListener("click", () =>  {
        createProductModal(btn.getAttribute("product-id"));
        document.body.classList.add("body-overlay");
      }
    )
  );
  
}

$productsMenuBtn.addEventListener("click", () => renderCatalogue());
