// server.js
import e from "express";

const app = e();

app.get("/", (req, res) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  res.send(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is a simple Node.js server.</p>
                </body>
            </html>
        `);
});

app.get("/about", (req, res) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  res.send("About us: at CADT, we love node.js!");
});

app.get("/contact-us", (req, res) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  res.send("You can reach us via email...");
});

app.get("/products", (req, res) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  res.send("Buy one get one...");
});

app.get("/projects", (req, res) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  res.send("Here are our awesome projects");
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
