const https = require('https');


function fetchTimeStories(callback) {
    const TIME_URL = 'https://time.com/';

    https.get(TIME_URL, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            

            const latestStories = [];
            let storyCount = 0;


            const regex = /<li class="latest-stories__item">[\s\S]*?<a href="([^"]+)">[\s\S]*?<h3 class="latest-stories__item-headline">([\s\S]*?)<\/h3>/g;
            let match;

            while ((match = regex.exec(data)) !== null && storyCount < 6) {
                const storyUrl = match[1];
                const title = match[2].trim();
                latestStories.push({ title, url: 'https://time.com' + storyUrl });
                storyCount++;
            }


            callback(latestStories)

        });
    }).on('error', (err) => {
        console.error('Error fetching Time stories:', err);
        callback([]);
    });
}



const server = https.createServer((req, res) => {
    if (req.url === '/getTimeStories') {
        fetchTimeStories((stories) => {
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
