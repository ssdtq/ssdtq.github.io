<template>
  <h1>Login</h1>
  <form @submit.prevent="loginIn">
    <label >用户名：</label>
    <input type="text" v-model="username"> <br />
    <label >密码： </label>
    <input type="password" v-model="password"> <br />
    <button>登录</button>
  </form>

</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    let username = ref('')
    let password = ref('')
    const router = useRouter()
    function loginIn () {
      if( username.value === 'admin' && password.value === '123456') {
        // console.log(username, password)
        router.push('/')
        localStorage.setItem('token', '111')
      }else {
        alert('登录用户名、密码错误!')
      }
    }
    return {
      username,
      password,
      loginIn
    }
  }
}
</script>

<style scoped>
body {
  background: cyan;
}
h1 {
  text-align: center;
}
</style>