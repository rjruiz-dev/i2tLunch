document.addEventListener("DOMContentLoaded", () => {
  fetch("/src/views/layout/sidebar.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("sidebar-container").innerHTML = html;
    });

  fetch("/src/views/components/content/main-content.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("main-content").innerHTML = html;

      // Una vez que el main-content fue inyectado, cargar sus subcomponentes
      fetch("/src/views/components/content/header-section.html")
        .then((res) => res.text())
        .then((html) => {
          document.getElementById("header-section").innerHTML = html;
        });  

      fetch("/src/views/components/content/filter-section.html")
        .then((res) => res.text())
        .then((html) => {
          document.getElementById("filter-section").innerHTML = html;

          initCategoryCarousel();          

        });  

      fetch("/src/views/components/content/dishes-section.html")
        .then((res) => res.text())
        .then((html) => {
          document.getElementById("dishes-section").innerHTML = html;

          initHeartIcons();
        });  
    });

  fetch("/src/views/components/content/order-summary.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("order-summary").innerHTML = html;
    });
});

function initCategoryCarousel() {
  let scrollIndex = 0;

  const carousel = document.getElementById('categories-carousel');
  const scrollContainer = carousel.querySelector('div');
  const btnLeft = document.getElementById('scroll-left');
  const btnRight = document.getElementById('scroll-right');

  if (!carousel || !btnLeft || !btnRight || !scrollContainer) {
    console.warn("Carrusel no inicializado. Faltan elementos.");
    return;
  }

  function scrollCategories(direction) {
    const visibleWidth = carousel.offsetWidth;
    const totalWidth = scrollContainer.scrollWidth;
    const maxScroll = totalWidth - visibleWidth;
    const scrollStep = 150;

    scrollIndex += direction * scrollStep;
    if (scrollIndex < 0) scrollIndex = 0;
    if (scrollIndex > maxScroll) scrollIndex = maxScroll;

    scrollContainer.style.transform = `translateX(-${scrollIndex}px)`;
  }

  btnLeft.addEventListener('click', () => scrollCategories(-1));
  btnRight.addEventListener('click', () => scrollCategories(1));
}

function initHeartIcons() {
  document.querySelectorAll('.heart-icon i').forEach(icon => {
    icon.addEventListener('click', function () {
      this.classList.toggle('fa-regular');
      this.classList.toggle('fa-solid');
      this.classList.toggle('text-danger');
    });
  });
}
