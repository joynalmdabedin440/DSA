var plusOne = function(digits) {
   let n = digits.length;

    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0; // carry the 9
    }

    // If loop finishes, all digits were 9
    digits.unshift(1);
    return digits;

    

};