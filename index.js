import http from 'http';  // Import the HTTP module to create a server
import url from 'url';    // Import the URL module to parse URLs

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Parse the URL from the incoming request
  const parsedUrl = url.parse(req.url, true);

  // Set the content type for the response
  res.setHeader('Content-Type', 'text/html');

  // Handle the home page route ("/")
  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.end('<h1>Welcome to the Home Page!</h1>');
  }
  // Handle the about page route ("/about")
  else if (parsedUrl.pathname === '/about') {
    res.statusCode = 200;
    res.end('<h1>About Me: I am a web developer!</h1>');
  }
  // Handle any other route (404)
  else {
    res.statusCode = 404;
    res.end('<h1>404 - Not Found</h1>');
  }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});