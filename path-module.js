const path=require('path')


console.log(path.sep);
const filename=path.join('content','subfolder','text.txt')
console.log(filename);
console.log(path.basename(filename));

const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);





























































