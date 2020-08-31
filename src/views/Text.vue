<template>
  <div>
    <SvgAnimation></SvgAnimation>
    <LjjFlyBox class="fly-box"
               style="width:50%">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </LjjFlyBox>
    <LjjFlyBox class="fly-box">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </LjjFlyBox>
    <LjjCountTo :startVal='0' :endVal='2017' :duration=4000 />
  </div>
</template>

<script>
export default {
  name: 'Text'
}
</script>

<style scoped>
.fly-box{
  background: #333;
}
</style>
