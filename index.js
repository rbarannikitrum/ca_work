const dataArray = [['Томаты свежие', 69.00], ['Огурцы свежие', 48.00]]

function render() {
    const table = document.querySelector('#table')
    dataArray.map((el, i) => {
        const elName = document.createElement('td')
        const elPrice = document.createElement('td')
        const row = document.createElement('tr')
        elName.innerText = el[0]
        elPrice.innerText = el[1]
        elName.addEventListener('click', () => edit(elName, i))
        elPrice.addEventListener('click', () => edit(elPrice, i))
        table.appendChild(row)
        row.appendChild(elName)
        row.appendChild(elPrice)
    })
}

function edit(elVersion, i) {
    if (document.querySelector('input')) {
        document.querySelector('input').remove()
        document.querySelector('button').remove()
    }
    const input = document.createElement('input')
    let newData
    input.addEventListener('change', (e) => {
        newData = e.target.value
    })
    input.value = elVersion.innerText
    table.appendChild(input)
    const saveButton = document.createElement('button')
    saveButton.innerText = 'save'
    saveButton.addEventListener('click', () => {
        elVersion.innerText = newData;
        input.remove()
        saveButton.remove()
    })
    table.appendChild(saveButton)
}