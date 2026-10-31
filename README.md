# Thiệp cưới online · Việt Hoàng & Tuyết Nhi

Static wedding invitation (HTML/CSS/JS, no build step) for GitHub Pages.
Opens with a sealed envelope → tap **Mở thiệp** → envelope opens, music starts, scroll through the invitation.

## Edit content
Everything lives in **`js/config.js`**: names, parents, events, photos, RSVP, gift box.

- **TP.HCM event**: fill `start`, `end`, `lunar`, `venue`, `address`, then set `tba: false`.
- **Photos**: copy into `assets/photos/` (JPG/WebP, ~1600px long edge, < 400 KB each), then list them in `photos.hero`, `photos.gallery`, `photos.thanks`.
- **Music**: replace `assets/music/song.mp3` (keep the name, or change `music` in config).

## Guest links
| Link | Shows |
|---|---|
| `…/?to=Hai em Ánh Mai & các cháu` | Personal name on envelope + invitation |
| `…/?to=…&e=hn` | Only the Hà Nội event |
| `…/?to=…&e=hcm` | Only the TP.HCM event |
| `…/?lang=en` | Opens in English (guests can also toggle VI/EN) |

Open **`make-link.html`** on your site to generate links (one by one or a whole list) and copy/share them.

## RSVP → Google Sheet (optional, free)
1. Create a Google Sheet → **Extensions → Apps Script**.
2. Replace the code with `rsvp/apps-script.gs` → **Save**.
3. **Deploy → New deployment → Web app**: *Execute as* **Me**, *Who has access* **Anyone** → Deploy → authorize.
4. Copy the Web app URL (`https://script.google.com/macros/s/…/exec`) into `rsvp.endpoint` in `js/config.js`.
The RSVP section appears automatically once the endpoint is set.

## Publish on GitHub Pages
```bash
git init && git add . && git commit -m "Wedding invitation"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```
GitHub → repo **Settings → Pages** → Source: *Deploy from a branch* → `main` / `(root)` → Save.
Site: `https://<user>.github.io/<repo>/`

After publishing, add a preview image for Zalo/Messenger: put `assets/photos/og.jpg` (1200×630) and set the `og:image` meta in `index.html` to its full URL.

## Preview locally
```bash
python3 -m http.server 8000
# open http://localhost:8000/?to=Test
# add &skip=1 to jump past the envelope while editing
```
