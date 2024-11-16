function reverse(x: number): number {
    let res = 0;
    if (x<0)
        res = -Number(x.toString().split("").slice(1).reverse().join(''));
    else
        res = Number(x.toString().split("").reverse().join(''));
    if (res > 2147483647 || res < -2147483648)
        return 0;
    else return res;
}