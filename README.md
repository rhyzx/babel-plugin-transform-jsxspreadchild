# babel-plugin-transform-jsxspreadchild

## Usage

`.babelrc`:

```json
{
  "plugins": ["babel-plugin-transform-jsxspreadchild", "@babel/plugin-transform-react-jsx"]
}
```


## Example

In
```js
// @jsx h
<div>
  <a href="other.html">Link</a>
  <ul>
    {...[<li>Item A</li>, <li>Item B</li>]}
    <li>Item Last</li>
  </ul>
</div>
```

Out
```js
// @jsx h
h('div', null,
  h('a', { href: 'other.html' }, 'Link'),
  h('ul', null,
    ...[h('li', null, 'Item A'), h('li', null, 'Item B')],
    h('li', null, 'Item Last')
  )
);
```
