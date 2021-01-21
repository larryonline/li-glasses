const fs = require('fs');
const path = require('path')


function findAllFilesUnder(root) {
    var files = [];
    if (!fs.existsSync(root)) {
        return []
    } else {
        var stat = fs.statSync(root)
        if (stat.isDirectory()) {
            var subdirs = fs.readdirSync(root).map(item => path.join(root, item))
            for (var i  in subdirs) {
                var subdir = subdirs[i]
                files = files.concat(findAllFilesUnder(subdir))
            }
        } else if(stat.isFile()) {
            files.push(root)
        }
    }
    return files;
}


exports = module.exports = {
    find: findAllFilesUnder


}