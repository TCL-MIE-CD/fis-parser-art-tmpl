# fis-parser-art-tmpl

A parser for fis to compile art-template.

支持__inline内联和commonjs的require引入

## 用法

如*.tmpl是模版文件：
```javascript
//fis-conf.js
//匹配模版
.match('/src/**.tmpl', {
  parser: fis.plugin('art-tmpl'),
  rExt: '.js'
}

//业务代码
var artTemplate = require('art-template');
var badgeTmpl = __inline('./tmpl/_badge.tmpl').bind(artTemplate.utils); //需要artTemplate.utils
var data = {};
$('#some-dom').html(badgeTmpl(data));

```

这里有个示例
http://120.25.62.254:9999/demo/template
