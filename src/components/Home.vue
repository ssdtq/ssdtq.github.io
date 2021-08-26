<template>
  <h1>Home</h1>
  <router-link
    v-for="(item, index) in BlogList"
    :key="index"
    :to="'/blog/' + item.id"
  >
    我的博客{{ item.title }}<br />
  </router-link>
  <hr />
  <h1>防抖</h1>
  <h5>防抖可以防止抖动</h5>
  <button @click="debounce(500)">请点击</button>
  <hr />
  <h1>节流</h1>
  
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let BlogList = [
      { id: 1, title: "学习Html" },
      { id: 2, title: "学习Css" },
      { id: 3, title: "学习Javascript" },
      { id: 4, title: "学习Vue" },
      { id: 5, title: "学习node" },
      { id: 6, title: "学习webpack" },
    ];
    // function myClick() {
    //   let timer = null;
    //   let func = debounce(500)
    //   func()
    // }
    let timer = ref(null)
    function debounce(delay) {
      return (function () {
        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          console.log("1");
        }, delay);
      })()
    }
    return {
      BlogList,
      // myClick,
      timer,
      debounce,
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
