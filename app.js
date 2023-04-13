const express = require('express');
const app = express();
const port = 8082;

app.use(express.static('public'));

app.get('/con_desempenho', (req, res) => {
    res.sendFile(__dirname + "/public/con_desempenho.htm")
});

app.get('/index', (req, res) => {
    res.sendFile(__dirname + "/public/index.htm")
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/con_desempenho.htm")
});

app.listen(port, () => {
    console.log(` 'Listen on the port: ', ${ port }`);
});