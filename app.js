//app.js
App({

  isLowVer: function () {
    wx.hideToast();
    wx.showModal({
      title: '提示',
      content: '当前微信版本过低，系统无法正常使用，请升级到最新微信版本后重试。'
    });
  },

  isNetCheck: function () {
    wx.onNetworkStatusChange(function (res) {
      if (!res.isConnected) { // 当前是否有网络连接
        wx.showToast({
          title: '网络不通..',
          icon: "loading",
          duration: 2000
        })
      }
    });
  },

  onLaunch: function (options) {

    let that = this
    console.log(options)
    //中间省略其他代码
    if (options.scene == 1096) {
      wx.showToast({
        title: options.scene.toString(),
      })
      //这里写入相关业务代码
    }

    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    // console.log(logs)

    

    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           console.log('cccc')
    //           this.globalData.userInfo = res.userInfo
    //           console.log(res)

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },


  globalData: {
    userInfo: null,
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],
  }
})