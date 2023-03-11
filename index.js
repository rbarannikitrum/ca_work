const submit = document.querySelector('#submit')
submit.addEventListener('click', () => validateAndSend())
const info = document.createElement('div')
let form = document.forms.data

function validateAndSend() {
    console.log(form.elements.name.value, form.elements.surname.value, form.elements.email.value, form.elements.phone.value)
    if (form.elements.name.value.trim()
        && form.elements.surname.value.trim()
        && checkValidEmail(form.elements.email.value)
        && checkValidPhone(form.elements.phone.value)) {
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

function checkValidEmail(email) {
    const emailArr = email.split('')
    const firstIndex = emailArr.indexOf('@')
    const secondIndex = emailArr.lastIndexOf('.')
    return firstIndex > 0 && secondIndex > firstIndex
}

function checkValidPhone (phone) {
    const phoneArr = phone.split('')
    const condition1 = phoneArr.length === 11 && phoneArr[0] === '8'
    const condition2 = phoneArr.length === 12 && phoneArr[0] === '+' && phoneArr[1] === '7'
    return condition1 || condition2
}