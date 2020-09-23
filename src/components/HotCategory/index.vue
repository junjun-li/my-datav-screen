<template>
  <div class="bar-chart">
    <div class="title-wrapper">
      <div class="left">
        <div class="title">当前热卖品类</div>
        <div class="sub-title">Hot Categories</div>
      </div>
<!--      <div class="right">-->
<!--        <div class="sub-title">最后更新时间：{{ date }} {{ time }}</div>-->
<!--      </div>-->
    </div>
    <div style="height: 220px;">
      <LjjEcharts :options="options"/>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

const hotCategoryMockData = {
  axisX: ['粉面粥店', '简餐便当', '汉堡披萨', '香锅冒菜', '小吃炸串', '地方菜系', '轻食简餐'],
  data1: [50, 29, 46, 88, 99, 69, 97],
  data2: [50, 71, 54, 12, 1, 31, 3]
}

export default {
  name: 'HotCategory',
  setup(ctx) {
    const options = ref({})
    const random = num => {
      return Math.floor(Math.random() * num)
    }

    const initChart = () => {
      let data1 = []
      for (let i = 0; i <= 7; i++) {
        data1.push(random(100))
      }
      let data2 = data1.map(item => 100 - item)
      options.value = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        color: [
          'rgb(209,248,138)',
          'rgba(65,65,65,.5)'
        ],
        grid: {
          // left: 50,
          // right: 0,
          // bottom: 30,
          // top: 20
        },
        // dataset: {
        //   source
        // },
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
        },
        xAxis: {
          type: 'category',
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
          },
          data: ['粉面粥店', '简餐便当', '汉堡披萨', '香锅冒菜', '小吃炸串', '地方菜系', '轻食简餐']

        },
        series: [
          {
            type: 'bar',
            stack: 'total',
            barWidth: 40,
            name: '国内',
            data: data1
          },
          {
            type: 'bar',
            stack: 'total',
            barWidth: 40,
            name: '海外',
            data: data2
          }
        ]
      }
    }
    onMounted(() => {
      initChart()
      setInterval(() => {
        initChart()
      }, 3000)
    })
    return {
      options
    }
  }
}
</script>

<style lang="scss"
       scoped>
.bar-chart {
  width: 100%;
  height: 100%;
  background: rgb(43, 44, 46);
  padding: 20px 40px;
  box-sizing: border-box;

  .title-wrapper {
    display: flex;

    .right {
      flex: 1;
      text-align: right;
    }

    .title {
      font-size: 32px;
    }

    .sub-title {
      font-size: 16px;
      margin-top: 10px;
    }
  }

  #average-age-chart3 {
    height: 220px;
  }
}
</style>
