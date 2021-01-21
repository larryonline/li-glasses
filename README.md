# LI Glasses
面对海量的工单分析任务, 你需要一个理想汽车牌的神奇眼镜. 它能够提高你分析log的效率

## 工作方式

1. 获取所有文件
    * 使用过滤器筛选掉一部分不关心的文件
2. 逐行读取每一个文件
    * 使用过滤器筛选掉一部分不关心的行
3. 显示每一行log
    * 使用渲染器处理log显示

### 术语
* 文件过滤器
* 行过滤器
* 行渲染器


## plugins 接口
* 文件过滤器: function(file, regx):boolean   
  文件过滤器接收两个参数: 文件路径 及 正则表达式, 返回布尔值来表示当前文件是否已被过滤 (true 留下)/(false 过滤掉)

* 行过滤器: function(line, regx): boolean  
  行过滤器接收两个参数: 行内容 及 正则表达式, 返回布尔值来表示当前行是否已被过滤 (true 留下) / (false 过滤掉) 

* 行解析器: function(line): object  
  行解析器接收一个参数: 行内容, 返回解析后的行内容:  
  ```javascript
  // 行数据解析结果
  {
      no: int           // 行号
      timestamp: long   // 时间戳
      date: date        // log日期
      process: int      // 进程号
      level: string     // 日志级别
      content: string   // 日志内容
      ext: object       // 附加信息
  }
  ```

* 行渲染器: function(line, meta): string  
  行渲染器接收两个参数: 原始行数据 及 解析元数据, 返回渲染后的行内容
  

### 使用方式
1. 通过安装到本地后的初始化过程来完成 ~/.lig 的设置
2. 通过命令行来指定想要查看的日志
3. 通过更新 ~/.ligrc, $LOG_FOLDER/.ligrc 来指定各级别配置(过滤器配置, 渲染器配置, 解析器配置)
