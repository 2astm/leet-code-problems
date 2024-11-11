function convert(s: string, numRows: number): string {
    const endLinesStep = numRows + (numRows - 2);
    if (endLinesStep == 0) return s;
    let step1 = endLinesStep - 2;
    let step2 = 2;
    let result = fillWithSteps(0, endLinesStep, endLinesStep, s);
    let i = 1;
    while(step1 >= 2 && step2 >= 0) {
        result += fillWithSteps(i, step1, step2, s);
        step1 -= 2;
        step2 += 2;
        i++;
    }
    result += fillWithSteps(i, endLinesStep, endLinesStep, s);
    return result;
};

function fillWithSteps(firstIndex: number, step1: number, step2: number, s: string) {
    let result = '';
    let i = firstIndex;
    while(i < s.length) {
        result += s[i];
        i += step1;
        if(i < s.length) {
            result += s[i];
            i += step2;
        }
    }
    return result;
}

console.log(convert("ABCD", 2)); // "PAHNAPLSIIGYIR"
/*
n + (n - 2)
3 + (3 - 2) 4

2
1 3 5 7 9
2 4 6 8 10


"PAYPALISHIRING"
P   A   H   N
A P L S I I G
Y   I   R
1   5   9     13  - 4 4
2 4 6 8 10 12 14  - 2 2
3   7   11    15  - 4 4

1                  9                      17                           - 8 8
2             8    10               16   18                24          - 6 2
3       7          11         15         19          23                - 4 4
4   6              12   14               20    22                      - 2 6
5                 13                    21                             - 8 8

4 + ( 4 - 2)  = 6
1     7        13       19       25 - 6 6
2   6 8     12 14    18 20    24 26 - 4 2
3 5   9  11    15 17    21 23    27 - 2 4
4     10       16       22       28 - 6 6











 */
