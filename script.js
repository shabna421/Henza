// ======================
// Auto Slideshow
// ======================

let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide() {

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");

}

setInterval(showSlide,3000);


// ======================
// Unlimited Gallery
// ======================

const gallery = document.getElementById("galleryGrid");

const totalPhotos = 10; // Change this number anytime

for(let i=1;i<=totalPhotos;i++){

    const img = document.createElement("img");

    img.src = `photo${i}.jpg`;

    img.alt = `Photo ${i}`;

    gallery.appendChild(img);

    }
