[README.txt](https://github.com/user-attachments/files/24366780/README.txt)
# Rivana Website (English)

This site is a lightweight, fast, single-page company website built from your presentation content.
It includes a Careers section with an application form that supports CV upload.

## 1) Publish for free with GitHub Pages
1. Create a GitHub account (if you don't have one).
2. Create a new repository: `rivana-website`
3. Upload all files in this folder (index.html + /assets).
4. Go to **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: `main` / root
5. Your website will be live at a URL like:
   `https://<your-username>.github.io/rivana-website/`

## 2) Activate the Application Form (with file upload)
Static hosting cannot email you automatically. Use a free form backend that supports file uploads:
- Getform (recommended for file upload on free tier)
- Formspree (file upload may require a paid plan depending on settings)

Steps:
1. Create an account on your chosen service.
2. Create a new form endpoint URL.
3. Open `index.html`
4. Find:  <form action="ACTION_URL" ...
5. Replace `ACTION_URL` with your endpoint URL.
6. Commit & push — form submissions will start arriving to your email.

## 3) Next step: Arabic language
When you're ready, we can add:
- Language toggle (EN / AR)
- Full Arabic RTL layout
- Arabic translations for all sections

