const BASE_URL = "https://lab-13-sigma.vercel.app"; // Reemplaza con tu URL real

export default async function handler(req, res) {
  const urls = ["/", "/blog", "/contacto"]; // Añade más rutas según tus páginas

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
