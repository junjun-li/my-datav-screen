<template>
  <div class="center-header">
    <div class="center-header-wrapper">
      <div
          v-for="(item, index) in headerData"
          :key="index"
          class="center-header-item"
      >
        <div class="center-header-left">
          <div class="bg">
            <div
                :style="{backgroundImage: `url('${item.img}')`}"
                class="img"
            />
          </div>
        </div>
        <div class="center-header-right">
          <div class="title">{{ item.title }}</div>
          <div class="sub-title">{{ item.subTitle }}</div>
          <div class="total">
            <LjjCountTo
                :duration="1000"
                :end-val="item.endVal"
                :start-val="item.startVal"
                autoplay
                separator=","
            />
          </div>
        </div>
      </div>
    </div>
    <div class="project-wrapper">
      <div v-for="(item, index) in project"
           :key="index"
           class="project">
        <div class="project-img">
          <img :src="item.img">
        </div>
        <div class="project-text">{{ item.title }}</div>
        <div class="project-value">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
/* eslint-disable-next-line */
const headerMockData = {
  headerData: {
    value: [
      {
        title: '今日销售额',
        subTitle: 'Today\'s Sales Amount',
        startVal: 40041113,
        endVal: 40105335,
        img: 'https://www.youbaobao.xyz/datav-res/money.png'
      }, {
        title: '今日订单量',
        subTitle: 'Today\'s Total Orders',
        startVal: 2566778,
        endVal: 2570025,
        img: 'https://www.youbaobao.xyz/datav-res/order.png'
      }, {
        title: '今日交易用户数',
        subTitle: 'Today\'s Payed Users',
        startVal: 271744,
        endVal: 272200,
        img: 'https://www.youbaobao.xyz/datav-res/member.png'
      }, {
        title: '今日新增用户数',
        subTitle: 'Today\'s New Users',
        startVal: 1286552,
        endVal: 1289057,
        img: 'https://www.youbaobao.xyz/datav-res/follow.png'
      }]
  },
  project: {
    value: [{
      title: '转化率',
      value: '13.16%',
      img: 'https://www.youbaobao.xyz/datav-res/success.png'
    }, {
      title: '退单率',
      value: '5.73%',
      img: 'https://www.youbaobao.xyz/datav-res/failed.png'
    }]
  }
}
export default {
  name: 'centerHeader',
  props: {
    data: Object
  },
  setup(props) {
    const project = ref([
      {
        title: '转化率',
        value: '13.16%',
        img: 'https://www.youbaobao.xyz/datav-res/success.png'
      },
      {
        title: '退单率',
        value: '5.73%',
        img: 'https://www.youbaobao.xyz/datav-res/failed.png'
      }
    ])
    const headerData = ref([
      {
        title: '今日销售额',
        subTitle: 'Today\'s Sales Amount',
        startVal: 40041113,
        endVal: 40105335,
        img: 'https://www.youbaobao.xyz/datav-res/money.png'
      },
      {
        title: '今日订单量',
        subTitle: 'Today\'s Total Orders',
        startVal: 2566778,
        endVal: 2570025,
        img: 'https://www.youbaobao.xyz/datav-res/order.png'
      },
      {
        title: '今日交易用户数',
        subTitle: 'Today\'s Payed Users',
        startVal: 271744,
        endVal: 272200,
        img: 'https://www.youbaobao.xyz/datav-res/member.png'
      },
      {
        title: '今日新增用户数',
        subTitle: 'Today\'s New Users',
        startVal: 1286552,
        endVal: 1289057,
        img: 'https://www.youbaobao.xyz/datav-res/follow.png'
      }
    ])
    return {
      project,
      headerData
    }
  }
}
</script>

<style lang="scss"
       scoped>
.center-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(66, 68, 70);
  padding: 0 40px;
  box-sizing: border-box;

  .center-header-wrapper {
    display: flex;

    .center-header-item {
      flex: 1;
      display: flex;

      .center-header-left {
        .bg {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 185px;
          height: 185px;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-color: rgb(131, 167, 72);
          border-radius: 50%;

          .img {
            width: 60%;
            height: 60%;
            border-radius: 50%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
      }

      .center-header-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 40px;
        width: 410px;

        .title {
          font-size: 32px;
        }

        .sub-title {
          font-size: 16px;
          letter-spacing: 1px;
          margin-top: 10px;
        }

        .total {
          font-family: DIN;
          font-size: 56px;
          font-weight: bolder;
          letter-spacing: 2px;
          margin-top: 10px;
        }
      }
    }
  }

  .project-wrapper {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .project {
      display: flex;
      flex-direction: column;
      align-items: center;

      .project-img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90px;
        height: 90px;
      }

      img {
        width: 100%;
        height: 100%;
      }

      .project-text {
        font-size: 18px;
        margin-top: 10px;
      }

      .project-value {
        font-size: 28px;
        font-weight: 700;
        margin-top: 5px;
      }
    }
  }
}
</style>
