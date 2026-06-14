// Lightweight polish only: no frameworks, no build tools, GitHub Pages ready.

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Profile image fallback:
// Replace the image path in index.html when you add your real avatar.
const profileImage = document.querySelector(".profile-image");
const profilePlaceholder = document.querySelector(".profile-placeholder");

function showProfilePlaceholder() {
  if (!profileImage || !profilePlaceholder) return;
  profileImage.hidden = true;
  profilePlaceholder.hidden = false;
}

if (profileImage && profilePlaceholder) {
  profileImage.addEventListener("error", showProfilePlaceholder);

  if (profileImage.complete && profileImage.naturalWidth === 0) {
    showProfilePlaceholder();
  }
}

const revealTargets = document.querySelectorAll(
  ".about, .projects, .socials, .featured, .live, .contact, .glow-card, .link-card"
);

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealTargets.forEach((target) => {
    target.classList.add("reveal");
    observer.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
