import { createApp } from 'vue'
import messageVDom from './message.vue'
// message id
let id = 0
// 当前所有message
let instances = []
export function message ({ text, type = 'success', duration = 2000 }) {
  // 重置计数
  if (id > 999) {
    id = 0
  }
  // 创建挂载点
  const dom = document.createElement('div')
  dom.id = `s-message-${++id}`
  document.body.appendChild(dom)
  // 创建vue实例
  const temp = createApp(messageVDom, { text, type, duration, id, num: instances.length })
  // 挂载vue实例
  const instance = temp.mount(`#${dom.id}`)
  // 保存message
  instances.push(instance)
  // 重写message关闭回调
  instance.handleAfterLeave = () => {
    // 移除当前message
    instances = instances.filter(val => {
      return val !== instance
    })
    // 重新计数所有message位置
    instances.forEach((val, i) => {
      val.positionStyle.top = 36 + i * 50 + 'px'
    })
    // 移除挂载点
    document.body.removeChild(document.querySelector(`#s-message-${instance._props._id}`))
  }
}
