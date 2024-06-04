import { productsDataBase } from "./data-base.js";
import { addToShoppingCart } from "./shopping-cart.js";

let productModal = document.querySelector(".product-modal");

function showProductModal() {
  productModal.classList.toggle("product-modal-active");
}

export function createProductModal(productId) {

  let productToShow = productsDataBase.find((product) => product.id == productId);

  productModal.innerHTML = `
    <div class="modal-content">
        <img src="${productToShow.imgSrc}" class="modal__img">
        <div class="modal-info-container">
            <h3 class="modal__title">${productToShow.name}</h3>
            <p class="modal__price">Precio: <span class="green-text">$${productToShow.price}</span></p>
            <p class="modal__units">Unidadades Disponibles: <span class="green-text">${productToShow.units}</span></p>
            <button class="modal__buy-btn animated-btn"><i class="fa-solid fa-cart-shopping"></i>Agregar</button>
            <button class="modal__close-btn animated-btn"> <i class="fa-solid fa-xmark"></i> </button>
        </div>
    </div>
    `;
  
  showProductModal();

  document.querySelector(".modal__buy-btn").addEventListener("click", () => addToShoppingCart(productToShow.id));

  document.querySelector(".modal__close-btn").addEventListener("click", () => showProductModal());

}
