<template>
  <div class="home">
    <button @click="click">button</button>
    <s-timeline :list="list"></s-timeline>
  </div>
</template>

<script>
import { message } from '../components/message/index'
import sTimeline from '../components/timeline/Main'
export default {
  name: 'Home',
  components: {
    sTimeline
  },
  setup () {
    const list = [{}, {}, {}]
    return { click, list }
  }
}
function click () {
  message({ text: '11111111111111111111111', type: 'danger' })
}
</script>
<style lang="scss" scoped>
button{
  position: absolute;
  top: 10px;
  left: 10px;
}
.s-timeline{
  width: 500px;
  margin: 0 auto;
}
</style>
