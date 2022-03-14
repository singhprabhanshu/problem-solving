var defangIPaddr = function(address) {
    for (let i of address) {
        address = address.replace('.', '[.]');
        console.log(address);
    }
};

const check = defangIPaddr("1.1.1.1");