function isPalindrome(str) {
    let cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));


function pow(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    if (exponent === 1) {
        return base;
    }

    if (exponent < 0) {
        return 1 / (base * pow(base, -exponent - 1));
    }

    return base * pow(base, exponent - 1);
}

console.log(pow(2, 3));
console.log(pow(5, 2));
console.log(pow(3, 4));
console.log(pow(10, -2));

