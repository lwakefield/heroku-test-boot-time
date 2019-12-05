const http = require('http');
const { performance } = require('perf_hooks');

process.stdout.write(`Process started at: ${performance.timeOrigin}\n`);

const app = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('okay');

    if (req.url === '/kill') {
        process.stdout.write(`Killing at: ${performance.now() + performance.timeOrigin}\n`);
        process.exit(1);
    }
});

app.listen(process.env.PORT, '0.0.0.0', () => {
    process.stdout.write(`Started serving at: ${performance.now() + performance.timeOrigin}\n`);
});
