function myAtoi(s: string): number {
    const res = Number(s.match(/^\s*\+*-*\d+/)?.[0] || '');
    if (isNaN(res)) return 0;
    if (res > 2147483647)
        return 2147483647;
    if (res < -2147483648)
        return -2147483648;
    return res;
}

console.log(myAtoi("words and 987"))