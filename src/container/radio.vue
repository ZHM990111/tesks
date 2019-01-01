<template>
    <div class="record">
        <swiper :options="swiperOption">
            <swiper-slide>
                <img src="../img/4.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../img/5.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../img/6.jpg" alt="">
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
            <p class="now">今日优选</p>
            <p>
                <i class="iconfont icon-xuegao"></i>
                <span>换一换</span>
            </p>
        </div>
        <div class="today">
            <dl>
                <dt>
                    <img src="../img/4.png" alt="">
                </dt>
                <dd>
                    <h4>末那大叔</h4>
                    <p>节目</p>
                    <p>愿你的故事有人听</p>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="../img/5.png" alt="">
                </dt>
                <dd>
                    <h4>末那大叔</h4>
                    <p>节目</p>
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
  name: "Radio",
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
  height: 100%;
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
  display: flex;
  justify-content: space-between;
  .now {
    font-weight: bold;
    font-size: 16px;
  }
  p {
    .iconfont {
      font-size: 14px;
    }
  }
}
dl{
    width: 100%;
    margin-top: 10px;
    box-sizing: border-box;
    display: flex;
    dt{
        img{
            width: 100px;
            height: 100px;
        }
    }
    dd{
        flex: 1;
        margin-left: 10px;
        margin-top: 10px;
    }
}
</style>

