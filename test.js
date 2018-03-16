const babel = require("babel-core");



const result = babel.transform("var bar = [1, 2, 3];function test(){aaa(123)};",{
  plugins:[
    require("./test_plugin.js")
  ]
});

console.log(result.code);