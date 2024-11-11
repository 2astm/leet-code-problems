function longestPalindrome(s: string): string {
    let res = '';

    const findPalindrome = (l: number, r: number) => {
        while (l >= 0 && r <= s.length) {
            if (s[l] === s[r]) {
                const palindrome = s.slice(l, r + 1);
                console.log(`largest: ${res} l: ${l} r: ${r} palindrome: ${palindrome}`);
                if (palindrome.length > res.length) {
                    res = palindrome;
                }
            } else break;
            l--;
            r++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (res.length > s.length / 2) break;
        findPalindrome(i, i);
        if (res.length > s.length / 2) break;
        findPalindrome(i, i + 1);
    }

    return res;

};

console.log(longestPalindrome('cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc'));
// console.log(longestPalindrome('cbbd'));
