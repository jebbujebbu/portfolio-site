# Portfolio Website

A personal portfolio website built with Vite + React to showcase my projects, skills, and contact details.

## Features

- Fully responsive design for desktop and mobile
- Project gallery with clickable thumbnails linking to GitHub repositories
- Skills, education, certifications, and language sections
- Contact form powered by EmailJS for sending messages without a backend
- Smooth animations and hover effects

## Installation

1. Clone the repository:

```bash
git clone https://github.com/jebbujebbu/portfolio-site.git
cd portfolio-site
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and add your environment variables (replace the placeholder values with your own keys):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_CONTACT_EMAIL=your_contact_email_here
VITE_LINKEDIN_URL=your_linkedin_url_here
VITE_LOCATION=your_location_here
```

4. Run the development server:

```bash
npm run dev
```

## Usage

Open the development server URL shown in your terminal (default: http://localhost:5173) to preview the portfolio locally.

When hosted online, visitors can:
- Browse showcased projects
- View detailed skills and experience
- Contact you directly via the integrated form

## Project Structure

- `/src/components` — All React components, each in its own folder with related JSX and CSS files.
- `/src/assets` — Images, icons, and other static files.
- `/src/assets/portfolio_data.js` — Contains data for portfolio projects, including images and GitHub links. Feel free to add, remove, or edit projects.
- `.env` — Environment variables for EmailJS (excluded from Git via `.gitignore`).

## Deployment

You can host this portfolio using:
- Netlify (recommended for easiest Vite deployment)
- GitHub Pages (requires additional configuration, such as setting the `base` path in `vite.config.js`, to work properly with Vite)

For Netlify:
- Push the repository to GitHub
- Import your repository into Netlify
- Set the build command to `npm run build` and the publish directory to `dist/`
- Add `.env` variables in Netlify’s project settings

## About the Creator

I'm an IT Engineering student passionate about software development, web technologies, and building practical projects.

This project is part of my portfolio, demonstrating skills in React, responsive design, and third-party API integration.

Feel free to connect or provide feedback!

*Created by Jenni Mikkonen*
