const path = require('path')
const os = require('os');
const fs = require('fs')
const fsp = require('then-fs');

const src = {}
const global = {}
const local = {}
const prop = {}


function Environemnt (given_process) {
    this.process = given_process || process;
    
    // setup
    this.init()
}

Environemnt.prototype.global = function(key) {
    return key ? global[key] : global;
}

Environemnt.prototype.local = function(key) {
    return key ? local[key] : local;
}

Environemnt.prototype.root = function() {
    return prop['folder']
}

Environemnt.prototype.init = function() {
    const src_home = this.process.cwd()

    const global_home = this.process.env['LIG_DIR'] || path.join(os.homedir(), '.lig');
    global['home'] = global_home;
    global['cache_home'] = path.join(global_home, 'cache')
    global['plugin_home'] = path.join(global_home, 'plugins')
    global['log_home'] = path.join(global_home, 'logs')
    global['scheme_home'] = path.join(global_home, 'schemes')


    const local_home = path.join(this.process.cwd(), '.lig');
    local['home'] = local_home
    local['cache_home'] = path.join(local_home, 'cache')
    local['hook_home'] = path.join(local_home, 'hooks')

    prop['folder'] = this.process.cwd()
}

// 检查环境
Environemnt.prototype.check = function() {
    if (!fs.existsSync(this.local('home'))) {
        throw {code: 0xFFFFFF, message: `Looks like it's not a <lig folder>, you should do "lig init" firstly`}
    }
}

exports = module.exports = new Environemnt();