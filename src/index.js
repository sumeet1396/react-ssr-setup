import express from 'express';
import dotenv from 'dotenv';
import rendere from './helpers/rendere';

const app = express();

dotenv.config({ path: './.env' });

const port = process.env.PORT;

app.use(express.static('public'));
app.get("/", (req, res) => {
    
    res.send(rendere());
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
