# Li-glasses (lig)

理想牌的神奇眼镜. 用来程序化解析log


## 可以配置化的把每一条log都解析成元数据

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
    spec: MM-dd HH:mm:ss.SSS
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

可以被解析为: 

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

