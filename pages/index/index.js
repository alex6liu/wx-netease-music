//index.js
//获取应用实例
const app = getApp()
var baseUrl = require('../../utils/baseUrl.js')

Page({
  data: {
    inputValue: '',
    responseData: {},
    songList: {},
  },
  onLoad() {
    wx.request({
      url: baseUrl + '/top/playlist?limit=6&order=hot',
      header: {
        'cookie': wx.getStorageSync('cookie'),
      },
      success: (res) => {
        this.setData({
          songList: res.data.playlists
        })
      },
    })
  }
})
