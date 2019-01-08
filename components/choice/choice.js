// components/choice/choice.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindFmPage() {
      wx.navigateTo({
        url: '../fm/fm'
      })
    },
    bindRecommend() {
      wx.navigateTo({
        url: '../recommend/recommend'
      })
    },
    bindPlaylist() {
      wx.navigateTo({
        url: '../songList/songList'
      })
    },
    bindBoardPage() {
      wx.navigateTo({
        url: '../board/board'
      })
    },
  }
})
