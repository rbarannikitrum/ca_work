const dataArray = [
  ["Томаты свежие", 69.0],
  ["Огурцы свежие", 48.0],
];

function render() {
  const table = document.querySelector("#table");
  table.innerHTML = ''
  dataArray.map((el, i) => {
    const elName = document.createElement("td");
    const elPrice = document.createElement("td");
    const row = document.createElement("tr");
    elName.innerText = el[0];
    elPrice.innerText = el[1];
    elName.addEventListener("click", () => edit(elName, i, 0));
    elPrice.addEventListener("click", () => edit(elPrice, i, 1));
    table.appendChild(row);
    row.appendChild(elName);
    row.appendChild(elPrice);
  });
  const input = document.createElement('input')
  const saveButton = document.createElement('button')
  saveButton.innerText = 'save';
  input.classList.add('hide')
  saveButton.classList.add('hide')
  table.appendChild(input)
  table.appendChild(saveButton)
}

function edit(element, index, type) {
  const input = document.querySelector('input')
  const saveButton = document.querySelector('button')
  saveButton.classList.remove('hide')
  saveButton.classList.add('show')
  input.classList.remove('hide')
  input.classList.add('show')
  input.value = element.innerText
  saveButton.addEventListener('click', () => save(element, input, saveButton, index, type))
  saveButton.removeEventListener('click', save)
}

function save (element, input, saveButton, index, type) {
    dataArray[index][type] = document.querySelector('input').value
    render()
  }

// function edit(elVersion, i) {
//   if (document.querySelector("input")) {
//     document.querySelector("input").remove();
//     document.querySelector("button").remove();
//   }
//   const input = document.createElement("input");
//   let newData = elVersion.innerText;
//   input.addEventListener("change", (e) => {
//     newData = e.target.value;
//   });
//   input.value = elVersion.innerText;
//   table.appendChild(input);
//   const saveButton = document.createElement("button");
//   saveButton.innerText = "save";
//   saveButton.addEventListener("click", () => {
//     elVersion.innerText = newData;
//     input.remove();
//     saveButton.remove();
//   });
//   table.appendChild(saveButton);
// }
