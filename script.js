// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const primaryNav = document.getElementById("primaryNav");

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu after a link is clicked (mobile)
  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Trigger the hero diagram animation once it scrolls into view
const heroDiagram = document.getElementById("heroDiagram");

if (heroDiagram && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroDiagram.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(heroDiagram);
} else if (heroDiagram) {
  // Fallback for browsers without IntersectionObserver support
  heroDiagram.classList.add("in-view");
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
