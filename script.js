// Fade-in ao rolar a página
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-in').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
  observer.observe(el);
});
