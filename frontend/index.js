const login = document.querySelector("#login").value;
const password = document.querySelector("#password").value;

async function sendData() {
  const sendObj = {
    login: login,
    password: password,
  };
  await fetch("http://localhost:8080/login", {
    method: "POST",
    body: JSON.stringify(sendObj),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
}

const button = document.querySelector("button");
button.addEventListener("click", () => sendData());
