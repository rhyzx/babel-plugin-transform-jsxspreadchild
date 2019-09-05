import { declare } from '@babel/helper-plugin-utils'
import jsx from '@babel/plugin-syntax-jsx'
import { types as t } from '@babel/core'

export default declare((api, options) => {
  const JSXSpreadChild = (path) => {
    path.replaceWith(
      t.spreadElement(path.node.expression)
    )
  }

  return {
    inherits: jsx,
    visitor: {
      JSXSpreadChild,
    },
  }
})
