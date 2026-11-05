const http = require('node:http');
const { add } = require('./math.js');

const PORT = process.env.PORT || 3000;

const server =http.createServer((req,res) => {
    res.endd(`Hello machn! 2+ 3 = ${add(2,3)}\n`);
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});