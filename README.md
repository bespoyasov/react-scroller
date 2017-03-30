# react-scroller

Wrapper for [Prokrutchik](https://github.com/bespoyasov/scroller).

## Installation

```npm install react-prokrutchik --save```

## Usage

```javascript
import React from 'react'
import ReactScroller from 'react-prokrutchik'

class App extends React.Component {
  
  render() {
    const config = {
      noScrollbar: false,
      noAnchors: false,
      align: 'center',
      onClick: e => { console.log(e) }
    }

    const startPosition = {
      position: 200,
      speed: 200
    }

    return <ReactScroller 
      config={config}
      startPosition={startPosition}
    >
      {['text1', 'text2', 'text3'].map((item, i) => {
        return <div className="item" key={i} data-anchor={item}>{item}</div>
      })}
    </ReactScroller>
  }
}
```

## Help
If you have any questions send an email to [bespoyasov@me.com](mailto:bespoyasov@me.com).
