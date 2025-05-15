import e from "express";
import queryString from "querystring";
import fs from "fs";
const filePath = "./submissions.JSON";
const app = e();

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

app.get("/contact", (req, res) => {
  res.send(`
          <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
          </form>
      `);
});

app.post("/contact", e.urlencoded(), (req, res) => {
  let submission = [];
  if (req.body.name !== "") {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log("File does not exist");
      } else {
        submission = JSON.parse(data);
        submission.push(req.body);
        fs.writeFile(filePath, JSON.stringify(submission, null, 2), (err) => {
          if (err) {
            return console.log("Unable to write file");
          }
        });
      }
    });

    res.send(`
          <html>
            <head><title>Success</title></head>
            <body>
              <h1>Congratulations!</h1>
              <p>You have successfully submitted your name</p>
            </body>
          </html>
          `);
  } else {
    res.send(`<html>
              <head><title>Error</title></head>
              <body>
                <h1>Errors!</h1>
                <p>Your submission was unsuccessful because you did not input any name.</p>
              </body>
            </html>
        `);
  }
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(3000, () => {
  console.log("The server is in http://localhost:3000");
});
