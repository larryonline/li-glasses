const util = require('./util')
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

function LigConfig(home) {
    this.home = home
}

LigConfig.prototype.getLigHome = function(key) {
    return key ? path.join(this.home, key) : this.home
}

LigConfig.prototype.getAllScheme = function() {
    if (!this.schemes) {
        this.scheme_home = this.getLigHome('schemes')
        var scheme_files = util.find(this.scheme_home)
        this.schemes = scheme_files.map(file => YAML.parse(fs.readFileSync(file)))
    }

    return this.schemes;
}

LigConfig.prototype.getScheme = function(key) {
    var schemes = this.getAllScheme();
    for (var i in schemes) {
        var scheme = schemes[i]
        if (scheme.name === key) {
            return scheme
        }
    }
    return undefined
}

LigConfig.prototype.findSchemeByTag = function(tag) {
    var schemes = this.getAllScheme();
    var result = []
    for (var i in schemes) {
        var scheme = schemes[i]
        if (scheme.tags.indexOf(tag) > -1) {
            result.push(scheme)
        }
    }
    return result;
}


exports = module.exports = LigConfig