<template>
    <div class="top">
        <div class="topsearch">
            <i class="iconfont icon-huatong"></i>
            <input type="text" placeholder="猜你喜欢">
            <i class="iconfont icon-paixingbang"></i>
        </div>
        <div class="tab">
            <p>
                <router-link :to="{name:'Record'}">个性推荐</router-link>
            </p>
            <p>
                <router-link :to="{name:'Radio'}">个性推荐</router-link>
            </p>
        </div>
        <div class="count">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: "Find"
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
a {
  text-decoration: none;
  color: rgb(204, 197, 197);
}
.count {
  width: 100%;
}
</style>

