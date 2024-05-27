let shoppingCartList = document.getElementById("shopping-cart-list");
let shoppingCartTotalDiv = document.getElementById("shopping-cart-total");
let shoppingCartDiv = document.getElementById("shopping-cart");
let shoppingCartTotal=0;
let shoppingCartProductsIdCounter=0;
let shoppingCartCloseBtn = document.getElementById("shopping-cart__close-btn");
let shoppingCartOpenBtn = document.getElementById("nav-bar-right__cart-btn");

function removeFromShoppingCart(productShoppingCartId, productPrice){
    let productToRemove = document.getElementById(`${productShoppingCartId}`);
    productToRemove.remove();

    shoppingCartTotal=shoppingCartTotal-productPrice;
    shoppingCartTotalDiv.innerHTML=`Total: ${shoppingCartTotal.toFixed(2)}`;  
}


function addToShoppingCart(productId){
    let productToAdd = productsDataBase.find(
        function(product){
            return product.id == productId;
        }
    );
    shoppingCartProductsIdCounter++;
    shoppingCartList.innerHTML+=`
    <div class="shopping-cart__product" id="cart-product-${shoppingCartProductsIdCounter}">
        <p class="shopping-cart__product-id">Id: ${productToAdd.id}</p>
        <p class="shopping-cart__product-name">${productToAdd.name}</p>
        <p class="shopping-cart__product-price">${productToAdd.price}</p>
        <button class="shopping-cart__remove-btn" cart-id="cart-product-${shoppingCartProductsIdCounter}"
        product-price="${productToAdd.price}">
        <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
    `;
    shoppingCartTotal=shoppingCartTotal+productToAdd.price;
    shoppingCartTotalDiv.innerHTML=`Total: ${shoppingCartTotal.toFixed(2)}`;    

    let shoppingCartDeleteBtns = document.querySelectorAll(".shopping-cart__remove-btn");
    shoppingCartDeleteBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let productId = btn.getAttribute("cart-id");
      let productPrice = btn.getAttribute("product-price");
      console.log(productId, productPrice);
      removeFromShoppingCart(productId, productPrice);
    });
  });
}

function toggleShoppingCart(){
    shoppingCartDiv.classList.toggle("shopping-cart-active");
}

shoppingCartOpenBtn.addEventListener("click",
    function(){
        toggleShoppingCart();
    }
);
shoppingCartCloseBtn.addEventListener("click",
    function(){
        toggleShoppingCart();
    }
);