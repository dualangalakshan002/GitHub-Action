const http = require('node:http');
const { add } = require('./math.js');

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 'dev';

const server =http.createServer((req,res) => {
    res.end(`Ayubowan mchn  hhhhLK! 2+ 3 = ${add(2,3)}\nVersion: ${VERSION.slice(0,7)}\n`);
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}, version is ${VERSION}`);
});