// npm init --> "To create a new project"
// npm init -y --> "To create a new project with default settings in package.json"


// npm - global commands,comes with Node

// local dependency - use it only in this particular  project
// npm i <packageName>


// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <>packageName (mac os)



const _ =require('lodash')
const items=[1,[2,[3,[4]]]]
const new_items=_.flattenDeep(items);
console.log(new_items);














