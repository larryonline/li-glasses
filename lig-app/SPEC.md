# Li-glasses (lig)

理想牌的神奇眼镜. 用来程序化解析log.

## 配置化

比如一条LOG: 
```log
01-18 20:59:39.597  2474 12707 I IoT.CommsCallbackWorker: received message, messageId:3, payload length:113
```  

通过配置文件:
```yaml
name: 解析配置名称
spec: <datetime><pid><tid><level><tag>:<content>
meta:
  datetime:
    type: datetime
    spec: MM-dd HH:mm:ss.SSS  # 日期表达式 仅支持字符集: YyMmDdHhMmSs
  pid: 
    type: int
  tid:
    type: int
  level:
    type: string
    spec: [VDIWEF]
  tag:
    type: string
    spec: [^:\\n]+(?=\\s*:\\s?)
  content:
    type: text
  
```

可以被解析为一个结构化的log对象: 

```js
{
    datetime: 2021-01-18T12:59:39.597Z,
    pid: 2474,
    tid: 12707,
    level: 'I',
    tag: 'IoT.CommsCallbackWorker',
    content: 'received message, messageId:3, payload length:113'  
}
```

