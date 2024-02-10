const express = require("express");
const path = require("path");

const port = 3003;

const app = express();

app.get("/", (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
