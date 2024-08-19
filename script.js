
// Access the Images
let slideImages = document.querySelectorAll('.slides img');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');

let counter = 0;
let interval;

// Function to show the next slide
function slideNext() {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = (counter + 1) % slideImages.length;
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}

// Function to show the previous slide
function slidePrev() {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = (counter - 1 + slideImages.length) % slideImages.length;
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}

// Function to update the indicators
function indicators() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}

// Function to start the auto sliding
function autoSliding() {
    interval = setInterval(slideNext, 5000);
}

// Function to stop the auto sliding
function stopSliding() {
    clearInterval(interval);
}

// Event listeners for next and prev buttons
next.addEventListener('click', () => {
    stopSliding();
    slideNext();
    autoSliding();
});

prev.addEventListener('click', () => {
    stopSliding();
    slidePrev();
    autoSliding();
});

// Event listeners to stop and resume auto sliding on mouse over/out
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', stopSliding);
container.addEventListener('mouseout', autoSliding);

// Function to switch image based on indicator click
function switchImage(currentImage) {
    stopSliding();
    let imageId = parseInt(currentImage.getAttribute('attr'));
    if (imageId !== counter) {
        slideImages[counter].style.animation = imageId > counter ? 'next1 0.5s ease-in forwards' : 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = imageId > counter ? 'next2 0.5s ease-in forwards' : 'prev2 0.5s ease-in forwards';
        indicators();
    }
    autoSliding();
}

// Initialize the slideshow
autoSliding();

