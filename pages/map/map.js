// map.js
Page({
  data: {
    latitude: null,
    longitude: null
  },
  // touch
  start: function (event) {
    this.setData({
      startX: event.changedTouches[0].pageX
    })
  },
  end: function (event) {
    let endX = event.changedTouches[0].pageX
    let dis = this.data.startX - endX
    if(dis > 100){
        wx.switchTab({
          url: '../canvas/canvas'
        })
    }
  },
  // 下拉刷新
  onPullDownRefresh: function(){
    wx.stopPullDownRefresh()
  },
  // 页面加载
  onLoad: function () {
    let that = this
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },
  // 页面分享
  onShareAppMessage: function () {
    return {
      title: '微信小程序',
      desc: '这是微信小程序的分享功能',
      path: '/page/map'
    }
  }
})
