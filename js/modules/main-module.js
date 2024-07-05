import { toggleSideMenu } from "../scripts/side-nav.js";
import { loadShoppingCart } from "../scripts/shopping-cart.js";
import { getFeatured } from "../scripts/featured-products.js";

document.addEventListener("DOMContentLoaded", () => getFeatured());
document.addEventListener("DOMContentLoaded", () => loadShoppingCart());

