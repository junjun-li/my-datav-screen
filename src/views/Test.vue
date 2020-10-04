<template>
  <div class="test">
    <LjjBaseScrollList
        :config="config"
    />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Test',
  setup(props) {
    const headerData = ref([])
    const headerStyle = ref([])
    const rowStyle = ref([])
    const config = ref({})
    const data = []
    const rowBg = ['rgb(255,255,255)', 'rgb(207,205,205)']
    const aligns = ['center', 'center', 'center']
    const headerFontSize = 24
    const rowFontSize = 20
    for (let i = 0; i < 10; i++) {
      data.push([
        `同学${i + 1}`,
        Math.floor(Math.random() * 10 + 20),
        Math.floor(Math.random() * 10000 + 10000)
      ])
    }

    headerData.value = ['姓名', '年龄', '薪资']
    headerStyle.value = [{ color: 'red' }]
    rowStyle.value = [{
      color: 'DeepPink',
      fontWeight: 700
    }]
    config.value = {
      headerData,
      headerStyle,
      rowStyle,
      headerBg: 'rgb(80,80,80)',
      headerHeight: 40,
      headerIndex: true,
      rowsData: data,
      rowBg,
      aligns
    }
    return {
      headerData,
      headerStyle,
      config,
      headerFontSize,
      rowFontSize
    }
  }
}
</script>

<style lang="scss"
       scoped>
.test {
  width: 800px;
  height: 400px;
}
</style>
