// pages/songList/songList.js
var baseUrl = require('../../utils/baseUrl.js')
var header = require('../../utils/header.js')
Page({

  data: {
    songList: [],
    coverImgUrl:'',
    commentCount: 0,
    name:'',
    playCount: 0,
    shareCount: 0,
    creatorAvatar: '',
    creatorNickname: '',
  },

  onLoad: function (query) {
    wx.request({
      url: baseUrl + '/playlist/detail?id=' + query.id,
      header: header,
      success: (res) => {
        this.setData({
          songList:res.data.playlist.tracks,
          coverImgUrl: res.data.playlist.coverImgUrl,
          commentCount: res.data.playlist.commentCount,
          name: res.data.playlist.name,
          playCount: res.data.playlist.playCount,
          shareCount: res.data.playlist.shareCount,
          creatorAvatar: res.data.playlist.creator.avatarUrl,
          creatorNickname: res.data.playlist.creator.nickname,
        })
        // console.log(this.data)
      }
    })
  },

})