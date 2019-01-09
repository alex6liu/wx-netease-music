// components/recommendPlayList/recommendPlayList.js
var baseUrl = require('../../utils/baseUrl.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    playList: {},
  },
  lifetimes: {
    attached() {
      wx.request({
        url: baseUrl + '/top/playlist?limit=6&order=hot',
        header: {
          'cookie': wx.getStorageSync('cookie'),
        },
        success: (res) => {
          this.setData({
            playList: res.data.playlists
          })
        },
      })
    },
  },
})
