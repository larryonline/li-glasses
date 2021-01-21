

/**
 * 过滤 {files} 列表中不匹配 {regx} 的文件名
 * @param {array} files 
 * @param {regexp} regx 
 */
module.exports = (file, regx)  => {
    return regx.test(file);
    // return new Promise((resolve, reject) => {
    //     var filtered = [];
    //     try {
    //         for (var i in files) {
    //             var file = files[i]
    //             if (regx.test(file)) {
    //                 filtered.push(file)
    //             }
    //         }
    //         resolve(filtered)
    //     } catch(e) {
    //         reject(e)
    //     }
    // })
}