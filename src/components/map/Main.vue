<template>
  <div id="china-map" class="s-map"></div>
</template>
<script>
import { draw } from './index'
import { onMounted } from 'vue'
export default {
  setup () {
    onMounted(() => {
      draw()
    })
  }
}
</script>
