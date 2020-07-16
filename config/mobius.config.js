module.exports = {
  template: {
    index: {
      title: 'Hello Mobius UI!',
      whisper: 'The author is looking for a job as a product manager \\n             For a quickest preview of his info, check https://example.com/',
      fonts: [
        '/statics/fonts/Workbench[wdth,wght].woff2',
        '/statics/fonts/Sixtyfour[wdth,wght].woff2'
      ],
      asyncCss: [
        // https://fonts.googleapis.com/ -> https://fonts.googleapis.cnpmjs.org/
        'https://fonts.googleapis.cnpmjs.org/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        'https://fonts.googleapis.cnpmjs.org/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        'https://fonts.googleapis.cnpmjs.org/css2?family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap',
        'https://fonts.googleapis.cnpmjs.org/css2?family=Noto+Serif+SC:wght@200;300;400;500;600;700;900&display=swap'
      ],
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
