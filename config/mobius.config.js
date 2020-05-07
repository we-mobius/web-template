module.exports = {
  template: {
    index: {
      title: 'Hello Mobius Template!',
      css: [],
      scripts: [],
      favicon: '/statics/favicons/thoughts-daily.icon.png',
      headHtmlSnippet: `
        <style>
          body { developer: cigaret; wechat: cigaret_bot; email: kcigaret@outlook.com; }
        </style>
      `,
      bodyHtmlSnippet: `
        <div id="app" class="w-full h-64 flex justify-around items-center">
          <span class="text-6xl">Mobius Project Template!</span>
        </div>
        <div class="w-full flex justify-around items-center">
          <div class="w-1/4 h-48 svg-smallerthan5KB"></div>
          <div class="w-1/4 h-48 svg-biggerthan5KB"></div>
        </div>
      `,
      // from: https://analytics.google.com/analytics/web/
      googleAnalytics: {
        trackingId: false // UA-XXXX-XX
      },
      // from: https://tongji.baidu.com/sc-web/
      baiduAnalytics: {
        trackingId: false // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      }
    }
  }
}
