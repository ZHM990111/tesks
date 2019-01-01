<template>
    <div class="home">
        <div class="foot">
            <router-link :to="{name:'Find'}">
                <i id="icon" class="iconfont icon-faxian"></i>
                <span>发现</span>
            </router-link>
            <router-link :to="{name:'Video'}">
                <i id="icon" class="iconfont icon-shipin"></i>
                <span>视频</span>
            </router-link>
            <router-link :to="{name:'Mine'}">
                <i id="icon" class="iconfont icon-yinle"></i>
                <span>我的</span>
            </router-link>
            <router-link :to="{name:'Friend'}">
                <i id="icon" class="iconfont icon-pengyou"></i>
                <span>交友</span>
            </router-link>
            <router-link :to="{name:'Account'}">
                <i id="icon" class="iconfont icon-wode"></i>
                <span>账号</span>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
}
.top {
  width: 100%;
  height: 250px;
  background: rgb(36, 35, 35);
}
.topsearch {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}
.iconfont {
  color: #fff;
  font-size: 20px;
}
input {
  flex: 1;
  height: 30px;
  margin: 0 10px;
  border-radius: 30px;
  border: 0;
}
input::-webkit-input-placeholder {
  color: #666;
  font-size: 1.2em;
  width: 180px;
  height: 36px;
  text-align: center;
}
.tab {
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: rgb(204, 197, 197);
  font-size: 16px;
  margin-top: 10px;
}
a{
  text-decoration: none;
  color: rgb(204, 197, 197);
}
.count {
  width: 100%;
}
.foot {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #eee;
  display: flex; 
}
.foot>a{
    color: #000;
    display: inline-block;
    width: 20%;
    text-align: center;
}
#icon{
    color: #000;
    display: inline-block;
    font-size: 20px;
}
span{
    display: block;
}
</style>
