<template>
  <div class="echarts-text">
    <div class="container">
      <LjjEcharts :options="optionsOne"></LjjEcharts>
    </div>
    <div class="container">
      <LjjEcharts :options="optionsTwo"></LjjEcharts>
    </div>
    <div class="container" style="width: 400px">
      <LjjEcharts :options="optionsThree"></LjjEcharts>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

const label = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
const value = [5, 20, 36, 10, 10, 20]

const label1 = ['指标', '0-20', '20-40', '40-60', '60-80', '80-100']
const value1 = ['数量', 10, 20, 30, 40, 50]

// const label2 = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
// const value2 = [5, 20, 36, 10, 10, 20]
export default {
  name: 'echartsText',
  setup() {
    const optionsOne = ref({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      // legend: {
      //   data: ['销量']
      // },
      xAxis: {
        data: label,
        type: 'category'
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: value
        }
      ]
    })
    const optionsTwo = ref({
      // 工具提示, 鼠标悬浮的配置
      tooltip: {},
      // color,
      // 设置位置
      // grid: {
      //   left: 40,
      //   right: 40,
      //   top: 0
      // },
      // 数据集, 也可以不使用这个, 把数据单独放在xAxis和yAxis当中
      dataset: {
        source: [
          value1,
          label1
        ]
      },
      xAxis: {
        type: 'value',
        max: 10 + 20 + 30 + 40 + 50
        // data: label1
      },
      yAxis: {
        type: 'category'
        // data: axis
      },
      series: [
        {
          type: 'bar',
          stack: 'total'
        }, {
          type: 'bar',
          stack: 'total'
        }, {
          type: 'bar',
          stack: 'total'
        }, {
          type: 'bar',
          stack: 'total' // 让他们处于同一个分组
        }
      ]
    })
    const optionsThree = ref({
      title: {
        // 主标题
        text: '近7天时间类型',
        // textStyle: {
        //   fontSize: 12,
        //   color: '#333'
        // },
        top: 10,
        left: 10,
        // 副标题
        subtext: '单位：分钟'
      },
      legend: {
        data: ['工作时间', '故障时间', '停机时间', '发电时间', '偏航时间', '其他'],
        right: 6,
        top: 70,
        // orient 横向还是竖向 'horizontal'横向 'vertical'竖向
        orient: 'vertical',
        textStyle: {
          fontSize: 12
        }
      },
      // color: ['#5B8FF9'], // 柱状图的颜色
      tooltip: {},
      dataset: {
        // 提供一份数据。
        source: [
          ['5.1', 10, 20, 30, 40, 50, 60],
          ['5.2', 60, 50, 40, 30, 20, 10],
          ['5.3', 20, 30, 40, 50, 60, 70],
          ['5.4', 30, 40, 50, 60, 70, 80],
          ['5.5', 10, 20, 30, 40, 50, 60],
          ['5.6', 10, 20, 30, 40, 50, 60]
        ]
      },
      // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
      xAxis: {
        type: 'category',
        // 隐藏坐标系旁边的短线
        axisTick: {
          show: false
        }
      },
      // 声明一个 Y 轴，数值轴。
      yAxis: {
        axisLine: {
          show: false
        },
        // 隐藏坐标系旁边的短线
        axisTick: {
          show: false
        }
      },
      // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
      series: [
        {
          type: 'bar',
          stack: 'total',
          barWidth: '20%', // 调节柱子大小
          name: '其他',
          itemStyle: {
            color: '#8BDEFF'
          }
        },
        {
          type: 'bar',
          stack: 'total',
          barWidth: '20%', // 调节柱子大小
          name: '偏航时间',
          itemStyle: {
            color: '#B39CF7'
          }
        },
        {
          type: 'bar',
          stack: 'total',
          barWidth: '20%', // 调节柱子大小
          name: '发电时间',
          itemStyle: {
            color: '#80F2DB'
          }
        },
        {
          type: 'bar',
          stack: 'total',
          barWidth: '20%', // 调节柱子大小
          name: '停机时间',
          itemStyle: {
            color: '#9CBDFF'
          }
        },
        {
          type: 'bar',
          stack: 'total',
          barWidth: '20%', // 调节柱子大小
          name: '故障时间',
          itemStyle: {
            color: '#5B8FF9'
          }
        },
        {
          type: 'bar',
          stack: 'total',
          barWidth: '20%', // 调节柱子大小
          name: '工作时间',
          itemStyle: {
            color: '#0e58e9'
          }
        }
      ],
      grid: {
        top: 80,
        left: '10%',
        right: '25%'
        // bottom: '20%'
      }
    })

    return {
      optionsOne,
      optionsTwo,
      optionsThree
    }
  }
}
</script>

<style lang="scss"
       scoped>
.echarts-text {
  display: flex;
  flex-wrap: wrap;
  .container {
    width: 500px;
    height: 300px;
    border: 1px solid;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
