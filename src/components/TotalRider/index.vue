<template>
  <div class="line-chart">
    <div class="title-wrapper">
      <div class="title">慕课外卖骑手概况</div>
      <div class="sub-title">Rider Growth rate</div>
    </div>
    <LjjEcharts id="average-age-chart2"
                :options="options"></LjjEcharts>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

// const colors = ['rgb(209,248,139)', 'rgb(115,201,245)', 'rgb(124,136,146)']

export default {
  name: 'TotalRider',
  // props: {
  //   data: Object
  // },
  setup(ctx) {
    const options = ref({})
    const random = num => {
      return Math.floor(Math.random() * num)
    }
    const mockDate = () => {
      const data = []
      for (let i = 0; i <= 12; i++) {
        data.push(random(300))
      }
      return data
    }
    const updateChart = () => {
      options.value = {
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#697580'
          },
          axisLine: {
            lineStyle: {
              color: '#697580'
            }
          },
          axisPointer: {
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        yAxis: {
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#697580'
          },
          axisLine: {
            lineStyle: {
              color: '#697580'
            }
          },
          splitLine: {
            lineStyle: {
              type: 'dotted'
            }
          },
          axisPointer: {
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        series: [
          {
            name: '去年骑手月人均接单',
            type: 'line',
            data: mockDate(),
            smooth: true,
            symbol: 'none',
            color: '#D9F698'
          },
          {
            name: '今年骑手月人均接单',
            type: 'line',
            data: mockDate(),
            smooth: true,
            symbol: 'none',
            color: '#87C7F1'
          }
        ],
        legend: {
          show: true,
          right: '10%',
          icon: 'rect',
          textStyle: {
            color: '#697580',
            fontWeight: 'bold'
          }
        }
      }
    }
    onMounted(() => {
      updateChart()
      setInterval(() => {
        updateChart()
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
.line-chart {
  width: 100%;
  height: 100%;
  background: rgb(43, 44, 46);

  .title-wrapper {
    padding: 20px 40px 0;
    box-sizing: border-box;

    .title {
      font-size: 32px;
    }

    .sub-title {
      font-size: 16px;
      margin-top: 10px;
    }
  }

  #average-age-chart2 {
    width: 100%;
    height: 250px;
  }
}
</style>
