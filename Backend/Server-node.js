const http = require("http");

const hostname = "127.0.0.1";
const port = 7000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello There!");
  } else if (req.url === "/Welcome") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Thanks for Visiting Here ! Hope You may have a good Time..");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is Listening at http://${hostname}:${port}`);
});
