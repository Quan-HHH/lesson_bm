## Content-Type  form中的enctype属性

1. text/plain 纯文本 没有实质性的内容
```js
name=THX
file=360chrome.exe
```

2. application/x-www-form-urlencoded
```js 
name=THX&file=360chrome.exe
```

3. multipart/form-data
这种编码适合做文件上传
前面两种编码对于 二进制文件 或非ASCII码字符 处理起来很低效
```js
-----------------------------191691572411478
Content-Disposition: form-data; name="name"

123
-----------------------------191691572411478
Content-Disposition: form-data; name="file"; filename="test.txt" a.jpeg
Content-Type: text/plain  image/jpeg //文件类型

123456789 //文件内容

-----------------------------191691572411478--
```

浏览器会生成一个分隔符如 -----------------------------191691572411478--

后端处理文件上传：
- 用分隔符分割
- 得到分割之后的每一块 也就得到了分割之后的内容 
- 得到内容后调用node中的fs.write() 后端就保存文件了
- 完成文件上传的处理
