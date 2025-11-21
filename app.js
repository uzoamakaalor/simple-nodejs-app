const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>DevOps Demo App</title></head>
      <body style="font-family: Arial; text-align: center; padding: 50px;">
        <h1>Welcome to CI/CD Mastery Project!</h1>
        <p>This is a simple Node.js application deployed via Jenkins Pipeline</p>
        <p>Built by: Uzoamaka Ruth</p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
