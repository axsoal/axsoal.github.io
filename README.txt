# AXSOAL Website — Setup Guide

## Your Files
- index.html      → Home page
- interior.html   → Interior Design portfolio
- ugc.html        → UGC Content portfolio
- contact.html    → Contact page
- style.css       → All styling
- nav.js          → Mobile menu & animations
- images/         → Create this folder and add your photos here

---

## Step 1 — Add Your Photos

Create an `images/` folder inside this project.
In each HTML file, find the placeholder comments like:
  <!-- Replace with: <img src="images/project1.jpg" alt="..."> -->
Replace the entire <div class="p-card-img-placeholder">...</div> block with:
  <img src="images/your-photo.jpg" alt="Description">

---

## Step 2 — Set Up the Contact Form (Free)

1. Go to https://formspree.io and create a free account
2. Create a new form — Formspree gives you a form ID like "xpzgkdjw"
3. In contact.html, find:
     action="https://formspree.io/f/YOUR_FORM_ID"
   Replace YOUR_FORM_ID with your actual ID

---

## Step 3 — Publish to GitHub Pages

1. Create a free account at https://github.com if you don't have one
2. Click the "+" icon → "New repository"
3. Name it exactly: yourusername.github.io
   (replace "yourusername" with your actual GitHub username)
4. Set it to Public
5. Click "Create repository"
6. Upload all your files:
   - Click "uploading an existing file"
   - Drag ALL files (index.html, interior.html, ugc.html, contact.html, style.css, nav.js, images/)
   - Click "Commit changes"
7. Your site is now live at: https://yourusername.github.io

---

## Step 4 — Connect axsoal.com (GoDaddy → GitHub Pages)

### In GitHub:
1. Go to your repository → Settings → Pages
2. Under "Custom domain", type: www.axsoal.com
3. Click Save
4. GitHub will show you it's waiting for DNS

### In GoDaddy:
1. Log into GoDaddy → My Products → find axsoal.com → click DNS
2. Delete or update the existing A records and CNAME pointing to Squarespace

Add these 4 A records (for the apex domain axsoal.com):
   Type: A    Name: @    Value: 185.199.108.153    TTL: 600
   Type: A    Name: @    Value: 185.199.109.153    TTL: 600
   Type: A    Name: @    Value: 185.199.110.153    TTL: 600
   Type: A    Name: @    Value: 185.199.111.153    TTL: 600

Add this CNAME record (for www.axsoal.com):
   Type: CNAME    Name: www    Value: yourusername.github.io.    TTL: 600
   (replace yourusername with your actual GitHub username)

### Wait:
DNS changes take 15 minutes to 48 hours to fully propagate.
Once done, GitHub will automatically issue a free HTTPS certificate.

---

## Step 5 — Update Your Content

In each file, find and replace these placeholders:
- "Your Photo Here"        → Replace placeholder divs with <img> tags
- "Your City, State"       → Your actual location (contact.html)
- "hello@axsoal.com"       → Your real email (contact.html)
- "Project Name Here"      → Your actual project names
- "Brand Name"             → Real brands you've worked with
- Instagram/TikTok/Pinterest links → Your actual social URLs
- "50+" collaborations     → Your real stats (ugc.html)
- © 2026                   → Update year as needed
- [Your City] in story     → Your actual city (index.html)
