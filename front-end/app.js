function aLl(){
    document.getElementById("men").style.display = "block";
    document.getElementById("women").style.display = "block";
    document.getElementById("girl").style.display = "block";
    document.getElementById("boy").style.display = "block";
}
function mEn(){
    document.getElementById("men").style.display = "block";
    document.getElementById("women").style.display = "block";
    document.getElementById("girl").style.display = "block";
    document.getElementById("boy").style.display = "block";


    document.getElementById("women").style.display = "none";
    document.getElementById("boy").style.display = "none";
    document.getElementById("girl").style.display = "none";
}
function woMen(){
    document.getElementById("men").style.display = "block";
    document.getElementById("women").style.display = "block";
    document.getElementById("girl").style.display = "block";
    document.getElementById("boy").style.display = "block";


    document.getElementById("men").style.display = "none";
    document.getElementById("boy").style.display = "none";
    document.getElementById("girl").style.display = "none";
}

function bOy(){
    document.getElementById("men").style.display = "block";
    document.getElementById("women").style.display = "block";
    document.getElementById("girl").style.display = "block";
    document.getElementById("boy").style.display = "block";


    document.getElementById("women").style.display = "none";
    document.getElementById("men").style.display = "none";
    document.getElementById("girl").style.display = "none";
}

function gIrl(){
    document.getElementById("men").style.display = "block";
    document.getElementById("women").style.display = "block";
    document.getElementById("girl").style.display = "block";
    document.getElementById("boy").style.display = "block";


    document.getElementById("women").style.display = "none";
    document.getElementById("boy").style.display = "none";
    document.getElementById("men").style.display = "none";
}


document.addEventListener('DOMContentLoaded', () => {
    const itemCountElement = document.getElementById('item-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];


        itemCountElement.textContent = cart.length;

});




let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

showSlides();




function viewProduct(productId) {
    // Store the product ID in localStorage
    localStorage.setItem('selectedProductId', productId);
    window.location.href = '/front-end/product/'; // Redirect to the product detail page
}