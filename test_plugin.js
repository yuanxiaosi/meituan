var babel = require('babel-core');
var t = require('babel-types');

var visitor = {
  CallExpression(path) {
    if(!t.isIdentifier(path.node.callee, {name:"aaa"})){return}

    //path.node.callee.name
    //path.node.arguments
    path.node.arguments[0].value = `"val"`

    path.replaceWith(
      t.callExpression(
        t.memberExpression(t.identifier("console"), t.identifier("log")),
        path.node.arguments
      )
    );
  },
  /*ArrayExpression(path) {
    path.replaceWith(
      t.callExpression(
        t.memberExpression(t.identifier("console"), t.identifier("log")),
        path.node.elements
      )
    );
  }*/
    
};

module.exports = function (babel) {
  return {
    visitor
  };
}
