const express = require('express');
const app = express();
const port = 3000; // You can change this to any port you prefer

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Basic HTML Form</title>
      </head>
      <body>
        <h1>Basic HTML Form</h1>
        <form action="/submit" method="post">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required><br><br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required><br><br>
          <input type="submit" value="Submit">
        </form>
      </body>
    </html>
  `);
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`You submitted the following data:<br>Name: ${name}<br>Email: ${email}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
