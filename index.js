var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    const websiteUrl = "http://live.bazm.org:9002/live";
    fetch(websiteUrl).then((res) => {
        const statusCode = res.statusCode;
        res.write(statusCode);
    }).catch((err) => console.log(err));
    res.write('\nYo!');
    res.end();
}).listen(process.env.PORT || 3000);