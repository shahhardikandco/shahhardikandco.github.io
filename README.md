# Shah Hardik And Co. — Website

A static website (plain HTML, CSS and JavaScript) for **Shah Hardik And Co., Chartered Accountants**.
No database, no backend, no paid service and no build step. It runs on free static hosting.

---

## 1. What is in this folder

```
index.html                 The website (all sections: Home, About, US Accounting, Process, GST, Virtual CFO, Other Services, Contact)
404.html                   "Page not found" page
robots.txt                 Allows search engines to index the site
favicon.ico                Browser tab icon (CA India logo)
.nojekyll                  Tells GitHub Pages to serve files as-is
assets/css/styles.css      All styling (colours and fonts are set at the top in :root)
assets/js/main.js          Mobile menu, scroll highlighting, enquiry form
assets/fonts/              Inter and Source Serif 4 (free, open-source; licences included)
assets/img/                CA India logo (from the firm profile), app icons, social-sharing image (og-image.jpg)
```

Everything is self-contained. The site does not load anything from Google Fonts, analytics or any third-party script.

## 2. How the enquiry form works (free, no backend)

The form doesn't send data to a server. When a visitor clicks:

- **Send via WhatsApp:** WhatsApp opens with the enquiry pre-filled, addressed to +91 90760 08063. The visitor presses Send.
- **Send via Email:** the visitor's email app opens with a pre-filled message to shahhardikandco@gmail.com.

Nothing is stored on the website. **Limitation:** the visitor must have WhatsApp or an email app set up. If they don't, the call, email and WhatsApp buttons and the details above the form are always there.

---

## 3. Publish free on GitHub Pages (recommended)

**Cost:** ₹0. GitHub Free includes Pages for **public** repositories. No credit card is needed.

1. Create a free account at https://github.com (e.g. username `shahhardikandco`).
2. Click **+ → New repository**.
   - Name it **`<your-username>.github.io`** (e.g. `shahhardikandco.github.io`). This gives the cleanest web address.
   - Set it to **Public** and click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Unzip the website folder on your computer. Drag **all its contents** (index.html, 404.html, robots.txt, .nojekyll, README.md and the `assets` folder) into the upload box.
   *Tip:* `.nojekyll` is a hidden file. On Mac press Cmd+Shift+. in Finder to show it; on Windows tick **View → Hidden items**. The site still works without it.
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under *Build and deployment*, choose **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**, then **Save**.
7. Wait 1–3 minutes. Your site will be live at **https://`<your-username>`.github.io/**
8. Tick **Enforce HTTPS** on the same page if it isn't already on.

> If you name the repository something else (e.g. `website`), the address becomes `https://<username>.github.io/website/`. The site works the same.

### GitHub Pages limitations (free plan)
- The repository must be **public**, so anyone can view the website's source code. That's normal for a brochure website, but never upload client files or private documents to it.
- Published site limit: 1 GB. Soft bandwidth limit: about 100 GB per month. That's far more than a firm website needs.
- Static files only: no server-side code or database (this site needs neither).
- The web address contains `github.io` until you add your own domain (optional, later).
- Not intended for e-commerce or sensitive transactions.

---

## 4. Alternative: Cloudflare Pages (also free)

**Cost:** ₹0 on the Free plan. No credit card is needed for Pages.

1. Create a free account at https://dash.cloudflare.com/sign-up
2. In the dashboard, open **Workers & Pages → Create → Pages → Upload assets** (Direct Upload).
3. Name the project, e.g. `shahhardikandco`. This becomes `https://shahhardikandco.pages.dev`.
4. Drag in the **unzipped website folder** (or the zip file) and click **Deploy site**.
5. The site is live within a minute at `https://<project-name>.pages.dev`.

### Cloudflare Pages limitations (free plan)
- Generous limits: unlimited bandwidth and requests for static files, up to 20,000 files per site and 25 MB per file.
- 500 deployments per month (you'll use only a handful).
- Direct-upload projects are updated by uploading the folder again (see §5). They can't later be switched to automatic Git deployment.
- The web address contains `pages.dev` until you add your own domain (optional).

*Cloudflare sometimes reorganises its dashboard menus. If the wording differs, look for "Pages" and "Direct Upload".*

---

## 5. Updating the website later

### Change text
1. Open `index.html` in any text editor (Notepad, TextEdit in plain-text mode, or the free VS Code).
2. Use Find (Ctrl/Cmd+F) to locate the sentence and edit it. Each section is labelled with a comment such as `<!-- ================= GST ================= -->`.
3. Save the file and re-publish (below).

### Change phone number or email
- Update every occurrence in `index.html`. Search for `9076008063` and `shahhardikandco@gmail.com`.
- Also update the two settings at the top of `assets/js/main.js` (`WHATSAPP_NUMBER`, `EMAIL_ADDRESS`).

### Change colours
At the top of `assets/css/styles.css`, edit `--navy-800` (primary), `--orange-500` (accent) and the related values.

### Logo
The header and footer show the CA India logo exactly as it appears in the firm profile: `assets/img/ca-india-logo.png`, unaltered, on a white background. To use a newer official version, replace that file with one of the same name.

### Re-publish
- **GitHub Pages:** open the repository → click the file (e.g. `index.html`) → pencil icon → edit → **Commit changes**. Or use **Add file → Upload files** to replace files. The site updates in 1–3 minutes.
- **Cloudflare Pages:** open the project → **Create new deployment** → upload the updated folder.

### After the first publish (recommended, 2 minutes)
Social-sharing previews (WhatsApp, LinkedIn) need a full web address for the preview image. In `index.html`, replace both
`./assets/img/og-image.jpg` with `https://YOUR-SITE-ADDRESS/assets/img/og-image.jpg`.
You can also add `<link rel="canonical" href="https://YOUR-SITE-ADDRESS/">` in the `<head>`.

---

## 6. Confirmation: no monthly cost

| Item | Cost |
|---|---|
| Website code, fonts, icons, images | Free (written for this site; fonts under the SIL Open Font License) |
| Hosting on GitHub Pages **or** Cloudflare Pages (free plan) | ₹0 per month |
| HTTPS certificate | Included free |
| Enquiry form (WhatsApp / email hand-off) | ₹0, no form service used |
| Domain | Not required (`github.io` / `pages.dev` address used) |

No subscription, plugin, paid template or paid API is used. A custom domain (e.g. `shahhardikandco.in`) is optional and would be the only paid item if you ever choose to add one.

---

## 7. Content to review before publishing (ICAI professional ethics)

ICAI's revised **Code of Ethics (13th edition), effective 1 April 2026**, updated the Advertisement and Website Guidelines. Please review the website against the current guidelines on the ICAI / Ethical Standards Board website before going live. Points to check:

1. **Fee wording:** "Transparent fee structure", "Fixed Monthly Package" and "a defined scope for a fixed monthly fee". Confirm that fee-related statements are permitted in this form.
2. **Descriptive claims** (taken from the firm profile): "Prompt response… queries answered quickly", "Engagement-level NDAs", "India–US time-zone advantage", "Dedicated Accountant: a full-time resource working only on your books". Keep them only if they are factual and capable of substantiation; none compares the firm with others.
3. **"Other professional services"** now uses the exact service lists from page 7 of the firm profile. One item to confirm: "Incorporation in the USA, Singapore, UAE, Canada and Australia". If this is done through overseas associates, consider saying so.
4. **"Representation before GST authorities up to GSTAT".** Confirm this matches current practice.
5. **"US GAAP-aligned" and the illustrative "Monthly close package" graphic.** The graphic is labelled "Illustrative example" and contains no client data or figures.
6. **US services positioning.** The site states that the firm doesn't prepare or file US tax returns and isn't a US CPA firm. If you serve US CPA firms that share tax-return information, they may need their clients' consent under US rules (IRC §7216) before sharing data offshore. That's their obligation, but worth knowing during onboarding.
7. **Logo.** The site uses the CA India logo exactly as it appears in the firm profile, unaltered. An earlier draft used an "SH" monogram. It was removed because ICAI's website guidelines prohibit writing the firm name in a manner amounting to a logo or monogram. Confirm the CA India logo use complies with ICAI's current CA Logo Guidelines (official colours, white background, no modification).
8. **Disclaimer** in the footer: review the wording.
9. **Any intimation or registration requirements** for member websites under the current guidelines.

This list is a prompt for your own review, not legal or ethical advice.

---

## 8. Testing performed

- Checked in headless Chrome at 360 px and 390 px (phones), 768 px (tablet) and 1440 px (desktop): no horizontal scrolling and no console errors.
- All in-page navigation links, icons and assets resolve (no 404s).
- The mobile menu opens, closes on selection and closes with the Escape key.
- Form validation shows clear errors. The WhatsApp and email buttons compose the message correctly.
- Respects "reduce motion" settings, has keyboard focus styles, uses semantic headings, and includes a skip-to-content link.
- Total page weight is roughly 250 KB including fonts.
