let shoppingCartList = document.getElementById("shopping-cart-list");
let shoppingCartTotalDiv = document.getElementById("shopping-cart-total");
let shoppingCartTotal=0;
let shoppingCartProductsIdCounter=0;

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
        <p class="shopping-cart__product-name">Nombre:  ${productToAdd.name}</p>
        <p class="shopping-cart__product-price">Precio:  ${productToAdd.price}</p>
        <button class="shopping-cart__remove-btn" cart-id="cart-product-${shoppingCartProductsIdCounter}"
        product-price="${productToAdd.price}">
            Eliminar
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
