<template>
    <div>
        <img
            src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545733400&di=c4ee2b898ab6fe6489f4d6157e2b46b9&src=http://images.missyuan.com/attachments/day_150720/20150720_5b9a08266c6270e1a2e34EcsPPESCPec.jpg"
            alt=""
        >
        <router-link to='/phone'>
            <button>手机号登录</button>
        </router-link>
        <button>注册</button>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
button{
    width: 80%;
    height: 30px;
    border:1px solid red;
    border-radius: 30px;
    margin-top: 20px;
    background: #fff;
}
</style>
