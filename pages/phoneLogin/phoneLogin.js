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
})