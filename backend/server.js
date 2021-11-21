import express from 'express';
import data from './data.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is runnig!')
});

app.get('/api/products', (req, res) => {
    res.send(data.products)
});

app.listen(3000, () => {
    console.log('Server is runnig! at http://localhost:3000');
});