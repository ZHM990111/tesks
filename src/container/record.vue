<template>
    <div class="record">
        <swiper :options="swiperOption">
            <swiper-slide>
                <img src="../img/1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../img/2.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../img/3.jpg" alt="">
            </swiper-slide>
        </swiper>
        <ul class="icon">
            <li>
                <p>
                    <i class="iconfont icon-fenleigongnengleimu"></i>
                </p>
                <p>电台分类</p>
            </li>
            <li>
                <p>
                    <i class="iconfont icon-diantaizhibo"></i>
                </p>
                <p>电台分类</p>
            </li>
            <li>
                <p>
                    <i class="iconfont icon-disk"></i>
                </p>
                <p>电台分类</p>
            </li>
            <li>
                <p>
                    <i class="iconfont icon-xuegao"></i>
                </p>
                <p>电台分类</p>
            </li>
        </ul>
        <div class="list">
            <b>今日优选</b>
        </div>
        <div class="today">
            <dl>
                <dt>
                    <img src="../img/1.png" alt="">
                </dt>
                <dd>
                    <p>愿你的故事有人听</p>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="../img/2.png" alt="">
                </dt>
                <dd>
                    <p>愿你的故事有人听</p>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="../img/3.png" alt="">
                </dt>
                <dd>
                    <p>愿你的故事有人听</p>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "Record",
  data() {
    return {
      swiperOption: {
        autoplay: true,
        speed: 1000
      }
    };
  }
};
</script>

<style lang='less' scoped>
.record {
  width: 100%;
  margin-top: 30px;
}
.swiper-container,
.swiper-wrapper,
.swiper-slide {
  width: 100%;
}
img {
  width: 360px;
  margin-left: 8px;
  height: 160px;
}
.icon {
  width: 100%;
  margin-top: 20px;
  display: flex;
}
li {
  flex: 1;
  text-align: center;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  p:first-child {
    width: 50px;
    height: 50px;
    background: rgb(36, 35, 35);
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    .iconfont {
      font-size: 22px;
      color: rgb(204, 197, 197);
    }
  }
  p:last-child {
    font-size: 14px;
    margin-top: 5px;
  }
}
.list {
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  .iconfont {
    display: inline-block;
  }
}
.today {
  width: 100%;
  display: flex;
  dl {
    width: 30%;
    img{
        width: 100%;
        height: auto;
    }
  }
}
</style>

