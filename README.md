# Kulturang Pinoy! 🇵🇭

A static tourism website made for a school project, highlighting the beautiful places and rich culture of the Philippines. Content is written in a mix of Filipino and English.

## Features

- **Landing page** with a background slideshow of Philippine destinations (Palawan, Banaue, Vigan, Mayon, Sinulog, Bohol) that rotates every 7 seconds
- **Log in / Sign up** forms with client-side validation
- **Home page** on Filipino culture: hospitality, identity, languages, arts, bayanihan, food, family, and faith
- **About page** covering the project's mission and inspiration
- **Contact page** with a demo contact form
- **Partner Portal** login page (simulated)

## Project Structure

```
Static-Website-main/
├── .github/workflows/pages.yml   # GitHub Pages deployment
├── Verba_Lab8/                   # Website root (this is what gets deployed)
│   ├── index.html                # Landing page, login & sign up
│   ├── home.html                 # Main content page
│   ├── about.html                # About the project
│   ├── contact.html              # Contact form
│   ├── partner-login.html        # Partner portal login
│   ├── style.css                 # Landing/login styles
│   ├── style1.css                # Home page styles
│   ├── style-content.css         # Shared content page styles
│   ├── partner-style.css         # Partner portal styles
│   ├── scrpit.js                 # Slideshow, login/signup logic
│   ├── partner-script.js         # Partner login logic
│   └── images/                   # Photos and backgrounds
└── README.md
```

## Running Locally

No build step or dependencies are needed.

1. Clone or download this repository.
2. Open `Verba_Lab8/index.html` in your browser.

Optionally, serve it with a local server:

```bash
cd Verba_Lab8
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Demo Login

For testing purposes, the login uses hardcoded demo credentials:

| Username | Password |
|----------|----------|
| `erika`  | `kyle`   |

Sign up validation rules:
- **Username:** 3–15 characters (letters, numbers, underscore)
- **Password:** 6–10 characters, with at least 1 uppercase letter and 1 number

> ⚠️ **Note:** Authentication is front-end only and for demonstration. Do not use real credentials, as nothing is stored or sent to a server. The sign up and contact forms are also simulated.

## Deployment

The site is deployed automatically to **GitHub Pages** through GitHub Actions. Every push to the `main` branch publishes the contents of the `Verba_Lab8` folder. You can also trigger a deployment manually from the **Actions** tab.

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
- [Google Fonts](https://fonts.google.com/) (Lato, Merriweather)

## Credits

Created as a school project (Lab 8).
