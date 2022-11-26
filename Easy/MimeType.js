// Strings
// Hash tables
// Loops
// Conditions

//detect the MIME type of a file based on its name. 
//The extension of a file: the substring which follows the last occurrence, 
// if any, of the dot character within the file name.
// TXT is treated the same way as txt

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.
//create a table
var mimeTable = {};
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0]; // file extension
    const MT = inputs[1]; // MIME type.
    // add the keys and values to the table 
    mimeTable[EXT.toLowerCase()] = MT;

}
for (let i = 0; i < Q; i++) {
    const FNAME = readline().toLowerCase(); // One file name per line.
    console.error(FNAME);
    const ext = FNAME.split('.'); //
    // For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
    if (ext.length > 1 && mimeTable[ext[ext.length - 1]]) {
        console.log(mimeTable[ext[ext.length - 1]]);
    } else {
        console.log('UNKNOWN')
    }
}
