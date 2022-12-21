var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    const websiteUrl = "http://live.bazm.org:9002/live";
    http.get(websiteUrl, (r) => {
        const statusCode = r.statusCode;
        res.write("Status: " + statusCode);
    }).on("error", (error) => {
        res.write("500");
        res.sendStatus(500)
        console.log(error);
    });
    res.write('\nYo!');
    res.end();
}).listen(process.env.PORT || 3000);