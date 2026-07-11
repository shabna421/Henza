// ======================
// Auto Slideshow
// ======================

let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}

setInterval(showSlide, 3000);

// ======================
// Gallery
// ======================

const gallery = document.getElementById("galleryGrid");
const totalPhotos = 10;

for (let i = 1; i <= totalPhotos; i++) {
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

// Wait until gallery images are created
setTimeout(() => {
    const images = document.querySelectorAll("#galleryGrid img, .card img, .slide");

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });
}, 100);

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
