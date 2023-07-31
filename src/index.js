import express from 'express';
import dotenv from 'dotenv';
import React from 'react'; 
import { renderToString } from 'react-dom/server';
import Home from './Client/Page/Home';

const app = express();

dotenv.config({ path: './.env' });

const port = process.env.PORT;

app.use(express.static('public'));
app.get("/", (req, res) => {
    const content = renderToString(<Home />);
    const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
    `;
    res.send(html);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
