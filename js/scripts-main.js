import { toggleSideMenu } from "./side-nav.js";
import { getFeatured } from "./featured-products.js";
import { loadShoppingCart } from './shopping-cart.js';


document.addEventListener("DOMContentLoaded", () => { getFeatured(); });
document.addEventListener("DOMContentLoaded", () => { loadShoppingCart(); });
