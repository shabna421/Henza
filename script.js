alert("Script Loaded");
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
// ======================
// Lightbox
// ======================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.addEventListener("click", function(e){

    if(e.target.tagName === "IMG" &&
       !e.target.classList.contains("logo")){

        lightbox.style.display = "flex";
        lightboxImg.src = e.target.src;
    }

});

closeBtn.onclick = function(){
    lightbox.style.display = "none";
};

lightbox.onclick = function(e){
    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
};
