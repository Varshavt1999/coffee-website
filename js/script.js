let navBar = document.querySelector(".navbar");
let menu = document.querySelector(".zmdi-menu");
menu.addEventListener("click",()=>{
    navBar.classList.toggle("active");
    cart.classList.remove("active");
    searchBar.classList.remove("active");
});

let cart = document.querySelector(".cart_item_conatiner");
let cartLogo = document.querySelector(".zmdi-shopping-cart");
cartLogo.addEventListener("click",()=>{
    cart.classList.toggle("active");
    navBar.classList.remove("active");
    searchBar.classList.remove("active");
});

let searchBar= document.querySelector(".search");
let searchLogo = document.querySelector(".zmdi-search");
searchLogo.addEventListener("click",()=>{
    searchBar.classList.toggle("active");
    navBar.classList.remove("active");
    cart.classList.remove("active");
});
window.onscroll = () =>{
    navBar.classList.remove("active");
    cart.classList.remove("active");
    searchBar.classList.remove("active");
}