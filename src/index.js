// Node's built-in HTTP library
const http = require("http");

// Recusively lists all files in a directory and its subdirectories
// https://www.npmjs.com/package/recursive-readdir
const recursive = require("recursive-readdir");

// Create an HTTP server
http
  .createServer((req, res) => {
    // Each time a request comes in to the server, recursively look through the
    // images directory
    recursive(`${__dirname}/images`, (err, files) => {
      // The `files` variable contains an array of filenames
      // We'll map over this array...
      const photos = files.map((file, i) => {
        return {
          // ...give each file an incremental id
          id: i,

          // And since recursive-readdir gives us the absolute path to each file
          // but we want the relative path, we can slice the beginning off of
          // each file path.
          filename: file.slice(__dirname.length)
        };
      });

      // Tell the client we are returning JSON
      res.writeHead(200, { "Content-Type": "application/json" });

      // Stringify the photos array and return it to the client
      res.end(JSON.stringify(photos));
    });
  })

  // Tell our server to listen on port 3000
  .listen(3000);
