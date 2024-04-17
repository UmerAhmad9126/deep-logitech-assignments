const http = require('http');



function scrapTimeStoriesData(cb) {

    http.get('http://time.com', (res) => {

        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const stories = [];
            console.log('data:', data);

        });
    }).on('error', (err) => {
        console.error('Error fetching Time stories:', err);
        callback([]);
    });
}



const server = http.createServer((req, res) => {
    if (req.url === '/getTimeStories') {
        scrapTimeStoriesData((stories) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(stories));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
