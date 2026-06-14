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

const discordStats = document.querySelector("[data-discord-stats]");
if (discordStats) {
  fetch("https://discord.com/api/guilds/1483048984745345099/widget.json")
    .then((response) => {
      if (!response.ok) throw new Error("Discord widget request failed");
      return response.json();
    })
    .then((data) => {
      const online = Number(data.presence_count || 0);
      const memberPreview = Array.isArray(data.members) ? data.members.length : 0;
      discordStats.textContent = `${data.name || "Mello Zone"}: ${online} online now, ${memberPreview} members visible in the widget.`;
    })
    .catch(() => {
      discordStats.textContent = "Live status is available in the Discord server widget below.";
    });
}

const revealTargets = document.querySelectorAll(
  ".card, .social-links a"
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
