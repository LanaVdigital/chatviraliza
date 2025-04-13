import fetch from 'node-fetch';

export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const browser = req.headers['user-agent'];
  const location = 'Desconhecida';
  const device = /mobile/i.test(browser) ? 'Mobile' : 'Desktop';

  const finalLink = 'https://chat.openai.com/g/gXXXXXX'; // Teu link aqui

  const payload = {
    ip,
    browser,
    location,
    device,
    link: finalLink
  };

  await fetch('https://script.google.com/macros/s/AKfycbz7.../exec', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  });

  res.writeHead(302, { Location: finalLink });
  res.end();
}
