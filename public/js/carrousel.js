document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = "block"; // Muestra la diapositiva actual
        } else {
          slide.style.display = "none"; // Oculta las demás diapositivas
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
    // Configura los eventos de clic para los botones "Anterior" y "Siguiente"
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  
    // Configura el intervalo para cambiar de diapositiva cada 3 segundos
    setInterval(nextSlide, 3000);
  
    // Muestra la primera diapositiva al cargar la página
    showSlide(currentSlide);
  });