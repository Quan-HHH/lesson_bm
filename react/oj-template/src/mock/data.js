// 假数据  在使用真数据前先用一下
import Mock from 'mockjs';

export default Mock.mock('/posts/',
    'get', {
        success: true,
        title: '野原新之助',
        content: '蜡笔小新',
        // 属性 list 的值是一个数组，其中含有 5 到 10 个元素
        'list|5-10': [{
            'title': '@title()',  // 会随机生成一个标题
            'amail': '@email()',
            'id': '@id()',
            'key|+1': 1
        }]
    })