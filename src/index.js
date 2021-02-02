import './statics/styles/style.css'

import { indexPage } from 'Interface/pages/index/index.js'

import { html, render } from 'MobiusUI'

setTimeout(() => {
  render(document.getElementById('mobius-app'), html`
    <div>Welcome to use Mobius Template.</div>
  `)
}, 2000)
