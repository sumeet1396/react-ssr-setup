const express = require('express');
const dotenv = require('dotenv');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./Client/Page/Home').default;
const app = express();

dotenv.config({ path: './.env' });

const port = process.env.PORT;

app.get("/", (req, res) => {
    const content = renderToString(<Home />);
    res.send(content);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
