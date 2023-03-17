function correctIP(ip) {
    const ipArr = ip.split('.')
    for (let i = 0; i < ipArr.length - 1; i++) {
        if (ipArr[i] > 255 || ipArr[i] < 0 || Number(ipArr[i]) != ipArr[i]) return false
    }
    return ipArr.length === 4
}

function correctIpRegExp (ip) {
    return /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/
.test(ip)
}

console.log(correctIP('255.255.0.0'))