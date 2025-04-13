import fetch from 'node-fetch';

export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const browser = req.headers['user-agent'];
  const location = 'Desconhecida';
  const device = /mobile/i.test(browser) ? 'Mobile' : 'Desktop';

  const finalLink = 'https://chat.openai.com/g/gXXXXXX'; // https://chatviraliza.vercel.app


  const payload = {
    ip,
    browser,
    location,
    device,
    link: finalLink
  };

  await fetch('https://script.google.com/macros/s/AKfycbz7A5F-30tMTF0Y4eMPzAmFw7zeyy-pc_Q_l3qJKWbDLfl-qXo0aAzF_uo2Xw-P0D0B/exec', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  });

  res.writeHead(302, { Location: finalLink });
  res.end();
}
