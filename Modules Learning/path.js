const path = require('path')// inbuilt module of node.js to get the path of file ot directory

var pathObj = path.parse(__filename);
console.log(pathObj);