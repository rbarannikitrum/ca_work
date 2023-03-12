const img = document.querySelector('img')
let isFull = false

img.addEventListener('click', () => {
    isFull = !isFull
    if (isFull) img.classList.add('full')
    if (!isFull) img.classList.remove('full')
})