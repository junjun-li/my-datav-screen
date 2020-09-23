<template>
  <div class="average-age">
    <div class="title-wrapper">
      <div class="average-age-left">
        <div class="title">慕课外卖用户年龄分布&平均年龄</div>
        <div class="sub-title">Distribution of Age</div>
      </div>
      <div class="average-age-right">
        <div class="age">
          <LjjCountTo
              :decimals="2"
              :duration="1000"
              :end-val="avgAge"
              :start-val="startAge"
          />
          <span class="age-unit">岁</span>
        </div>
      </div>
    </div>
    <div id="average-age-chart">
      <LjjEcharts :options="options"></LjjEcharts>
    </div>
    <div class="average-data-wrapper">
      <div v-for="(item, index) in data"
           :key="index"
           class="average-data">
        <div class="average-data-value">
          <LjjCountTo
              :duration="1000"
              :end-val="item.value"
              :start-val="item.startValue"
          />
        </div>
        <div class="average-data-axis">
          <div :style="{background: item.color}"
               class="point"/>
          <div class="text">{{ item.axis }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'

// const color = ['rgb(116,166,49)', 'rgb(190,245,99)', 'rgb(202,252,137)', 'rgb(251,253,142)']

export default {
  name: 'AverageAge',
  props: {
    data: Array,
    avgAge: Number
  },
  setup(ctx) {
    const startAge = ref(0)
    const options = ref({})
    const updateChart = () => {
      const data = ['数量']
      const color = []
      const axis = ['指标']
      let maxValue = 0
      ctx.data.forEach(item => {
        data.push(+item.value)
        color.push(item.color)
        axis.push(item.axis)
        maxValue += (+item.value)
      })
      options.value = {
        tooltip: {
          textStyle: {
            fontSize: 28
          },
          padding: 10
        },
        color,
        // 设置位置
        grid: {
          left: 40,
          right: 40,
          top: 0
        },
        // 数据集, 也可以不使用这个, 把数据单独放在xAxis和yAxis当中
        dataset: {
          source: [
            axis,
            data
          ]
        },
        xAxis: {
          type: 'value',
          max: maxValue,
          // 很长的 一根线
          splitLine: { show: false },
          // 小短线
          axisTick: { show: false },
          // x轴的 label
          axisLabel: {
            color: 'rgb(98,105,113)',
            fontSize: 18
          },
          // label上面的一根线
          axisLine: {
            lineStyle: {
              // color: 'red',
              color: 'rgb(50,51,53)',
              width: 3
            }
          }
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            type: 'bar',
            stack: 'total',
            barWidth: 15
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
      }
    }
    watch(() => ctx.avgAge, (nextValue, prevValue) => {
      startAge.value = prevValue
    })
    watch(() => ctx.data, () => {
      updateChart()
    })
    onMounted(() => {
      updateChart()
    })
    return {
      startAge,
      options
    }
  }
}
</script>

<style lang="scss"
       scoped>
.average-age {
  width: 100%;
  height: 100%;
  background: rgb(43, 44, 46);
  padding: 20px 40px;
  box-sizing: border-box;

  .title-wrapper {
    display: flex;
    align-items: center;

    .average-age-left {
      .title {
        font-size: 32px;
      }

      .sub-title {
        font-size: 16px;
        margin-top: 10px;
      }
    }

    .average-age-right {
      flex: 1;
      margin-left: 40px;
      font-weight: bold;

      .age {
        font-size: 68px;
        font-family: DIN;

        .age-unit {
          font-size: 20px;
        }
      }
    }
  }

  #average-age-chart {
    height: 120px;
  }

  .average-data-wrapper {
    display: flex;

    .average-data {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      font-weight: bolder;

      .average-data-value {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }

      .average-data-axis {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 5px;

        .point {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .text {
          margin-left: 10px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
