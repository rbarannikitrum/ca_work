const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const data = {
  info1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  info2: "gravida in fermentum et sollicitudin",
  info3:
    "bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam",
  info4:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel orci porta non pulvinar neque laoreet. Dolor morbi non arcu risus quis varius quam. Sollicitudin ac orci phasellus egestas tellus rutrum. Amet est placerat in egestas. Mauris in aliquam sem fringilla ut morbi. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Orci a scelerisque purus semper eget duis at. Sem fringilla ut morbi tincidunt augue. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Integer eget aliquet nibh praesent. Eu mi bibendum neque egestas congue. Diam maecenas ultricies mi eget. Ut placerat orci nulla pellentesque dignissim. Sed felis eget velit aliquet. Vitae turpis massa sed elementum tempus. At in tellus integer feugiat. Ipsum faucibus vitae aliquet nec ullamcorper. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.",
}

app.get("/info", (request, response) => {
  console.log(request.query)
  if (!request.body) return response.status(400).send("no body")
  response
    .status(200)
    .send(JSON.stringify({ data: data["info" + request.query.id] }))
})

app.listen(8080, () => console.log("Сервер запущен..."))
