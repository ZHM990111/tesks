<template>
    <div class='phone'>
        <input type="text" placeholder="手机号" v-model="phone">
        <input type="password" placeholder="密码" v-model="pass">
        <button @click="submit">登录</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      pass: ''
    };
  },
  methods: {
    submit() {
      if(this.phone==='17600209240'&&this.pass==='xmm'){
        alert('登录成功')
        this.$router.push('/home')
        
      } else if(this.phone!=='17600209240'){
        alert('号码错误，请重新输入')
      } else if(this.pas!=='xmm'){
        alert('密码错误，请重新输入')
      } 
    }
  }
};
</script>

<style scoped>
input {
  width: 80%;
  height: 30px;
  border: 1px solid red;
  border-radius: 30px;
  margin-top: 20px;
  text-indent: 10px;
}
button {
  display: block;
  width: 80%;
  height: 30px;
  border-radius: 30px;
  margin-top: 20px;
  background: rgb(151, 148, 148);
}
.phone{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
