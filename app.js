const express = require('express');
const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});

app.post('/contact', (req, res) => {
    console.log(req.query);
    res.send('ok');
})

app.listen(8080, () => {
    console.log('app started on port 8080');
});