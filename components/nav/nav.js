// components/nav/nav.js

const util = require("../../utils/util");

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nav: {
      type: Array
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onNav(e) {
      let txt = e.currentTarget.dataset.txt
      // let idx = util.indexOf_array(txt, this.data.navData, 'txt')
      // this.data.navData.map((item, index) => { 
      //   this.setData({
      //     ['navData[' + index + '].active']: 0 // 所有active为0
      //   })
      // })
      // this.setData({
      //   ['navData[' + idx + '].active']: 1
      // })
      if (txt == '纪念日') {
        wx.reLaunch({
          url: '/love/annivery/annivery'
        })
      } else if (txt == '时光') {
        wx.reLaunch({
          url: '/love/loveTime/loveTime'
        })
      }
    }
  }
})
