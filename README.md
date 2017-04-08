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
      scrollbar: 'hidden',
      anchors: 'hidden',
      align: 'center',
      start: 'center',
      startAnimation: true,
      onClick: e => { console.log(e) }
    }

    return <ReactScroller 
      config={config}
      startPosition={startPosition}
    >
      {['text1', 'text2', 'text3'].map((item, i) => {
        return <div 
          key={i} 
          className="item" 
          data-anchor={item}
          data-central={i == 1 ? "true" : "false"}
        >{item}</div>
      })}
    </ReactScroller>
  }
}
```

## Help
If you have any questions send an email to [bespoyasov@me.com](mailto:bespoyasov@me.com).
