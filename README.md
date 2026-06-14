# Sammy The Femboy Puppy's Landing Page

A static GitHub Pages-ready “About Me” website for a furry, VRChat, streaming, and community creator. It uses only HTML, CSS, and a small amount of vanilla JavaScript.

## Files

- `index.html` - page content, sections, links, and Twitch iframe
- `style.css` - dark neon theme, responsive layout, glow effects, and animations
- `script.js` - current year, profile image fallback, and lightweight reveal animations
- `assets/profile.jpg` - local profile image
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
- Email/contact link

Open `style.css` to customize:

- Accent colors in the `:root` section
- Background animation styles
- Profile/avatar presentation
- Card glow and hover effects

## Link References

This version uses public details from:

- `https://beacons.ai/akasammythepuppy`
- `https://linktr.ee/akasammythepuppy`

The layout is inspired by compact link-in-bio pages: profile-first hero, large rounded link cards, social tiles, and a creator hub feel.

## Twitch Embed

The Twitch iframe currently uses:

```text
https://player.twitch.tv/?channel=akasammythepuppy&parent=akasammythepuppy.github.io
```

Replace `akasammythepuppy` with your Twitch channel name and replace `akasammythepuppy.github.io` with the exact GitHub Pages domain that will host the site.

Twitch embeds require the `parent` parameter to match the site domain. If your page is hosted at `https://akasammythepuppy.github.io`, use `parent=akasammythepuppy.github.io`. If it is hosted under a custom domain, use that custom domain instead.

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
