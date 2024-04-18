const https = require('https');
const http = require('http');

// function to scrap title and url
function fetchTimeStories(callback) {
    const TIME_URL = 'https://time.com/';

    https.get(TIME_URL, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            const latestStories = [];
            const stories = data.split('<li class="latest-stories__item"');

            for (let i = 1; i <= 6; i++) {
                const story = stories[i];

                // finding the start and ending index of the url
                const urlStartInd = story.indexOf('<a href="') + '<a href="'.length;
                const urlEndInd = story.indexOf('"', urlStartInd);
                const storyUrl = story.slice(urlStartInd, urlEndInd);

                // finding the start and ending index of the title
                const titleStartInd = story.indexOf('<h3 class="latest-stories__item-headline">') + '<h3 class="latest-stories__item-headline">'.length;
                const titleEndInd = story.indexOf('</h3>', titleStartInd);
                const title = story.slice(titleStartInd, titleEndInd).trim();

                latestStories.push({ title, url: 'https://time.com' + storyUrl });
            }

            callback(latestStories);
        });
    }).on('error', (err) => {
        console.error('Error fetching Time stories:', err);
        callback([]);
    });
}


// creating a server
const server = http.createServer((req, res) => {
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

// listening to the server
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
