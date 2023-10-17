function isPalindrome(n) {
    const str = n.toString();
    return str === str.split('').reverse().join('');
}

function findPalindrome(n, steps = 0) {
    const maxSteps = 5000;  

    if (isPalindrome(n)) {
        return { result: n, steps: steps, isLychrel: false };
    } else if (steps === maxSteps) {
        return { result: n, steps: steps, isLychrel: true };
    }

    const reversed = parseInt(n.toString().split('').reverse().join(''), 10);
    return findPalindrome(n + reversed, steps + 1);
}


console.log(findPalindrome(160));
console.log(findPalindrome(196));