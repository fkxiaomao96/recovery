Page({
  data: {
    userInfo: {
      name: 'I. Fname',
      type: 'Eco Guardian',
      stats: {
        velingCount: 0,
        totalDeposit: {
          weight: 0,
          amount: 0.00
        }
      }
    }
  },

  onLoad: function() {
    // 页面加载时获取用户信息
    this.getUserInfo();
  },

  getUserInfo: function() {
    // TODO: 调用获取用户信息API
    // 这里可以添加实际的API调用逻辑
  },

  viewOrders: function() {
    wx.navigateTo({
      url: '/pages/orders/index'
    });
  }
})