
# strip accented

  Useful for implementing behavior that should only happen after a repeated
  action has completed.

## Installation

    $ component install component/debounce

  Or in node:

    $ npm install debounce

## Example

```js
var debounce = require('debounce');
window.onresize = debounce(resize, 200);

function resize(e) {
  console.log('height', window.innerHeight);
  console.log('width', window.innerWidth);
}
```

To later clear the timer and cancel currently scheduled executions:
```
window.onresize.clear();
```

To execute any pending invocations and reset the timer:
```
window.onresize.flush();
```

## API

### debounce(fn, wait, [ immediate || false ])


  function.

## License

  MIT
