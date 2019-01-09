// pages/phoneLogin/phoneLogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber: '',
    password: '',
    disabled: true,
  },
  phoneNumberInput(e) {
    this.setData({
      phoneNumber: e.detail.value,
    })
    if (this.data.phoneNumber !== '' && this.data.password !== '') {
      this.setData({
        disabled: false,
      })
    } else {
      this.setData({
        disabled: true,
      })
    }
  },
  passwordInput(e) {
    this.setData({
      password: e.detail.value,
    })
    if (this.data.phoneNumber !== '' && this.data.password !== '') {
      this.setData({
        disabled: false,
      })
    } else {
      this.setData({
        disabled: true,
      })
    }
  },
  phoneLogin() {
    wx.request({
      url: 'https://netease-music-api.herokuapp.com/login/cellphone',
      method: 'POST',
      data: {
        phone: this.data.phoneNumber,
        password: this.data.password
      },
      success: (res) => {
        // console.log(res)
        wx.setStorageSync('cookie', res.header["Set-Cookie"]);
        wx.setStorageSync('userId', res.data.account.id);
        // console.log(wx.getStorageSync('userId'))
      }
    })
  },
})