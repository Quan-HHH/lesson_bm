// import Mock from 'mockjs'

// const lesson = Mock.mock('/allLessons/',
//     'get', {
//         // 属性 list 的值是一个数组，其中含有 5 到 10 个元素
//         'list|5-10': [{
//             'key|+1': 1,
//             'avatar': '@image("70x100")',  // 会随机生成一个图片
//             'title': '@title()',
//             'over|1-3': 2,
//             'tab|1-6': 2
//         }],
//         'tab1': [{
//             'name': '全部',
//             'value': 1
//         },{
//             'name': '未学完',
//             'value': 2
//         },{
//             'name': '已学完',
//             'value': 3
//         }],
//         'tab2': [{
//             'name': '所有形式',
//             'value': 1
//         },{
//             'name': '专栏',
//             'value': 2
//         },{
//             'name': '视频课',
//             'value': 3
//         },{
//             'name': '微课',
//             'value': 4
//         },{
//             'name': '每日一课',
//             'value': 5
//         },{
//             'name': '其它',
//             'value': 6
//         }]
//     })

// export default lesson;
import Mock from 'mockjs';

let data = Mock.mock("/mock",{  
  //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
	"userinfo|10":[{   			//生成四个如下格式的数据
        "id|+1":1, 						//数字从1开始，后续依次加1
        'image':'@image(200*200)',
		    "title":"@cname",			//名字为随机中文名
        "total|10-80":25, 			//年龄是18-28之间的随机数
        "learned|10-80":10,
        "studyPercentage|1-100":55,
        "type":"@cname",
        "isFinished|0-1":1
	}]
})

export default data;
