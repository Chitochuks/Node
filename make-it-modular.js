var mymoduleFn = require('./mymodule');
var dir = process.argv[2];
var mymodule = process.argv[3];

mymoduleFn(dir, mymodule, function (err, list) {
    if (err) {
        return console.error('There was an error:', err);
    }

    list.forEach(function (file) {
        console.log(file)
    });
});