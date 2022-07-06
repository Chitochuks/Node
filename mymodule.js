var fs = require('fs');
var path = require('path');

module.exports = function (dir, mymodule, callback) {

    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err);
        }

        list = list.filter(function (file) {
            return path.extname(file) === '.' + mymodule
        });

        callback(null, list)
    })
}

