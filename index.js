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

console.log(checkPhoneNumber('+7(903)4a3-8275'))