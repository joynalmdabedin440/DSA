var isValid = function (s) {
    if (s.length % 2 !== 0) return false;
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        if (map[current]) {
            stack.push(current);
        } else {
            let p = stack.pop();
            if (map[p] !== current) {
                // do nothing
                return false;
            } 
        }
    }
    return stack.length === 0;
}




console.log(isValid("({{{{}}}))"))
