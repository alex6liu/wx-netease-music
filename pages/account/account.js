// pages/account/account.js
var baseUrl = require('../../utils/baseUrl.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasLogin: false,
    level: 0,
    avatarUrl: '',
    nickname: '',
    follows: 0,
    followeds: 0,
    eventCount: 0,
  },
  onLoad() {
    if(wx.getStorageSync('cookie')) {
      this.setData({
        hasLogin: true
      });
      wx.request({
        url: baseUrl + '/user/detail',
        data: {
          uid: wx.getStorageSync('userId'),
        },
        header: {
          'cookie': wx.getStorageSync('cookie')
        },
        success: (res) => {
          console.log(res.data)
          this.setData({
            level: res.data.level,
            nickname: res.data.profile.nickname,
            avatarUrl: res.data.profile.avatarUrl,
            follows: res.data.profile.follows,
            followeds: res.data.profile.followeds,
            eventCount: res.data.profile.eventCount,
          })
        }
      })
    }
  },
  bindLogButton() {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  
})