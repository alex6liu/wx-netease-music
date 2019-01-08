// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommendList: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://netease-music-api.herokuapp.com/mv/first',
      success: (res) => {
        that.setData({
          recommendList: res.data.data
        })
      }
    })
  },
  
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
})