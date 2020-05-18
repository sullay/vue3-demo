<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
