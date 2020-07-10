// 默认导出 default export
export default 1;

// default import
import XX from './x.js'  // 如果是默认导出 那么导入的语法一定是这样的

// 命名导出 named export
export const a = 1;

const b = 1;
export {
    b
}


// named import
import { a, b } from './x.js' // 这个不是解构奥 就是命名导入的语法 
// 如果是命名导出 那么导入的语法一定是这样的