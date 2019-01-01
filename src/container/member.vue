<template>
    <div class="member">
        <div class="top">
            <p>
                <router-link :to="{name:'Account'}">
                    <i class="iconfont icon-xiangzuo"></i>
                </router-link>
            </p>
            <p>会员中心</p>
            <p>
                <i class="iconfont icon-wode"></i>
                <i class="iconfont icon-paixingbang"></i>
            </p>
        </div>
        <div class="scroll">
            <img src="../img/2.jpg" alt="">
            <img src="../img/1.jpg" alt="">
            <img src="../img/4.jpg" alt="">
        </div>
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
            <li>
                <p>
                    <i class="iconfont icon-xuegao"></i>
                </p>
                <p>电台分类</p>
            </li>
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
            <li>
                <p>
                    <i class="iconfont icon-xuegao"></i>
                </p>
                <p>电台分类</p>
            </li>
        </ul>
        <div class="img">
            <img src="../img/vip.png" alt="">
        </div>
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
        <dl class="money">
            <dd>
                <p>会员曲库</p>
            </dd>
            <dt>
                <img src="../img/3.png" alt="">
            </dt>
        </dl>
        <dl class="start">
            <dt>
                <img src="../img/3.png" alt="">
            </dt>
            <dd>
                <h5>电视剧 你和我的倾城时光</h5>
            </dd>
        </dl>
    </div>
</template>

<script>
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";

export default {
  name: "Member",
  data() {
    return {
      swiperOption: {
        autoplay: false,
        speed: 1000
      }
    };
  }
};
</script>

<style lang='less' scoped>
.member {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .top {
    border-bottom: 1px solid #eee;
    width: 100%;
    height: 44px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    .iconfont {
      font-size: 22px;
    }
  }
  .scroll {
    display: flex;
    overflow-x: auto;
    margin-top: 20px;
    img {
      width: 350px;
      height: 220px;
      border-radius: 10px;
      margin-right: 10px;
    }
  }
}
a {
  text-decoration: none;
}
.icon {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
li {
  width: 20%;
  margin-top: 10px;
  text-align: center;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  p:first-child {
    width: 45px;
    height: 45px;
    background: rgb(243, 188, 188);
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    .iconfont {
      font-size: 22px;
      color: rgb(185, 114, 114);
    }
  }
  p:last-child {
    font-size: 14px;
    margin-top: 5px;
  }
}
.img {
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
  img {
    width: 100%;
    height: auto;
  }
}
.swiper-slide {
  width: 90%;
  img {
    border-radius: 20px;
    width: 360px;
    margin-left: 8px;
    height: 160px;
  }
}
.money {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 20px;
  box-sizing: border-box;
  p {
    font-weight: bold;
  }
  img {
    width: 80px;
    height: 80px;
  }
}
.start {
  width: 100%;
  display: flex;
  margin-top: 20px;
  padding: 10px;
  box-sizing: border-box;
  img {
    width: 140px;
    height: 140px;
  }
  dd{
      margin-left: 10px;
  }
  h5{
      font-size: 20px;
  }
}
</style>
