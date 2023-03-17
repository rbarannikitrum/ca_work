/// +X(XXX)XXX-XXXX

function checkPhoneNumber(phone) {
    if( phone[0] === '+' && phone[2] === '(' && phone[6] === ')' && phone[10] === '-' && phone.length === 15) {
        let phoneArr = phone.split('')
        phoneArr.splice(0, 1)
        phoneArr.splice(1, 1)
        phoneArr.splice(4, 1)
        phoneArr.splice(7, 1)
        return phoneArr.join('') == Number(phoneArr.join(''))
    }
    return false
}


function checkRegExp(phone) {
    return /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g.test(phone)
}


console.log(checkRegExp('+7(903)473-8275'))