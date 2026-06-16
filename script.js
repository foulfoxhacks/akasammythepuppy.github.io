// Lightweight polish only: no frameworks, no build tools, GitHub Pages ready.

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
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

const menuToggle = document.querySelector(".menu-toggle");
const menuScrim = document.querySelector(".menu-scrim");
const menuLinks = document.querySelectorAll("[data-menu-link]");

function setMenuOpen(isOpen) {
  document.body.classList.toggle("menu-open", isOpen);
  if (menuToggle) {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  }
  if (menuScrim) {
    menuScrim.hidden = !isOpen;
  }
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    setMenuOpen(!document.body.classList.contains("menu-open"));
  });
}

if (menuScrim) {
  menuScrim.addEventListener("click", () => setMenuOpen(false));
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

const DISCORD_USER_ID = "1200276108474601534";
const lanyardCard = document.querySelector("[data-lanyard-card]");
const lanyardAvatar = document.querySelector("[data-lanyard-avatar]");
const lanyardName = document.querySelector("[data-lanyard-name]");
const lanyardStatus = document.querySelector("[data-lanyard-status]");
const lanyardActivity = document.querySelector("[data-lanyard-activity]");
const lanyardDevices = document.querySelector("[data-lanyard-devices]");

function setLanyardFallback() {
  if (!lanyardCard || !lanyardStatus || !lanyardActivity) return;
  lanyardStatus.textContent = "Widget fallback";
  lanyardStatus.className = "status-pill offline";
  lanyardActivity.textContent = "Lanyard is not returning active presence for this Discord ID yet. The embedded Discord widget below is still available.";
  if (lanyardDevices) {
    lanyardDevices.textContent = "Public widget fallback is active.";
  }
}

function titleCase(value) {
  if (!value) return "Offline";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function describeActivity(presence) {
  if (presence.spotify) {
    return `Listening to ${presence.spotify.song} by ${presence.spotify.artist}`;
  }

  const activity = (presence.activities || []).find((item) => item.type !== 4);
  if (!activity) {
    return "No shared activity right now.";
  }

  const types = ["Playing", "Streaming", "Listening to", "Watching", "Custom", "Competing in"];
  const label = types[activity.type] || "Active in";
  const details = [activity.name, activity.details, activity.state].filter(Boolean).join(" - ");
  return `${label} ${details}`;
}

function describeDevices(presence) {
  const devices = [
    presence.active_on_discord_web ? "web" : null,
    presence.active_on_discord_desktop ? "desktop" : null,
    presence.active_on_discord_mobile ? "mobile" : null,
    presence.active_on_discord_embedded ? "embedded" : null,
    presence.active_on_discord_vr ? "VR" : null
  ].filter(Boolean);

  if (!devices.length) {
    return "No active Discord platform is being shared right now.";
  }

  const deviceList = devices.length === 1
    ? devices[0]
    : `${devices.slice(0, -1).join(", ")} and ${devices[devices.length - 1]}`;

  return `Active on Discord ${deviceList}.`;
}

async function updateLanyardPresence() {
  if (!lanyardCard) return;

  try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`);
    if (!response.ok) throw new Error("Lanyard user unavailable");

    const payload = await response.json();
    if (!payload.success) throw new Error("Lanyard returned an error");

    const presence = payload.data;
    const user = presence.discord_user || {};
    const avatar = user.avatar
      ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
      : "assets/profile.jpg";

    if (lanyardAvatar) lanyardAvatar.src = avatar;
    if (lanyardName) lanyardName.textContent = user.global_name || user.username || "Sammy";
    if (lanyardStatus) {
      lanyardStatus.textContent = titleCase(presence.discord_status);
      lanyardStatus.className = `status-pill ${presence.discord_status || "offline"}`;
    }
    if (lanyardActivity) {
      lanyardActivity.textContent = describeActivity(presence);
    }
    if (lanyardDevices) {
      lanyardDevices.textContent = describeDevices(presence);
    }
  } catch (error) {
    setLanyardFallback();
  }
}

updateLanyardPresence();
setInterval(updateLanyardPresence, 30000);

const revealTargets = document.querySelectorAll(
  ".card, .social-links a, .portfolio-section"
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
