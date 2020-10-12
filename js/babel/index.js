const babel = requier("@babel/core")
const code = `import { zip } from 'lodash`;

const res = babel.transform(code);
console.log(res);

const plugin = {
    ImportDeclaration(path) {
        let descs = [t.Im]
        path.repalceWithMultiple()
    }
}