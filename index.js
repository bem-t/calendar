let fs = require("fs");

// create http server
require("http").createServer(async function (req, res) {
   // this function will parse the request <req> and response <res>
    let data;
    // get the pathname from req.url, e.g.
    // /calendar.css?aa=12 to /calendar.caa
    req.urlParsed = require("url").parse(req.url);
    console.log(req.urlParsed.pathname);
    // simple server-api for file assets
    switch (req.urlParsed.pathname) {
    case "/":
        data = await fs.promises.readFile("index.html");
        res.end(data);
        return;
    // calendar.css api
    case "/calendar.css":
        data = await fs.promises.readFile("calendar.css");
        res.end(data);
        return;
    // bootstrap-responsive.css api
    case "/bootstrap-responsive.css":
        data = await fs.promises.readFile("bootstrap-responsive.css");
        res.end(data);
        return;
    case "/jquery.min.js":
        data = await fs.promises.readFile("jquery.min.js");
        res.end(data);
        return;
    case "/calendar.js":
        data = await fs.promises.readFile("calendar.js");
        res.end(data);
        return;
    case "/underscore-min.js":
        data = await fs.promises.readFile("underscore-min.js");
        res.end(data);
        return;
    default:
        res.statusCode = 404;
        res.end();
}
}).listen(8080, function () {
    console.log("server started on port 8080")
});
