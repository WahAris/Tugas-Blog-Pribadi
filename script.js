//slider gambar

let currentSlide = 0;
showSlide(currentSlide);

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { currentSlide = 0; }
  if (n < 0) { currentSlide = slides.length - 1; }
  
  // Sembunyikan semua gambar
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Tampilkan gambar aktif
  slides[currentSlide].style.display = "block";
}

function changeSlide(n) {
  currentSlide += n;
  showSlide(currentSlide);
}

