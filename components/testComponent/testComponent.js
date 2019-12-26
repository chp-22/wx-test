// components/nav/nav.js

const util = require("../../utils/util");

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    testData: {
      type: String,
      observer: function (a, b) {
        console.log('数据1：', b)
        console.log('数据2：', a)
      }
    }
  },

  lifetimes: {
    created: function () {
      console.log(this.data.oberser_data2.newVal)
      // 组件实例化，但节点树还未导入，因此这时不能用setData
    },
    attached: function () {
      // 在组件实例进入页面节点树时执行 
      // 节点树完成，可以用setData渲染节点，但无法操作节点
    },
    ready: function () {
      // 组件布局完成，这时可以获取节点信息，也可以操作节点
    },
    move: function () {
      // 组件实例被移动到树的另一个位置
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  externalClasses: ['out_class'], // 外部引用样式

  observers: {
    'oberser_data'(data) {
      console.log('数据发生了变化', data)
    },
    'oberser_data.newVal'(data) {
      console.log('第二个数据发生了变化', data)
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    oberser_data: '初始数据',
    oberser_data2: {
      'newVal': '深度数据'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onDown() {
      this.setData({
        oberser_data: '改变的数据',
        ["oberser_data2.newVal"]: '第二个改变的数据'
      })
    }
  }
})
