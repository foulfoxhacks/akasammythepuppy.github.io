# Sammy The Femboy Puppy's Landing Page

A static GitHub Pages-ready “About Me” website for a furry, VRChat, streaming, and community creator. It uses only HTML, CSS, and a small amount of vanilla JavaScript.

## Files

- `index.html` - page content, sections, links, and Twitch iframe
- `style.css` - dark neon theme, responsive layout, glow effects, and animations
- `script.js` - current year, profile image fallback, and lightweight reveal animations
- `assets/profile.jpg` - local profile image
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
- Discord presence user ID if you want to replace the custom card with a live Lanyard widget
- Spotify artist, album, or playlist embed URL for the music card
- Footer icon links and files in `assets/social/`
- Email/contact link

## Live Integrations

- Discord user ID: `1200276108474601534`.
- Discord user embed uses `https://widgets.vendicated.dev/user?id=1200276108474601534`.
- Mello Zone server widget uses Discord server ID `1483048984745345099`.
- Server widget JSON endpoint: `https://discord.com/api/guilds/1483048984745345099/widget.json`.
- The page tries to read the public Discord widget JSON with vanilla JavaScript. If browser/CORS rules block it, the iframe widget still works.
- Spotify profile link: `https://open.spotify.com/user/2z4kruowiuhpf3w0vvhmhdpoz`.
- Spotify recently played image: `https://spotify-recently-played-readme.vercel.app/api?user=2z4kruowiuhpf3w0vvhmhdpoz&count=5&width=500&unique=true`.
- Spotify user profiles do not currently work as direct Spotify embeds. Use an artist, album, playlist, track, show, or episode embed URL if you want an iframe.
- Do not put a Spotify client secret in this static site. GitHub Pages is frontend-only, so secrets would be visible to visitors. Use a backend or serverless function if you later want Spotify Web API data.

Open `style.css` to customize:

- Accent colors in the `:root` section
- Background animation styles
- Profile/avatar presentation
- Card glow and hover effects

## Link References

This version uses public details from:

- `https://beacons.ai/akasammythepuppy`
- `https://linktr.ee/akasammythepuppy`

The layout is inspired by compact creator pages: a clean centered hero, rounded info cards, stacked links, social tiles, and a creator hub feel.

## Twitch Embed

The Twitch iframe currently uses:

```text
https://player.twitch.tv/?channel=akasammythepuppy&parent=foulfoxhacks.github.io
```

Replace `akasammythepuppy` with your Twitch channel name and replace `foulfoxhacks.github.io` with the exact GitHub Pages domain that will host the site.

Twitch embeds require the `parent` parameter to match the site domain. This project page is hosted at `https://foulfoxhacks.github.io/akasammythepuppy.github.io/`, so the parent is `foulfoxhacks.github.io`. If it is hosted under a custom domain later, use that custom domain instead.

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
