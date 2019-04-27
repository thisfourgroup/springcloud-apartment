/**
 * desc：途家聊天机器人SDK
 * dev：yijinw
 */
!(function(win, doc) {
  function TJIM(options) {
    this.userId = options.userId || ''
    this.userToken = options.userToken || ''
    this.width = options.width || 400
    this.height = options.height || 500
    // B端或者C端标识，1为C端，2为B端
    this.customertype = options.customertype || 1
  }

  /**
   * 开启机器人客服
   */
  TJIM.prototype.openTJCustomerService = function() {
    var chatDom = doc.querySelector('#TJChatRobot')
    if (chatDom) {
      if (chatDom.style.display === 'none') {
        chatDom.style.display = 'block'
      }
    } else {
      var iframe = doc.createElement('iframe')
      iframe.src = this._getIframeUrl()
      iframe.id = 'TJChatRobot'
      // 兼容firefox出现滚动条
      iframe.scrolling = 'no'

      iframe.style.cssText =
        'position: fixed;right: 20px;bottom: 0;width: ' + this.width + 'px;height: ' + this.height + 'px;border-width: 0;box-shadow: 0px 0px 20px 2px rgba(0,0,0,.15);z-index: 2147483647'

      win.top.document.body.appendChild(iframe)
    }
  }

  /**
   * 监听message事件，进行iframe交互
   * 注：IE只支持onmessage这种形式
   * @param {Object} event 事件对象
   */
  win.onmessage = function(event) {
    // 只监听pwa域名下的消息
    if (event.origin.indexOf('pwa') === -1) {
      return
    }
    // 关闭操作
    if (event.data.message === 'close') {
      win.top.document.body.removeChild(doc.querySelector('#TJChatRobot'))
    } else if (event.data.message === 'minimize') {
      // 最小化操作
      doc.querySelector('#TJChatRobot').style.display = 'none'
    }
    // 查看图片原图
    if (event.data.imageUrl) {
      win.open(event.data.imageUrl)
    }
    // 查看文件
    if (event.data.fileUrl) {
      win.open(event.data.fileUrl)
    }
  }

  /**
   * 根据host获取iframe加载地址
   */
  TJIM.prototype._getIframeUrl = function() {
    var host = win.location.host
    // iframe地址host
    var hostUrl = ''

    if (host.indexOf('.dev') > -1) {
      hostUrl = 'http://pwa.dev.tujia.com'
    } else if (/^\D*\.fvt/.test(host)) {
      hostUrl = 'https://pwa.fvt.tujia.com'
    } else if (host.indexOf('1.fvt') > -1) {
      hostUrl = 'https://pwa1.fvt.tujia.com'
    } else if (host.indexOf('2.fvt') > -1) {
      hostUrl = 'https://pwa2.fvt.tujia.com'
    } else {
      hostUrl = 'https://pwa.tujia.com'
    }
    return hostUrl + '/h5/appw/intelligentrobot/pc/index?customertype=' + this.customertype + '&tjuserid=' + this.userId + '&tjusertoken=' + this.userToken
  }
  win.TJIM = TJIM
})(window, document)
