// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindPhoneLogin() {
    wx.navigateTo({
      url: '../phoneLogin/phoneLogin',
    })
  },
})