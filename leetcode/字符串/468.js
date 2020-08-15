var validIPAddress = function(IP) {
    const ip4 = IP.split('.');
    const ip6 = IP.split(':');
    if(ip4.length === 4) {
        if(ip4.every((item) => (item.match(/^0$|^[0-9]{0,2}$/) && item < 256)))
        return "IPv4"
    }
    if(ip6.length === 6) {
        if(ip6.every((item) => (
            item.match(/^[0-9a-f]{1,4}$/i)
        )))
        return "IPv6"
    }
    return "Neither"
};
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"))