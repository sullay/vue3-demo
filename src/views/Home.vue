<template>
  <div class="home">
    <button @click="click">button</button>
  </div>
</template>

<script>
import { message } from '../components/message/index'
export default {
  name: 'Home',
  setup () {
    function click () {
      message({ text: '11111111111111111111111', type: 'danger' })
    }
    return { click }
  }
}
</script>
<style lang="scss" scoped>
button{
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
