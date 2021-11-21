let fs = require("fs");

// create http server
require("http").createServer(async function (req, res) {
   // this function will parse the request <req> and response <res>
    let data;
    // get the pathname from req.url, e.g.
    // /calendar.css?aa=12 to /calendar.caa
    req.urlParsed = require("url").parse(req.url);
    console.log(req.urlParsed.pathname);
    // simple api to connect frontend to files
    let file = (
        // remove first "/"
        req.urlParsed.pathname.slice(1)
        // if nothing then use index.html
        || "index.html"
    );
    let fileExists = await new Promise(async function (resolve) {
        fs.exists(file, resolve)
    });
    if (fileExists) {
        data = await fs.promises.readFile(file);
        res.end(data);
        return;
    }
}).listen(8080, function () {
    console.log("server started on port 8080")
});
