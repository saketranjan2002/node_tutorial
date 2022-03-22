// const{readFileSync,writeFileSync}=require('fs')
// const first=readFileSync('./content/sub-folder/first.txt','utf8');
// const second=readFileSync('./content/sub-folder/second.txt','utf8');

const file=require('fs')
const first=file.readFileSync('./content/sub-folder/first.txt','utf8')
const second=file.readFileSync('./content/sub-folder/second.txt','utf8')



// console.log(first,second);

file.writeFileSync('./content/result-sync.txt',`here is the result : ${first},${second}`,{ flag:'a' })



















