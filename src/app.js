import React from 'react'
import {render} from 'react-dom'
import ReactScroller from './react-scroller'

class App extends React.Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      textItems: ['asd', 'asdasdas', 'asd', 'asd', 'asdasdas', 'asd', 'asd', 'asdasdas', 'asd']
    }
  }


  render() {
    const config = {
      scrollbar: 'visible',
      anchors: 'hidden',
      startAnimation: true,
      align: 'center',
      onClick: e => {console.log(e)}
    }

    return <ReactScroller config={config}>
      {this.state.textItems.map((item, i) => {
        return <div 
          key={i} 
          className="item" 
          data-anchor={item}
          data-central={i == 3 ? "true" : "false"}
        ><a href="#">{item}</a></div>
      })}
    </ReactScroller>
  }
}

render(<App />, document.getElementById('app'));