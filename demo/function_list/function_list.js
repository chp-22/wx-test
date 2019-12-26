//获取应用实例
const app = getApp()

Page({
  data: {
    navData: [
      { img: '../../style/img/ji.png', selectImg: '../../style/img/ji_red.png', txt: '纪念日', active: 1 },
      { img: '../../style/img/love_time.png', selectImg: '../../style/img/love_time_red.png', txt: '时光', active: 0 }
    ],
    list: [
      {
        id: 'form',
        name: '基础组件',
        open: false,
        pages: ['componentAll','animate', 'noData', 'grid']
      },
      {
        id: 'fun',
        name: '基础方法',
        open: false,
        pages: ['11', '22']
      }
    ]
  },

  onLoad: function () {
    
  },

  // 展开二级菜单
  onSpread(e) {
    console.log(e)
    var id = e.currentTarget.dataset.id
    var newlist = this.data.list
    newlist.map((item, index) => {
      if (item.id == id) {
        item.open = !item.open
      } else {
        item.open = false
      }
    })
    this.setData({
      list: newlist
    })
  },

  onDetail(e) {
    var aa = e.currentTarget.dataset.data
    wx.navigateTo({
      url: '/demo/' + aa + '/' + aa,
    })
  },


})
