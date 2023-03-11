let noteArray = []
const notes = document.querySelector('#notes')

function checkForLocalStorage() {
    if (JSON.parse(localStorage.getItem('notes'))) {
        noteArray = [...noteArray, ...JSON.parse(localStorage.getItem('notes'))]
        console.log(noteArray)
    }
    render()
}


function render() {
    notes.innerHTML = ''
    noteArray.map((el, i) => {
        const note = document.createElement('div')
        note.innerText = el
        note.id = 'note' + i
        const editButton = document.createElement('button')
        editButton.innerText = 'edit'
        editButton.addEventListener('click', () => edit(i))
        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'delete'
        deleteButton.addEventListener('click', () => remove(i))
        note.appendChild(editButton)
        note.appendChild(deleteButton)
        notes.appendChild(note)
    })
    localStorage.setItem('notes', JSON.stringify(noteArray))
}

function addNote() {
    const newNote = document.querySelector('input').value
    noteArray.push(newNote)
    render()
}

function edit(i) {
    const editNote = document.querySelector('#note' + i)
    editNote.remove()
    const editDiv = document.createElement('div')
    const editInput = document.createElement('input')
    editInput.id = 'input' + i
    editDiv.appendChild(editInput)
    const saveButton = document.createElement('button')
    saveButton.innerText = 'save'
    saveButton.addEventListener('click', () => save(i))
    editDiv.appendChild(saveButton)
    notes.appendChild(editDiv)
}

function save(i) {
    const input = document.querySelector('#input' + i).value
    noteArray[i] = input
    render()
}

function remove(i) {
    noteArray.splice(i, 1)
    render()
}