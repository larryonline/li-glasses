# SPEC
可视化指定目录的log内容


`lig` 执行时所在目录下会生成 `.lig` 文件夹. 该文件夹包含当前目录下的`lig`配置  

主要的 `lig` 配置有如下几部分:  
* 文件名过滤器
    * 时间过滤器
    * 类型过滤器
* 行过滤器
    * 时间过滤器
    * 级别过滤器
    * 标签过滤器
    * 进程过滤器
    * 内容过滤器




### 命令列表
* `lig show` 展示lig过滤过的内容


#### Scheme
* `lig scheme add <scheme_file>` 添加一个 scheme 配置
* `lig scheme remove <scheme_file>` 移除一个 scheme 配置
* `lig scheme ` 列出当前已经有的 scheme 配置 




### SCHEME 模型

* android: `--------- begining of <scope>`
* android: `<date><time><pid><tid><level><tag>:<content>`
* kernel: `--------- begining of <scope>`
* kernel: `<date><time><pid><tid><level><tag>:<content>`

* tencent_action_log: `<datetime>:<event>`
* tencent_app_log: `<datetime>:<tag><filename:no>:<content>`

* gaode_agent: `<datetime>:<version><pid><tag><filename:no>:<content>`



