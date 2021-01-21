const fs = require('fs')
const LigConfig = require('./lib/config') 

function LigCli(home) {
    this.config = new LigConfig(home)
}

LigCli.prototype.apply = function(scheme) {
    console.log(`LigCli will apply ${scheme}`)

    var scheme = this.config.getScheme(scheme);


    console.dir(scheme)

    return this;
}

LigCli.prototype.show = function(folder) {
    console.log(`LigCli will show ${folder}`)

    

}

/**
 * lig all files under given {root}
 * @param {file} homedir lig homedir
 */
exports = module.exports = (homedir) => {
    console.log(`LigCli initializing...`)
    return new LigCli(homedir);
}