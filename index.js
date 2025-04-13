const express = require('express');
const fetch = require('node-fetch');
const useragent = require('express-useragent');
const app = express();

app.use(useragent.express());

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const browser = req.useragent.browser;
  const location = 'Desconhecida';
  const device = req.useragent.isMobile ? 'Mobile' : 'Desktop';

  const finalLink = 'https://chat.openai.com/g/gXXXXXXX'; // <-- troca pelo link do teu chat viraliza

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

  res.redirect(finalLink);
});

app.listen(PORT, () => {
  console.log(`Chat Viraliza rodando na porta ${PORT}`);
});
