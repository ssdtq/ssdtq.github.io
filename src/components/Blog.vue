<template>
  <h1>Blog</h1> <router-link to="/">首页</router-link>
  <h2>博客详情:{{ $route.params.id }}</h2>
  <p>{{ blogContent }}</p>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup () {
    let blogContent = ref('')
    const route = useRoute()
    onMounted (() => {
      let id = route.params.id
      getBlogDataById(id)
      console.log(blogContent)
    })
    function getBlogDataById(id) {
      switch(id) {
        case '1': blogContent.value = "切图必备技能";break;
        case "2": blogContent.value = "JavaAScript很重要";break;
        case "3": blogContent.value = "node是前端开发的运行环境";break;
        case "4": blogContent.value = "组件化模块化开发";break;
        case "5": blogContent.value = "终归要会的";break;
        case "6": blogContent.value = "我服了";break;
      }
    }
    return {
      blogContent,
      getBlogDataById
      }
  }
}
</script>

<style scoped>

</style>