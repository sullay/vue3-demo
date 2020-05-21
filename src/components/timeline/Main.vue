<template>
  <div class="s-timeline">
    <div class="s-timeline-item" v-for="(val,i) in list" :key="i">
      <div v-if="i!==list.length-1" class="s-timeline-item-tail"></div>
      <div class="s-timeline-item-node"></div>
      <div class="s-timeline-item-wrapper">
        1111111111111111111111
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: Array
  },
  setup () {

  }
}
</script>
<style lang="scss" scoped>
.s-timeline{
  .s-timeline-item{
    position: relative;
    padding-bottom: 20px;
    .s-timeline-item-tail{
      position: absolute;
      left: 4px;
      height: 100%;
      border-left: 2px solid #e4e7ed;
    }
    .s-timeline-item-node{
      position: absolute;
      // background-color: #e4e7ed;
      background-image: url("./img/笑脸.svg");
      background-position: center;
      background-size: 100%;

      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      left: -1px;
      width: 12px;
      height: 12px;
    }
    .s-timeline-item-wrapper{
      position: relative;
      padding-left: 28px;
      top: -3px;
      text-align: left;
    }
  }
}
</style>
