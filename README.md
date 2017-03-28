# react-scroller

In development, not released yet.

## Installation

```npm install react-scroller --save```

## Usage

```javascript
import React from 'react'
import {Scroller} from 'react-scroller'

class App extends React.Component {
  const {children} = this.props
  const config = {
    align: 'center',
    noAnchors: true,
    noScrollbar: true
  }

  render() {
    return <Scroller config={config}>
      {children}
    </Scroller>
  }
}
```

## Help
If you have any questions send an email to [bespoyasov@me.com](mailto:bespoyasov@me.com).
