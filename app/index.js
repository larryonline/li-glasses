const path = require('path')
const fs = require('fs')


const fileFilter = require('./lib/file_filter')

/**
 * 
 * @param {file[]} files 传入的目录列表
 * @param {object} opts 传入的参数列表
 */
module.exports = (files, opts) => {
    opts = opts || {}

    var filter = opts.filter || ''
    var parser = opts.parser || 'android_log_parser'
    var line_filter = opts.line || ''
    var render = opts.render || 'default_render'


}