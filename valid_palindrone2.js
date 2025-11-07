var validPalindrome = function(s) {

    // Case 1: Length 0 or 1 → always palindrome
    if (s.length <= 1) return true;

    // Case 2: Length 2 → either both same or one deletion allowed
    if (s.length === 2) return true;

    // Convert string to char array
    let arr = s.split("");

    // Reverse it and check quickly if already palindrome
    let reversed = [...arr].reverse().join("");
    if (reversed === s) return true;

    // Now use two pointers
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // Try skipping one character and check both possibilities
            return isPal(s, left + 1, right) || isPal(s, left, right - 1);
        }
        left++;
        right--;
    }

    return true;
};

// Helper function to check palindrome between two indices
function isPal(str, l, r) {
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++;
        r--;
    }
    return true;
}
//process.on("exit", () => require("fs").writeFileSync("display_runtime.txt", "0"));
console.log(validPalindrome("abca")); // true