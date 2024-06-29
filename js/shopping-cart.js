import { productsDataBase } from "./data-base.js";

let shoppingCartList = document.getElementById("shopping-cart-list");
let shoppingCartTotalDiv = document.getElementById("shopping-cart-total");
let shoppingCartDiv = document.getElementById("shopping-cart");
let shoppingCartCloseBtn = document.getElementById("shopping-cart__close-btn");
let shoppingCartOpenBtn = document.getElementById("nav-bar__open-cart-btn");
let shoppingCartClearBtn = document.getElementById("shopping-cart__clear-btn");
let shoppingCartBuyBtn = document.getElementById("shopping-cart__buy-btn");

let shoppingCartProductsIdCounter;
let shoppingCart = [];
let shoppingCartTotal;

/************************************************************************************************************************/

function updateShoppingCart() {
  shoppingCartProductsIdCounter = 0;
  shoppingCartTotal=0;
  shoppingCartList.innerHTML = "";

  for (let product of shoppingCart) {
    product.cartId = shoppingCartProductsIdCounter;
    shoppingCartList.innerHTML += `
      <div class="shopping-cart__product">
        <p class="shopping-cart__product-id">Id: ${product.id}</p>
        <p class="shopping-cart__product-name">${product.name}</p>
        <p class="shopping-cart__product-price">$ ${product.price}</p>
        <button class="shopping-cart__remove-btn animated-btn" productCartId="${product.cartId}"> 
          <i class="fa-solid fa-xmark"></i> 
        </button> 
      </div>
    `;
    shoppingCartTotal=shoppingCartTotal+product.price;
    shoppingCartProductsIdCounter++;
  }

  shoppingCartTotalDiv.innerHTML=`Total: ${shoppingCartTotal.toFixed(2)}`;

  let shoppingCartDeleteBtns = document.querySelectorAll(".shopping-cart__remove-btn");

  shoppingCartDeleteBtns.forEach(
    (btn) => btn.addEventListener("click", () => removeFromShoppingCart(btn.getAttribute("productCartId")))
  );

  // Guardar el carrito en localStorage
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  localStorage.setItem("shoppingCartTotal", shoppingCartTotal.toString());
}

/************************************************************************************************************************/

export function addToShoppingCart(productId) {
  let productToAdd = Object.assign({}, productsDataBase.find((product) => product.id == productId));
  shoppingCart.push(productToAdd);
  shoppingCartTotal+=productToAdd.price;
  updateShoppingCart();
  alert(`Se agregó ${productToAdd.name} al carrito.`);
}

/************************************************************************************************************************/

export function removeFromShoppingCart(productCardId) {
  shoppingCart = shoppingCart.filter((product) => product.cartId !== parseInt(productCardId));
  updateShoppingCart();
}

/************************************************************************************************************************/

function buyShoppingCart (){
  let productToBuy;
  for(let productInCart of shoppingCart){
    productToBuy = productsDataBase.find((product) => productInCart.id == product.id);
    if(productToBuy.units>0){
      productToBuy.units = productToBuy.units - 1;
      removeFromShoppingCart(productInCart.cartId);
    }
    else{
      alert(`No se pudo comprar debido a unidades agotadas: ${productToBuy.name}`);
    }
  }
}

/************************************************************************************************************************/

function clearShoppingCart () {
  shoppingCart=[];
  updateShoppingCart();
}

/****************************************************EVENT-LISTENERS***************************************************/

function toggleShoppingCart() {
  shoppingCartDiv.classList.toggle("shopping-cart-active");
}

shoppingCartOpenBtn.addEventListener("click", () => toggleShoppingCart());
shoppingCartCloseBtn.addEventListener("click", () => toggleShoppingCart());
shoppingCartClearBtn.addEventListener("click", () => clearShoppingCart());
shoppingCartBuyBtn.addEventListener("click", () => buyShoppingCart());

/************************************************************************************************************************/

export function loadShoppingCart() {
  const savedCart = localStorage.getItem("shoppingCart");
  const savedTotal = localStorage.getItem("shoppingCartTotal");

  if (savedCart) {
    shoppingCart = JSON.parse(savedCart);
  } else {
    shoppingCart = [];
  }

  if (savedTotal) {
    shoppingCartTotal = parseFloat(savedTotal);
  } else {
    shoppingCartTotal = 0;
  }

  updateShoppingCart();
}

