const babel = require("@babel/core")
const t = require('babel-types')
const code = `import { zip } from 'lodash'`;
// js代买分为 1.module 2.脚本



const plugin = {
    // path: AST上的import的那个节点
    ImportDeclaration(path) {
        if(!t.isImportDefaultSpecifier(path.node.specifiers[0])) { // 如果不是默认导入
            let identify = t.identifier('zip')
            let descs = [t.importDefaultSpecifier(identify)]; // 默认导入
            let str = t.stringLiteral('lodash/zip'); // 从哪导入
            let importStatement = t.importDeclaration(descs, str) 
            // const specifies = path.node
            path.replaceWith(importStatement)
        }
        
    }
}

// 转换某份代码 传入某个配置
const res = babel.transform(code, {
    plugins: [
        {
            // babel的插件都必须有个visitor的属性
            visitor: plugin
        }
    ]
});
console.log(res);