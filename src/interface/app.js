import { replayWithLatest, Data } from 'MobiusUtils'
import { html, makeComponentWithReplay } from 'MobiusUI'

// export const appTemplateRD = makeComponentWithReplay(
//   [],
//   () => {
//     console.log('[appTemplateRD]')
//     return html`
//       <div>Welcome to use Mobius Template.</div>
//     `
//   }
// )

export const appTemplateRD = replayWithLatest(1, Data.of(html`
<div>Welcome to use Mobius Template.</div>
`))
