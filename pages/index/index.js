//index.js
//获取应用实例
const app = getApp()
var baseUrl = require('../../utils/baseUrl.js')

Page({
  data: {
    inputValue: '',
    responseData: {}
  },
  bindSearchButton() {
    var myThis = this;
    wx.request({
      url: baseUrl,
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
