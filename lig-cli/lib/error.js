
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

exports = module.exports = (() => {

    const src_home = path.resolve(__dirname, '../');
    const error_definition = path.join(src_home, 'etc', 'errors.yaml')
    return YAML.parse(fs.readFileSync(error_definition, {encoding:'utf-8'}))
})()