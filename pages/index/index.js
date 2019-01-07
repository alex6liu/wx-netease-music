//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputValue: '',
    responseData: {}
  },
  bindSearchInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindSearchButton() {
    var myThis = this;
    wx.request({
      url: app.globalData.searchUrl,
      data: {
        keywords: this.data.inputValue
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        myThis.setData({
          responseData: res.data.result.songs
        })
        console.log(res.data)
      }
    })
  }
})
