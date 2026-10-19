# Focus Zone Library — Images & Videos

All photos and videos for the website live in this folder. To replace any
photo, drop a new file with the **exact same filename** into the matching
folder — no code changes are needed. Missing files automatically show a
neutral placeholder on the site, never a broken image.

All path mappings are defined in `src/config/library-assets.ts`.

## Folders

| Folder | Used for |
|---|---|
| `branding/` | Logo and favicon |
| `hero/` | The large photo at the top of the homepage |
| `interior/` | Reading room, study desks and entrance photos |
| `facilities/` | Photos of specific facilities |
| `gallery/` | The six-photo "A look inside" gallery |
| `owner/` | Owner photo (currently unused) |
| `videos/` | Library tour / atmosphere videos (currently unused) |

## Which file controls which section

| Filename | Where it appears |
|---|---|
| `branding/logo.png` | Navigation bar (desktop + mobile). Transparent PNG recommended, height ~64px or more. |
| `branding/favicon.png` | Browser tab icon (square, 64×64 or 512×512). |
| `hero/hero-library.jpg` | Hero section, top of page. Portrait, 3:4 (e.g. 1200×1600). |
| `interior/reading-room-01.jpg` | "A space for focus" section. Landscape, 16:11. |
| `interior/study-desks.jpg` | Dark "Arrive / Focus / Stay" section. Portrait, 3:4. |
| `interior/entrance.jpg` | About section. Portrait, 4:5. |
| `gallery/gallery-01.jpg` … `gallery-06.jpg` | Gallery grid, in order. Mixed ratios are fine — each is cropped to fit its frame. |

## How to replace a photo

1. Export/resize your photo (see recommended sizes above).
2. Name it exactly like the file you want to replace (e.g. `hero-library.jpg`).
3. Upload it into the matching folder, overwriting the old file.
4. The website picks it up automatically.

## How to add more gallery images

1. Add `gallery-07.jpg` (etc.) to `gallery/`.
2. In `src/config/library-assets.ts`, add `gallery07: \`${base}/gallery/gallery-07.jpg\`` to the `gallery` group.
3. In `src/content/site.ts`, add an entry to the `gallery` array with `key: "gallery07"`.

## How to replace the logo

Overwrite `branding/logo.png` with your new logo (keep the filename).
Use a transparent PNG; the site never stretches or crops it.

## Videos

`videos/library-tour.mp4` and `videos/library-atmosphere.mp4` are reserved
for a future video section. Use MP4 (H.264), ideally under 20 MB.

## Supported formats

- Photos: JPG (preferred), PNG, WebP
- Logo/favicon: PNG (transparency supported)
- Videos: MP4
