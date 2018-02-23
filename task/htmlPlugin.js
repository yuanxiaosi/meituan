var fs = require("fs");
var path = require('path');

var linebreak = "";
var platform = process.platform;
if(platform === "win32"){
  linebreak = "\r\n"
}else if(platform === "darwin"){
  linebreak = "\n"
}else if(platform === "linux"){
  linebreak = "\r"
}

function HtmlPlugin(options) {
  this.options = options;
}

HtmlPlugin.prototype.apply = function(compiler) {
  var me = this;
  compiler.plugin('emit', function(compilation, callback) {
  	var obj = {};
    for (var filename in compilation.assets) {
    	var jsFileName = filename.match(/[^\/|^\\]+?\.js/)
    	if(jsFileName != null){
    		var nameStr = jsFileName[0].replace(".js", "");
    		var nameArr = nameStr.split("-");
    		obj[nameArr[0]] = nameArr[1]?nameArr[1]:"";
    	}
    }
    
    for(var i in me.options){
    	var jsKey = me.options[i];
    	var templatePath = path.resolve(__dirname, '../src/template');
    	var htmlSrc = `${templatePath}/${i}.html`
			var html = fs.readFileSync(htmlSrc,"utf-8");  
			var res = html.replace(/<!--build-->[\s\S]+?<!---->/, function(a,b,c){

        var scriptLabel = obj[jsKey] === ""?`<script src="/static/entry/${jsKey}.js"></script>`:`<script src="/static/entry/${jsKey}-${obj[jsKey]}.js"></script>`
				var label = `<!--build-->${linebreak}${scriptLabel}${linebreak}<!---->`
				return label
			})
			fs.writeFileSync(htmlSrc, res)
    }

    callback();
  });
};

module.exports = HtmlPlugin;