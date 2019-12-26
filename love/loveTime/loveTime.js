const util = require("../../utils/util");
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData: [
      { img: '../../style/img/ji.png', selectImg: '../../style/img/ji_red.png', txt: '纪念日', active: 0 },
      { img: '../../style/img/love_time.png', selectImg: '../../style/img/love_time_red.png', txt: '时光', active: 1 }
    ],
    showModalStatus: false,
    scrollLeft: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var that = this
    util.mustlogin(function(data) {
      console.log('时光啊时光')
    })
  },

  onShow() {
    this.setData({
      scrollLeft: 0
    })
    console.log(this.data.scrollLeft)
  },

  uploadPic() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(res)
        wx.uploadFile({
          url: 'http://129.204.43.43:9010/minio/love/', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = res.data
            console.log(res)
            //do something
          }
        })
      }
    })
  },

  powerDrawer(e) {
    this.setData({
      showModalStatus: true
    })
    var currentStatus = e.currentTarget.dataset.status;
    this.onAnimate(currentStatus)
  },

  isok(e) {
    console.log(e)
  },

  onAnimate(currentStatus) {
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200,  //动画时长
      timingFunction: "linear", //线性
      delay: 0  //0则不延迟
    });
    // 第2步：这个动画实例赋给当前的动画实例
    this.animation = animation;
    // 第3步：执行第一组动画：Y轴偏移240px后(盒子高度是240px)，停
    animation.translateY(240).step();
    // 第4步：导出动画对象赋给数据对象储存
    this.setData({
      animationData: animation.export()
    })
    // 第5步：设置定时器到指定时候后，执行第二组动画
    setTimeout(function () {
      // 执行第二组动画：Y轴不偏移，停
      animation.translateY(0).step()
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
      this.setData({
        animationData: animation
      })

      //关闭抽屉
      if (currentStatus == "close") {
        this.setData({
            showModalStatus: false
          });
      }
    }.bind(this), 200)

    // 显示抽屉
    if (currentStatus == "open") {
      this.setData({
        showModalStatus: true
      });
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})