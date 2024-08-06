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


const products = [
    { id: 1, name: 'Black Shirt', price: 200, description: 'This is a black shirt.', imageUrl: '../img/1f.jpg', additionalImages: ['../img/1b.jpg', '../img/1f.jpg'] },
    { id: 2, name: 'White Shirt', price: 150, description: 'This is a white shirt.', imageUrl: '../img/2f.jpg', additionalImages: ['../img/2b.jpg', '../img/2f.jpg'] },
    { id: 3, name: 'White Shirt', price: 150, description: 'This is a white shirt.', imageUrl: '../img/3f.jpg', additionalImages: ['../img/3b.jpg', '../img/3f.jpg'] },
    { id: 4, name: 'White Shirt', price: 150, description: 'This is a white shirt.', imageUrl: '../img/4f.jpg', additionalImages: ['../img/4b.jpg', '../img/4f.jpg'] },
    // Add more products as needed
];

function viewProduct(productId) {
    // Store the product ID in localStorage
    localStorage.setItem('selectedProductId', productId);
    window.location.href = '/front-end/product/'; // Redirect to the product detail page
}