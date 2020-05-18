<template>
  <transition name="s-message-fade" @after-leave="handleAfterLeave">
    <div :class="['s-message', _props._type]" :style="positionStyle" v-if="_props._visible">
      <span>{{_props._text}}</span>
      <span class="close yimi-icon icon-delete" @click="()=>{_props._visible = false}"></span>
    </div>
  </transition>
</template>
<script>
import { reactive, onMounted } from 'vue'
export default {
  props: {
    // 文字
    text: {
      type: String,
      default: ''
    },
    // 类型：[info,success,warning,danger]
    type: {
      type: String,
      default: 'success'
    },
    // 是否可见
    visible: {
      type: Boolean,
      default: false
    },
    // message存在时间
    duration: {
      type: Number,
      default: 2000
    },
    // message  id
    id: {
      type: Number,
      default: 1
    },
    // 存在message数量
    num: {
      type: Number,
      default: 0
    }
  },
  setup (props) {
    const _props = reactive({
      _text: props.text,
      _type: props.type,
      _visible: props.visible,
      _duration: props.duration,
      _id: props.id
    })
    // 定位
    const positionStyle = reactive({
      top: 36 + props.num * 50 + 'px'
    })
    // 挂载后执行
    onMounted(() => {
      _props._visible = true
      setTimeout(() => {
        _props._visible = false
      }, _props._duration)
    })
    // message关闭回调
    const handleAfterLeave = () => {
      // 移除挂载点
      document.body.removeChild(document.querySelector(`#s-message-${_props._id}`))
    }
    return { _props, handleAfterLeave, positionStyle }
  }
}
</script>

<style lang="scss" scoped>
@import url('./font/iconfont.css');
*{
  box-sizing: border-box;
}
.s-message {
  position: fixed;
  left: 50%;
  background: #ccc;
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
  &.info {
    background: #909399;
  }
  &.success {
    background: #67C23A;
  }
  &.warning {
    background: #E6A23C;
  }
  &.danger {
    background: #F56C6C;
  }
  .close{
    margin-left: 5px;
    cursor: pointer;
  }
}

.s-message-fade-enter-active, .s-message-fade-leave-active {
  transition: all .5s;
}
.s-message-fade-enter-from, .s-message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
