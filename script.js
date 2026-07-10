const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${Math.min(entry.target.dataset.delay || 0, 400)}ms`;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 }
);

reveals.forEach((element, index) => {
  element.dataset.delay = String(index * 50);
  observer.observe(element);
});

