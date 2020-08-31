import { onMounted, onUnmounted, ref } from 'vue'

export default function () {
  const todayUser = ref(10000)
  const growthLastDay = ref(10)
  const growthLastMonth = ref(15)
  // Math.floor(Math.random() * (100 - 0))
  let task
  onMounted(() => {
    task = setInterval(() => {
      todayUser.value = todayUser.value + Math.floor(Math.random() * (100 - 0))
      growthLastDay.value = growthLastDay.value + +(Math.random() * (10 - 1) + 1).toFixed(2)
      growthLastMonth.value = growthLastMonth.value + +(Math.random() * (10 - 2) + 2).toFixed(2)
    }, 3000)
  })
  onUnmounted(() => {
    task && clearInterval(task)
  })

  return {
    todayUser,
    growthLastDay,
    growthLastMonth
  }
}
