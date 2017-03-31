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
  
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     textItems: ['1', '2', '3', '4', '5']
    //   })
    // }, 1500)
  }


  render() {
    const config = {
      noScrollbar: false,
      noAnchors: false,
      align: 'center',
      start: 'center',
      onClick: e => {console.log(e)}
    }

    return <ReactScroller 
      config={config}
    >
      {this.state.textItems.map((item, i) => {
        return <div className="item" key={i} data-anchor={item}>{item}</div>
      })}
    </ReactScroller>
  }
}

render(<App />, document.getElementById('app'));