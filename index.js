const http = require('http');
const path = require('path')
const Express = require('express');
const app = Express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

const port = process.env.PORT || 8000
const server = http.createServer(app);
server.listen(port, console.log('running'))