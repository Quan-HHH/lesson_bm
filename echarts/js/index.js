// 柱状图模块1
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector('.bar .chart'));
  // 指定配置项和数据
  var option = {
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '4%',
      top: '10%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          color: "#6186ff",
          fontSize: "12"
        },
        //  x轴样式不显示
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: "#6186ff",
          fontSize: "12"
        },
        axisLine: {
          show: false,
          // 如果想要设置单独的线条样式 
          lineStyle: {
            color: "rgba(255,255,255,1)",
            width: 3,
            type: "solid"
          },
          splitLine: {
            lineStyle: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        itemStyle: {
          barBorderRadius: 5
        },
        data: [10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };
  // 把配置项给实例对象
  myChart.setOption(option);
  // 让图表自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 柱状图2
(function () {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  var myChart = echarts.init(document.querySelector('.bar2 .chart'));
  var option = {
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      top: "10%",
      left: "12%",
      bottom: "10%"
      // containLabel: true
    },
    xAxis: {
      show: false
    },
    yAxis: [{
      type: 'category',
      inverse: true,
      data: ['巴西', '印尼', '印度', '中国', '美国'],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#6186ff"
      }
    },
    {
      data: [702, 350, 610, 793, 664],
      inverse: true,
      // 不显示y轴的线
      axisLine: {
        show: false
      },
      // 不显示刻度
      axisTick: {
        show: false
      },
      // 把刻度标签里面的文字颜色设置为白色
      axisLabel: {
        color: "#00c1de"
      }
    }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0,
        itemStyle: {
          barBorderRadius: 20,
          color: function (params) {
            return myColor[params.dataIndex]
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%"
        }

      },
      {
        name: '框',
        type: 'bar',
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],

        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 折线图1
(function () {
  var myChart = echarts.init(document.querySelector('.line .chart'));
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
      },
      right: '10%' // 距离右边10%
    },
    grid: {
      top: '20%',
      left: '0%',
      right: '0%',
      bottom: '3%',
      show: true,// 显示边框
      borderColor: '#6186ff',// 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd' // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd' // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    series: [
      {
        name: '邮件营销',
        type: 'line',
        smooth: true,
        data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      },
      {
        name: '联盟广告',
        type: 'line',
        smooth: true,
        data: [220, 182, 191, 234, 290, 330, 310, 134, 90, 230, 210, 230]
      },
      {
        name: '直接访问',
        type: 'line',
        smooth: true,
        data: [320, 332, 490, 390, 330, 320, 540, 934, 201, 154, 190]
      },
      {
        name: '搜索引擎',
        type: 'line',
        smooth: true,
        data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

(function () {
  var myChart = echarts.init(document.querySelector('.pie .chart'));
  var option = {
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: "0%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "#6186ff",
      }
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '面积模式',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        label: {
          fontSize: 10
        },
        labelLine: {
          length: 5,
          length2: 8
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

(function () {
  var myChart = echarts.init(document.querySelector('.map .chart'));
  //跳转代码
  myChart.on('click', function (params) {
    console.log(params.name);
    window.open(params.data.url);
    // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.value));
  });

  var colorList = [[
    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
    '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
    '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
  ],
  [
    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
    '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
    '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
  ],
  [
    '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
    '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
    '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
    '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
  ]][2];

  var option = {
    // 图表标题
    tooltip: {},
    animationDurationUpdate: function (idx) {
      // 越往后的数据延迟越大
      return idx * 100;
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],
    series: [{
      type: 'graph',
      layout: 'force',
      force: {
        repulsion: 360,
        edgeLength: 10
      },
      roam: true,
      label: {
        normal: {
          show: true
        }
      },
      data: [{
        "name": "新冠肺炎愈后一般6个月内不会再得",
        "value": 2373,
        "symbolSize": 48,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[0],
            "color": colorList[0]
          }
        }
      }, {
        "name": "女篮两连胜后大喊武汉加油",
        "value": 5449,
        "symbolSize": 73,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[1],
            "color": colorList[1]
          }
        }
      }, {
        "name": "火神山医院开微博",
        "value": 2289,
        "symbolSize": 67,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[2],
            "color": colorList[2]
          }
        }
      }, {
        "name": "医疗队女队员集体理平头和光头",
        "value": 2518,
        "symbolSize": 50,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[3],
            "color": colorList[3]
          }
        }
      }, {
        "name": "缅怀疫情中逝去的人们",
        "value": 4730,
        "symbolSize": 88,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[4],
            "color": colorList[4]
          }
        }
      }, {
        "name": "妨害疫情防控的违法行为",
        "value": 1952,
        "symbolSize": 55,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[5],
            "color": colorList[5]
          }
        }
      }, {
        "name": "66岁重症患者8天快速康复",
        "value": 926,
        "symbolSize": 70,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[6],
            "color": colorList[6]
          }
        }
      }, {
        "name": "别让快递小哥一直等在寒风中",
        "value": 4536,
        "symbolSize": 67,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[7],
            "color": colorList[7]
          }
        }
      }, {
        "name": "湖北以外地区新增病例数连降5天",
        "value": 750,
        "symbolSize": 47,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[8],
            "color": colorList[8]
          }
        }
      }, {
        "name": "女儿写给战疫一线爸爸的信",
        "value": 493,
        "symbolSize": 82,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[9],
            "color": colorList[9]
          }
        }
      }, {
        "name": "青海连续3天无新增病例",
        "value": 385,
        "symbolSize": 59,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[10],
            "color": colorList[10]
          }
        }
      }, {
        "name": "辽宁再派1000名医护人员驰援武汉",
        "value": 4960,
        "symbolSize": 90,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[11],
            "color": colorList[11]
          }
        }
      }, {
        "name": "抗击新型肺炎第一线",
        "value": 8694000,
        "symbolSize": 134,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[12],
            "color": colorList[12]
          }
        }
      }, {
        "name": "12项疫情防控惠民政策",
        "value": 5668,
        "symbolSize": 75,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[13],
            "color": colorList[13]
          }
        }
      }, {
        "name": "战疫一线的别样团圆",
        "value": 339,
        "symbolSize": 68,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[14],
            "color": colorList[14]
          }
        }
      }, {
        "name": "31省区市心理援助热线",
        "value": 671,
        "symbolSize": 62,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[15],
            "color": colorList[15]
          }
        }
      }, {
        "name": "元宵节亮灯为武汉加油",
        "value": 27000,
        "symbolSize": 114,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[16],
            "color": colorList[16]
          }
        }
      }, {
        "name": "抗击新型肺炎我们在行动",
        "value": 10777000,
        "symbolSize": 130,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[17],
            "color": colorList[17]
          }
        }
      }, {
        "name": "疫情中的逆行者",
        "value": 92000,
        "symbolSize": 123,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[18],
            "color": colorList[18]
          }
        }
      }, {
        "name": "一张图看懂新冠肺炎",
        "value": 20000,
        "symbolSize": 141,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": colorList[19],
            "color": colorList[19]
          }
        },
        "url": "https://gallery.echartsjs.com/preview.html?c=xPLngHx_Z&v=1"
      }]
    }]
  }
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();