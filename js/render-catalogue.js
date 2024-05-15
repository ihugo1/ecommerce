let productsContainer = document.getElementById("products");
let productsDropdownMenu = document.getElementById("products-dropdown-menu");
let productsMenuBtn = document.getElementById("products-menu-btn");
let dropdownMenuOption = "0";

function renderCatalogue (products){
    let productToFilter;
    productsContainer.innerHTML="";
    dropdownMenuOption = productsDropdownMenu.value;
    if(dropdownMenuOption=="all"){
        productToFilter=products;
    }
    else{
        productToFilter=products.filter(
            function(product){
                return product.type==dropdownMenuOption;
            }
        );
    }
    let htmlToRender="";
    for(let product of productToFilter){
        htmlToRender+=`
        <div class="product">
            <img class="product__img" src="${product.imgSrc}">
            <div class="product-info-box">
                <p class="product__name">${product.name}</p>
                <p class="product__price">${product.price}</p>
                <p class="product__units">Disponibles: ${product.units}</p>
            </div>
            <div class="product-btns-box">
                <button class="product__add-cart-btn" title="Agregar al carrito">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
                <button class="product__show-info-btn" title="Información del producto">
                    <i class="fa-solid fa-info"></i>
                </button>
            </div>
        </div>
        `;
    }
    productsContainer.innerHTML=htmlToRender;
}

renderCatalogue(productsDataBase)

productsMenuBtn.addEventListener("click",
    function(){
        renderCatalogue(productsDataBase);
    }
);

