<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'Home',
  setup () {
    const store = useStore()
    store.dispatch('getArticleListAll', {}).then(res => {
      console.log(res)
    })
  }
}
</script>
