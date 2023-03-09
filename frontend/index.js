async function sendData() {
  const login = document.querySelector("#login").value
  const password = document.querySelector("#password").value
  const sendObj = {
    login: login,
    password: password,
  }
  await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendObj),
  }).then((res) => {
    res.status === 200 ? setMain() : setError()
  })
}

function setMain() {
  document.querySelector("button").remove()
  document.querySelector("#login").remove()
  document.querySelector("#password").remove()
  const main = document.createElement("span")
  main.innerText = "Главная"
  document.querySelector("div").appendChild(main)
}

function setError() {
  const main = document.createElement("span")
  main.innerText = "Неверные данные"
  document.querySelector("div").appendChild(main)
}

const button = document.querySelector("button")
button.addEventListener("click", () => sendData())
