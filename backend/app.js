const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const loginData = {
  login: "user",
  password: "1234",
};

app.post("/login", (request, response) => {
  if (!request.body) return response.status(400).send("no body");
  if (
    request.body.login === loginData.login &&
    request.body.password === loginData.password
  ) {
    response.send(JSON.stringify({ msg: "success" }));
  } else response.send(JSON.stringify({ msg: "failed" }));
});

app.listen(8080, () => console.log("Сервер запущен..."));
