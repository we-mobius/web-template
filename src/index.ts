import '@we-mobius/mobius-ui/css'
import 'Styles/style.css'

import { completeStateRD } from 'MobiusUtils'
import { makeAppContainerRD, runApp } from 'MobiusUI'
import { initConfig, initTheme } from 'MobiusJS'

import { appTemplateRD } from 'Interface/app'

// initConfig()
initTheme({
  isAutoToggle: () => 'open'
})

completeStateRD.subscribe(() => {
  console.log('[Application] initialize start!')

  const appContainerRD = makeAppContainerRD('mobius-app', {
    className: 'mobius-app'
  })
  runApp(appContainerRD, appTemplateRD)

  console.log('[Application] initialize ended!')
})
