const submit = document.querySelector('#submit')
submit.addEventListener('click', () => validateAndSend())
const regexpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const rexexpPhone = /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/
const info = document.createElement('div')
let form = document.forms.data

function validateAndSend() {
    console.log(form.elements.name.value, form.elements.surname.value, form.elements.email.value, form.elements.phone.value)
    if (form.elements.name.value
        && form.elements.surname.value
        && regexpEmail.test(form.elements.email.value)
        && rexexpPhone.test(form.elements.phone.value)) {
            /// логика отправки на бекенд
        document.querySelector('form').reset()
        info.style.border = '2px dashed green'
        info.innerText = 'Данные отправлены'
        form.appendChild(info)
    } else {
        info.style.border = '2px dashed red'
        info.innerText = 'Введены неккорректные данные'
        form.appendChild(info)
    }
}