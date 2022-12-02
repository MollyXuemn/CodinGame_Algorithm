// the width L of a letter represented in ASCII art. All letters are the same width.

// Line 2: the height H of a letter represented in ASCII art. All letters are the same height.

// Line 3: The line of text T, composed of N ASCII characters.

// Following lines: the string of characters ABCDEFGHIJKLMNOPQRSTUVWXYZ? Represented in ASCII art.
const L = parseInt(readline());
const H = parseInt(readline());
const T = readline().toUpperCase();
for (let i = 0; i < H; i++) {
    const ROW = readline();

    var line = '';
    for (var j = 0; j < T.length; j++) {
        var indexASCII = T.charCodeAt(j) - 65;//change T into number from 1, first letter is A so we subtract A = 65

        //console.error(indexASCII);
        if (indexASCII < 0 || indexASCII > 26) {
            indexASCII = 26;
        }
        //concatenate the ASCII caracter by substring, and need to * width of a letter
        line += ROW.substring(indexASCII * L, (indexASCII + 1) * L);

    }
    console.log(line);
}