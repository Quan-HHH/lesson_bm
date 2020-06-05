// 柱状图模块1
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector('.bar .chart'));
  // 指定配置项和数据
  var option = {
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
  var myChart = echarts.init(document.querySelector('.bar2 .chart'));
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
      // containLabel: true
    },
    xAxis: {
      show: false
    },
    yAxis: {
      type: 'category',
      data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
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
    series: [
      {
        name: '2011年',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230]
      },
      {
        name: '2012年',
        type: 'bar',
        data: [19325, 23438, 31000, 121594, 134141, 681807]
      }
    ]
  };
  myChart.setOption(option)
})()