const express = require("express");
const app = express();

app.get("/", (req, res) => {
//   res.send("Hello World");
  res.sendFile('/index.html',{root: __dirname })
//   res.sendFile('views/test.html', {root: __dirname })
});

app.get("/cal", (req, res) => {
    // let a = 3+4;
    res.send('show cal');
    //   res.sendFile('/index.html',{root: __dirname })
    //   res.sendFile('views/test.html', {root: __dirname })
    });

var name = 'champ'
app.listen(3000, () => {
  console.log("Start server at port 3000.");
});
