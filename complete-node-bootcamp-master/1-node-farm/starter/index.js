// Blocking Code - Synchronous Code

const fs = require('fs')
const http = require('http')
const url = require('url')

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// // console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log(fileWritten);

// Non-blocking, asynchronous Code
// fs.readFile("./txt/start.txt", "utf-8", (error, data) => {
//   console.log(data);
// });

const server = http.createServer((req, res) => {
    const pathName = req.url

    if (pathName === '/overview' || pathName === '/') {
        res.writeHead(200, {
            'Content-type': 'text/html',
        })
        res.write('<h1>This ist the OVERVIEW</h1>')
        res.end()
    } else if (pathName === '/product') {
        res.writeHead(200, {
            'Content-type': 'text/html',
        })
        res.write('<h1>This is the PRODUCTPAGE</h1>')
        res.end()
    } else if (pathName === '/api') {
        fs.readFile(
            `${__dirname}/dev-data/data.json`,
            'utf-8',
            (error, data) => {
                const productData = JSON.parse(data)
                res.writeHead(200, { 'Content-type': 'application/json' })
                console.log(productData)
                res.end(data)
            },
        )
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
        })
        res.write('<h1>Page not found<br> Error 404</h1>')
        res.end()
    }

    console.log(req.url)
    // res.write("Hello from the Server!");
    // res.end();
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000')
})
