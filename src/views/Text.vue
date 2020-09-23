<template>
  <div style="width: 800px; height: 500px">
    <!--    <SvgAnimation></SvgAnimation>-->
    <!--    <LjjFlyBox class="fly-box"-->
    <!--               style="width:50%">-->
    <!--      <div>1</div>-->
    <!--      <div>2</div>-->
    <!--      <div>3</div>-->
    <!--      <div>1</div>-->
    <!--      <div>2</div>-->
    <!--      <div>3</div>-->
    <!--    </LjjFlyBox>-->
    <!--    <LjjFlyBox class="fly-box" style="margin-top: 20px">-->
    <!--      <div>1</div>-->
    <!--      <div>2</div>-->
    <!--      <div>3</div>-->
    <!--      <div>1</div>-->
    <!--      <div>2</div>-->
    <!--      <div>3</div>-->
    <!--    </LjjFlyBox>-->
    <!--    <LjjCountTo :startVal='0' :endVal='2017' :duration=4000 />-->
    <LjjEcharts
        :options="options"
    />
    <LjjEcharts
        :options="options2"
    />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Text',
  setup(props) {
    const options = ref({
      tooltip: {
        trigger: 'axis', // 触发类型, 显示类型, 触摸柱状图触发
        // 坐标轴指示器配置项。
        axisPointer: {
          // 指示器类型。触摸的时候显示阴影
          type: 'shadow'
        }
      },
      color: [
        'rgb(209,248,138)',
        'rgba(65,65,65,.5)'
      ],
      xAxis: {
        type: 'category',
        data: ['粉面粥店', '简餐便当', '汉堡披萨', '香锅冒菜', '小吃炸串', '地方菜系', '轻食简餐'],
        splitLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: 'rgb(98,105,113)',
          fontSize: 16
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: 'rgb(124,136,146)'
          }
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dotted'
          }
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: 'rgb(124,136,146)'
          }
        },
        axisLabel: {
          color: 'rgb(98,105,113)',
          fontSize: 16
        },
        axisTick: { show: false }
        // data: [
        //   [50, 29, 46, 88, 99, 69, 97],
        //   [50, 71, 54, 12, 1, 31, 3]
        // ]
      },
      series: [
        {
          type: 'bar',
          stack: 'total',
          barWidth: 40
          // data: [50, 29, 46, 88, 99, 69, 97]
        },
        {
          type: 'bar',
          stack: 'total',
          barWidth: 40
          // data2: [50, 71, 54, 12, 1, 31, 3]
        }
      ],
      dataset: {
        source: [
          ['指标', '国内', '海外'],
          ['粉面粥店', 50, 50],
          ['简餐便当', 29, 71],
          ['汉堡披萨', 46, 54],
          ['香锅冒菜', 88, 12],
          ['小吃炸串', 98, 2],
          ['地方菜系', 69, 31],
          ['轻食简餐', 90, 10]
        ]
      }
    })
    const options2 = ref({
      tooltip: {
        trigger: 'axis', // 触发类型, 显示类型, 触摸柱状图触发
        // 坐标轴指示器配置项。
        axisPointer: {
          // 指示器类型。触摸的时候显示阴影
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: ['粉面粥店', '简餐便当', '汉堡披萨', '香锅冒菜', '小吃炸串', '地方菜系', '轻食简餐']
      },
      color: [
        'rgb(209,248,138)',
        'rgba(65,65,65,.5)'
      ],
      yAxis: {},
      series: [
        {
          type: 'bar',
          name: '国内',
          stack: 'total',
          barWidth: 40,
          data: [50, 29, 46, 88, 98, 69, 90]
        },
        {
          type: 'bar',
          name: '海外',
          stack: 'total',
          barWidth: 40,
          data: [50, 71, 54, 12, 2, 31, 10]
        }
      ]
    })
    return {
      options,
      options2
    }
  }
}
</script>

<style scoped>
.fly-box {
  background: #333;
}
</style>
