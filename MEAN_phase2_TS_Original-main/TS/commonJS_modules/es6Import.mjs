// myModule.mjs
import fs from 'fs';
import http from 'http';

// Read a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Create an HTTP server that responds with the file's content
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data); // Serve the file's content as the response
  });

  // Listen on port 3000
  server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});
