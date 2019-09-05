import assert from 'assert'

import * as babel from '@babel/core'
import spreadChild from '../src'
import jsx from '@babel/plugin-transform-react-jsx'

const src = `
// @jsx h
<div>
  <a href="other.html">Link</a>
  <ul>
    {...[<li>Item A</li>, <li>Item B</li>]}
    <li>Item Last</li>
  </ul>
</div>
`

const dist = `
// @jsx h
h("div", null, h("a", {
  href: "other.html"
}, "Link"), h("ul", null, ...[h("li", null, "Item A"), h("li", null, "Item B")], h("li", null, "Item Last")));
`.trim()

const out = babel.transform(src, {
  plugins: [spreadChild, jsx],
})

assert.strictEqual(out.code, dist)
