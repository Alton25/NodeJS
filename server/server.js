var path = require('path');
var fs = require('fs');

var dataPath = path.join(__dirname, './chirp.json');

fs.readFile(dataPath,{
    encoding: "UTF-8"
}, (err, data) => {
var chirps = JSON.parse(data);

console.log(chirps.username);
console.log(chirps.someText);
});