import { replayWithLatest, Data } from 'MobiusUtils'
import { html } from 'MobiusGUI'

export const appTemplateRD = replayWithLatest(1, Data.of(html`
  <div>Welcome to use Mobius Template.</div>
`))
