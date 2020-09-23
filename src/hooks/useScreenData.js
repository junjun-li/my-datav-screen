import { onMounted, onUnmounted, ref } from 'vue'

const ageMockData = [
  {
    startValue: 0,
    value: 131107,
    axis: '0-20',
    color: 'rgb(116,166,49)'
  },
  {
    startValue: 0,
    value: 330831,
    axis: '20-30',
    color: 'rgb(190,245,99)'
  },
  {
    startValue: 0,
    value: 551238,
    axis: '30-50',
    color: 'rgb(202,252,137)'
  },
  {
    startValue: 0,
    value: 31088,
    axis: '>50',
    color: 'rgb(251,253,142)'
  }
]
const random = num => {
  return Math.floor(Math.random() * num)
}

const deviceMockData = {
  totalDevices: 1070909,
  devices: [{
    name: 'Android',
    value: 423676
  }, {
    name: 'iOS',
    value: 373581
  }, {
    name: 'PC',
    value: 273652
  }]
}

const genderMockData = [
  {
    key: '男性用户人数',
    value: 1442542
  },
  {
    key: '女性用户人数',
    value: 1442548
  }
]

/* eslint-disable-next-line */
const riderMockData = {
  axisX: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  orderData: {
    legend1: '去年骑手月人均接单',
    legend2: '今年骑手月人均接单',
    data1: ['330', '420', '560', '450', '610', '890', '720', '610', '580', '750', '770', '600'],
    data2: ['430', '510', '660', '550', '710', '990', '620', '550', '760', '810', '930', '720']
  },
  rateData: {
    legend1: '去年月新增骑手',
    legend2: '今年月新增骑手',
    data1: ['129', '223', '202', '197', '300', '112', '333', '249', '178', '322', '401', '167'],
    data2: ['179', '263', '282', '297', '330', '344', '222', '299', '190', '455', '566', '233']
  }
}

export default function () {
  const todayUser = ref(10000)
  const growthLastDay = ref(10)
  const growthLastMonth = ref(15)
  const ageData = ref(ageMockData)
  const averageAge = ref(0)
  const deviceData = ref(deviceMockData)
  const genderData = ref(genderMockData)
  const riderData = ref(riderMockData)
  let task
  onMounted(() => {
    task = setInterval(() => {
      todayUser.value = todayUser.value + Math.floor(Math.random() * (100 - 0))
      growthLastDay.value = growthLastDay.value + +(Math.random() * (10 - 1) + 1).toFixed(2)
      growthLastMonth.value = growthLastMonth.value + +(Math.random() * (10 - 2) + 2).toFixed(2)
      averageAge.value = averageAge.value + 1
      const newAgeData = ageMockData.map(item => {
        const value = item.value + random(100)
        return {
          ...item,
          value,
          startValue: item.value
        }
      })
      ageData.value = newAgeData
      // 年龄分布组件
      const _deviceMockData = { ...deviceMockData }
      _deviceMockData.totalDevices = deviceMockData.totalDevices + random(100)
      _deviceMockData.devices = _deviceMockData.devices.map(item => {
        const value = item.value + random(100)
        return {
          ...item,
          value
        }
      })
      deviceData.value = _deviceMockData
      // 性别mock
      const _genderData = [...genderData.value]
      _genderData.forEach(item => {
        item.value += random(100)
      })
      genderData.value = _genderData
    }, 3000)
  })
  onUnmounted(() => {
    task && clearInterval(task)
  })

  return {
    todayUser,
    growthLastDay,
    growthLastMonth,
    ageData,
    averageAge,
    deviceData,
    genderData,
    riderData
  }
}
