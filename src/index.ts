import '@we-mobius/mobius-gui/css'
import 'Styles/style.css'

import { runSimpleApp } from 'MobiusGUI'
import { initAppTheme } from 'MobiusServices'

import { appTemplateRD } from 'Interfaces/app'

initAppTheme({
  enableAutoToggle: true,
  isExpectUnknown: false
})

runSimpleApp(
  'mobius-app',
  appTemplateRD,
  {
    decorator: {
      className: 'mobius-app mobius-select--none',
      innerHTML: ''
    }
  }
)
