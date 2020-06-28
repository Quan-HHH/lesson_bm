const users = [
    {id: 0, name: 'flower', age: 20, sex: 'female'},
    {id: 1, name: 'john', age: 28, sex: 'male'},
    {id: 2, name: 'bob', age: 33, sex: 'male'},
    {id: 3, name: 'tom', age: 22, sex: 'male'},
    {id: 4, name: 'alice', age: 18, sex: 'female'},
    {id: 5, name: 'rihana', age: 35, sex: 'female'},
    {id: 6, name: 'sara', age: 20, sex: 'female'}
]

// 封装一下 SQL 的业务能力
function SQL(table) {
    this.table = table; // 数据源
    this._result = null; //结果的保存变量 当下的结果 挂载在this上 成为对象的属性
    this._getRows = function() {
        return this._result ? this._result : this.table;
    }
}
// 条件动作
SQL.prototype.where = function(predicate) {
    // filter
    // console.log(predicate)
    var rows = this._getRows();
    // console.log(rows);
    // 如果是数组 直接filter
    if(Array.isArray(rows)) {
        this._result = rows.filter(predicate);
    } else {
        // 拿出每一个数组 分别 filter  返回的仍然是filter
        this._result = Object.keys(rows)
        .reduce(function(groups, group) {
            groups[group] = rows[group].filter(predicate);
            return groups;
        },{})
        return this;
        // console.log(this._result)
    }
    console.log(this._result)
}
SQL.prototype.groupBy = function(key) {
    var rows = this._getRows();  // 私有方法
    // console.log(rows);
    // 分组 reduce
    this._result = rows.reduce(function(groups, row) {
        // console.log(row)
        var group = row[key];
        if(!groups[group]) {
            groups[group] = [];
        }
        groups[group].push(row);
        return groups;
    },{});
    // console.log(this._result)
    return this; // return的this就是sql实例 这上面才有where方法
}
SQL.prototype.getResult = function() {
    return this._result;
}

var sql = new SQL(users);

var predicate = function(row) {
    return row.age < 30;
}

var result = sql
.groupBy('sex')  // 没有返回值 它上面没有where方法  **return this就可以实现链式调用**
.where(predicate)  //链式调用
.getResult();

console.log(result)