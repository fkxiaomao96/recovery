/**  
 *   作者:  haya 
 *   时间:  2017-11-07
 *   描述:  柠檬公益
 * 
 * */
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  //柠檬公益动态
  bindtapGyDynamic:function(e){
    wx.navigateTo({
      url: "/pages/findPage/lemonCommonweal/gyDynamic/gyDynamic"
    })
  },

  //申领旧衣
  bindtapOldClothes:function(e){
    wx.navigateTo({
      url: "/pages/findPage/lemonCommonweal/oldClothes/oldClothes"
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})