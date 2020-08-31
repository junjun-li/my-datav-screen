<template>
  <div class="home">
    <LjjLoading class="loading"
                v-if="isShowLoading">
      <div class="loading-text">数据加载中...</div>
    </LjjLoading>
    <LjjContainer :options="{width:3840,height: 2160}"
                  v-else>
      <div class="header">
        <TopHeader/>
      </div>
<!--      <div class="separator"></div>-->
      <div class="center">
        <div class="left">
          <div class="left1">
            <TotalUser :growth-last-day="growthLastDay"
                       :growth-last-month="growthLastMonth"
                       :today-user="todayUser"/>
          </div>
          <div class="left2">444</div>
          <div class="left3">555</div>
          <div class="left4">666</div>
          <div class="left5">777</div>
          <div class="left6">888</div>
        </div>
        <div class="right">
          <div class="right-top1">right-top1</div>
          <div class="right-top2">right-top2</div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">right-left1</div>
              <div class="right-left2">right-left2</div>
              <div class="right-left3">right-left3</div>
              <div class="right-left4">right-left4</div>
            </div>
            <div class="right-right">
              <div class="right-right1">right-right1</div>
              <div class="right-right2">right-right2</div>
            </div>
          </div>
        </div>
      </div>
    </LjjContainer>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import TopHeader from '@/components/TopHeader/index'
import TotalUser from '@/components/TotalUser/index'
import useScreenData from '@/hooks/useScreenData'

export default {
  name: 'Home',
  components: {
    TopHeader,
    TotalUser
  },
  setup() {
    const isShowLoading = ref(true)
    onMounted(() => {
      setTimeout(() => {
        isShowLoading.value = false
      }, 100)
    })

    return {
      isShowLoading,
      ...useScreenData()
    }
  }
}
</script>
<style lang="scss"
       scoped>
.home {
  // transform: scale(.5);  突破浏览器最小12像素的限制
  // scale可以接受两个参数 X轴的缩放和Y轴的缩放
  // 1280 / 3840 , 217 / 2160
  //transform: scale(.5);
  width: 100%;
  height: 100%;
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;
  position: relative;
  .loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .loading-text {
    font-size: 14px;
  }
  .ljj-container {
    display: flex;
    flex-direction: column;

    .header {
      height: 167px;
      margin: 10px 10px 10px 10px;
      //background: #22430b;
    }

    .separator {
      height: 10px;
      margin: 0 10px;
      background: #5c5859;
    }

    .center {
      flex: 1;
      display: flex;

      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        width: 860px;
        height: 100%;
        margin: 0 10px;
        box-sizing: border-box;
        background: rgb(60, 61, 64);
        justify-content: space-between;
        //.left1, .left2, .left3, .left4, .left5, .left6 {
        //  padding-bottom: 20px;
        //}

        .left1 {
          height: 300px;
          background: green;
        }

        .left2 {
          height: 320px;
          background: #1f66dd;
        }

        .left3 {
          height: 280px;
          background: #dd711f;
        }

        .left4 {
          height: 230px;
          background: #2a4323;
        }

        .left5 {
          height: 360px;
          background: #45829b;
        }

        .left6 {
          height: 360px;
          background: #7950bc;
        }
      }

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0 10px;
        max-width: 2960px;
        overflow: hidden;

        .right-top1 {
          height: 206px;
          margin-bottom: 20px;
          background: khaki;
        }

        .right-top2 {
          height: 48px;
          margin-bottom: 20px;
          background: maroon;
        }

        .right-bottom {
          flex: 1;
          display: flex;

          .right-left {
            display: flex;
            flex-direction: column;
            width: 1917px;

            .right-left1 {
              height: 999px;
              background: #0b3c9f;
            }

            .right-left2 {
              height: 80px;
              margin-top: 20px;
              box-sizing: border-box;
              background: #35753e;
            }

            .right-left3 {
              height: 350px;
              margin-top: 10px;
              background: #7c17cf;
              .dv-border-box-8 {
                width: 100%;
                height: 100%;
                padding: 5px;
                box-sizing: border-box;
                background: rgb(66, 68, 70);
                border-radius: 10px;
                box-shadow: 10px 10px 10px rgba(0, 0, 0, .3);
              }
            }

            .right-left4 {
              //height: 220px;
              flex: 1;
              background: #5f2009;
              margin-top: 10px;
            }
          }

          .right-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-left: 10px;

            .right-right1 {
              width: 100%;
              height: 999px;
              padding-right: 10px;
              box-sizing: border-box;
              background: salmon;
            }

            .right-right2 {
              flex: 1;
              width: 100%;
              //height: 650px;
              margin-top: 20px;
              background: #7a180e;
            }
          }
        }
      }
    }
  }
}

</style>
