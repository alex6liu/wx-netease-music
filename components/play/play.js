// components/play/play.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    songListToPlay: {
      type:Object,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    songCount: 0,
    saveCount: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    lifetimes: {
      attached() {
        console.log(this.data.songListToPlay)
      }
    }
  }
})
