const fs = require('fs')
const path = require('path')
const YAML = require('yaml')
const env = require('./env.js')

const SCHEME_HOME = env.global('scheme_home')
const FOLDERS = fs.readdirSync(SCHEME_HOME)
const ALL_ = FOLDERS.map(folder => path.join(SCHEME_HOME, folder))


exports = module.exports = (() => {
    const SCHEMES = [];
    const files = fs.readdirSync(SCHEME_HOME).map(file => path.join(SCHEME_HOME, file))
    for (var i in files) {
        var data = fs.readFileSync(files[i], {encoding: 'utf-8'})
        SCHEMES.push(YAML.parse(data))

    }
    return {schemes: SCHEMES}
})()