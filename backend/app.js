const express = require("express");

const app = express();
app.use(express.json())


const loginData = {
    login: 'user',
    password: '1234'
}

app.post("/login", (request, response) => {
    console.log(request.body);
    if(!request.body) return response.status(400).send('no body')
    if (request.body.login === loginData.login && request.body.password === loginData.password) {
        response.send('success');
    } else response.send('failed')
});

app.listen(8080, () => console.log("Сервер запущен..."));