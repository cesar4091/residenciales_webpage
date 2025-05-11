document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animated");

  console.log(elements);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const animationClass = el.dataset.animate; 
        el.classList.add(animationClass);
        observer.unobserve(el); // Opcional: animación una sola vez
      }
    });
  });

  elements.forEach((el) => {
    observer.observe(el);
  });
});