# Sammy The Femboy Puppy's Landing Page

A static GitHub Pages-ready "About Me" website for a furry, VRChat, streaming, and community creator. It uses only HTML, CSS, and a small amount of vanilla JavaScript.

The current layout uses a full-screen VRChat/avatar scene, a floating glass bio terminal, a slide-out side menu, neon hypno fox accents, and portfolio sections for personal links, community links, Discord, Spotify, Twitch, art, story, boundaries, and schedule.

## Files

- `index.html` - portfolio sections, side menu links, Discord widgets, Spotify card, Google Calendar, and Twitch iframe
- `style.css` - dark neon scene layout, side drawer, responsive cards, glow effects, and animations
- `script.js` - current year, menu drawer, profile fallback, Discord/Lanyard presence, Discord widget JSON status, and reveal animations
- `assets/profile.jpg` - local profile image and hero scene background
- `assets/social/` - local footer social icons
- `README.md` - setup and deployment notes

## Customize

Open `index.html` and replace or adjust the profile details:

- `Sammy The Femboy Puppy`
- Bio text and Mello Zone wording
- `assets/profile.jpg`
- TikTok URL
- Twitch URL
- YouTube URL
- Discord invite URL
- Instagram/X/Facebook URLs
- GitHub URL
- Beacons and Linktree URLs
- Discord presence user ID
- VRChat group link
- Google Calendar embed and public iCalendar link
- Spotify profile and recently played image URL
- Footer icon links and files in `assets/social/`
- Email/contact link
- Keep Android Open banner query parameters near the top of `index.html`

Open `style.css` to customize:

- Accent colors in the `:root` section
- Background animation styles
- Profile/avatar scene background and presentation
- Card glow and hover effects
- Side menu and drawer spacing
- Social icon styling
- Keep Android Open banner blue/cyan override in the `android-banner-slot` section

## Keep Android Open Banner

The site includes the self-contained Keep Android Open countdown banner:

```html
<script src="https://keepandroidopen.org/banner.js?id=keep-android-open-banner&size=minimal&animation=off&hidebutton=off"></script>
```

The banner is inserted into `#keep-android-open-banner`, then recolored in `style.css` with the blue/cyan site theme. Change the query parameters in `index.html` if you want a different size, language, close button, link, or animation setting.

## Live Integrations

- Discord user ID: `1200276108474601534`.
- Lanyard presence uses `https://api.lanyard.rest/v1/users/1200276108474601534` when available and displays status, shared activity, and active Discord platforms.
- If Lanyard returns unavailable data, the page falls back to the public Discord user widget.
- Discord user embed uses `https://widgets.vendicated.dev/user?id=1200276108474601534`.
- Mello Zone server widget uses Discord server ID `1483048984745345099`.
- Server widget JSON endpoint: `https://discord.com/api/guilds/1483048984745345099/widget.json`.
- The page tries to read the public Discord widget JSON with vanilla JavaScript. If browser/CORS rules block it, the iframe widget still works.
- VRChat group link: `https://vrchat.com/home/group/grp_1741e680-d563-4c53-a784-b17af5954a54`.
- Public Google Calendar embed uses calendar ID `6d045b98b8597cf55bd5cb77a89142013ea29d64094ac925afd5aceca5329af9@group.calendar.google.com`.
- Only the public calendar/iCalendar link should be used in this static site. Do not publish private calendar feed URLs.
- Spotify profile link: `https://open.spotify.com/user/2z4kruowiuhpf3w0vvhmhdpoz`.
- Spotify recently played image: `https://spotify-recently-played-readme.vercel.app/api?user=2z4kruowiuhpf3w0vvhmhdpoz&count=5&width=500&unique=true`.
- Spotify user profiles do not currently work as direct Spotify embeds. Use an artist, album, playlist, track, show, or episode embed URL if you want an iframe.
- Do not put a Spotify client secret in this static site. GitHub Pages is frontend-only, so secrets would be visible to visitors. Use a backend or serverless function if you later want Spotify Web API data.

## Link References

This version uses public details from:

- `https://beacons.ai/akasammythepuppy`
- `https://linktr.ee/akasammythepuppy`

The layout is inspired by compact creator pages with a large character background, floating bio/link panel, rounded nav buttons, social tiles, and a creator hub feel.

## Twitch Embed

The Twitch iframe currently uses:

```text
https://player.twitch.tv/?channel=akasammythepuppy&parent=foulfoxhacks.github.io
```

The live page also includes `parent=akasammythepuppy.mellozone.site` for the custom domain. Replace `akasammythepuppy` with your Twitch channel name and replace the parent domains with the exact domains that host the site.

Twitch embeds require the `parent` parameter to match the site domain. This project is currently served through `https://akasammythepuppy.mellozone.site/`.

## Deploy To GitHub Pages

1. Create a GitHub repository named `akasammythepuppy.github.io` for a user site, or any repository name for a project site.
2. Add these files to the repository root.
3. Commit and push to GitHub.
4. In GitHub, open the repository settings.
5. Go to **Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the branch, usually `main`, and the root folder.
8. Save the settings.

GitHub Pages will publish the site after the first deployment finishes.

## Local Preview

You can open `index.html` directly in a browser. No package manager, install step, or build command is required.

---

© 2026 Nexium Development Group, LLC // Aleksandr Freyermuth. All Rights Reserved.
This repository is source-available for viewing purposes only.
No permission is granted to copy, modify, redistribute, or create derivative works without prior written authorization.
