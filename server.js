var express = require('express');

const app = express();

app.get("/",(req,res) => {
  res.send("<h1>Home Page...</h1>");
})

const PORT = 4000;
app.listen(PORT,() => {
    console.log(`Server Running on port ${PORT}`);
})
