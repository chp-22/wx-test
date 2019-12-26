//index.js
//获取应用实例
const app = getApp()
var now = new Date().getTime();

Page({
  data: {
    navData: [
      { img: '../../style/img/ji.png', selectImg: '../../style/img/ji_red.png', txt: '纪念日', active: 1 },
      { img: '../../style/img/love_time.png', selectImg: '../../style/img/love_time_red.png', txt: '时光', active: 0 }
    ],
    beginLove: 0,
    taBirthday: 0,
    woBirthday:0,
  },

  onLoad(e) {

    var begin_love = (new Date("2018/10/20")).getTime();
    this.setData({
      beginLove: parseInt((now - begin_love) / (3600 * 24 * 1000))
    })

    var date = new Date();
    var year = date.getFullYear(); // 今年年份

    var taDate = year+'/06/05';
    var taTime = (new Date(taDate)).getTime() // 今年06/05的毫秒数
    if (now - taTime >= 0) {
      console.log('今年生日已过，取下年')
      var next_taTime = (new Date((year+1)+'/06/05')).getTime()
      this.setData({
        taBirthday: parseInt((next_taTime - now) / (3600 * 24 * 1000))
      })
    } else if (now - taTime < 0) {
      console.log('今年生日未过')
      this.setData({
        taBirthday: parseInt((taTime - now) / (3600 * 24 * 1000))
      })
    }


    var woDate = year + '/12/17';
    var woTime = (new Date(woDate)).getTime() // 今年12/17的毫秒数
    if (now - woTime >= 0) {
      var next_woTime = (new Date((year + 1) + '/12/17')).getTime()
      this.setData({
        woBirthday: parseInt((next_woTime - now) / (3600 * 24 * 1000))
      })
    } else if (now - woTime < 0) {
      this.setData({
        woBirthday: parseInt((woTime - now) / (3600 * 24 * 1000))
      })
    }

  },

  onTest() {
    wx.navigateTo({
      url: '/love/3d_photo/3d_photo',
    })
  },


})
