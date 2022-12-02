const N = parseInt(readline());

var invalid = [];

for (let i = 0; i < N; i++) {
    const ISBN = readline();
    //1. 排除一般情况
    if (ISBN.length != 10 && ISBN.length != 13) {
        invalid.push(ISBN);
        continue;
    } else if (ISBN.length === 10) {
        var value;
        //ISBN-10: 0×10 + 3×9 + 0×8 + 6×7 + 4×6 + 0×5 + 6×4 + 1×3 + 5×2 = 130.
        value = ISBN.substring(0, ISBN.length - 1) // exclude the last digit
            .split('') //separate character by character
            .map((current, index) => current * (10 - index))
            .reduce((a, b) => a + b);
        var checkDigit = ISBN[9];
        if (checkDigit === 'X') checkDigit = 10;
        value += parseInt(checkDigit);
        //Check digit is the value needed to add to the sum to make it dividable by 11.
        value %= 11;  //= value%11;

    } else {
        value = ISBN.substring(0, ISBN.length - 1) // exclude the last digit
            .split('') //separate character by character
            .map((current, index) => (index % 2 == 0) ? parseInt(current) : current * 3)
            .reduce((a, b) => a + b);

        var checkDigit = ISBN[12];
        value += parseInt(checkDigit);
        //Check digit is the value needed to add to the sum to make it dividable by 11.
        value %= 10;

    }
    if (value != 0) {
        invalid.push(ISBN);
    }

}

console.log(invalid.length + ' invalid:');
invalid.map(ISBN => console.log(ISBN));
