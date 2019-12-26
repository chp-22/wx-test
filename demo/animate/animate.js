// demo/animate/animate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ani: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {

  },

  onStart() {
    var animate = wx.createAnimation({
      duration: 4000,
      timingFunction: 'ease',
      delay: 1000
    })
    animate.opacity(0.2).translate(100, -100).step()
    this.setData({
      ani: animate
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})