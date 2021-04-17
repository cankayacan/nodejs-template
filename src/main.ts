import * as express from "express";

const app = express();
const port = 8090;

app.use(express.json());

app.post("/status", function (req, res) {
  console.log("body", req.body);
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
