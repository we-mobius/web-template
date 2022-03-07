import { makeInstantComponent } from 'MobiusGUI'

import { appNameRD } from 'FreeServices/app-route'

export const homeRD = makeInstantComponent(
  [appNameRD],
  ([appName], template, mutation, { html }) => {
    return html`
      <div class="mobius-size--fullpct mobius-padding--r-xl mobius-layout__vertical mobius-shadow--inset mobius-select--text">
        <div class="mobius-text--4sl mobius-font--mono">Web Template</div>
      </div>
    `
  }
)
