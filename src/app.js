import React from 'react'
import {render} from 'react-dom'
import ReactScroller from './react-scroller'

const STATE_1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const STATE_2 = ['11', '22', '33', '44', '55', '66', '77', '88', '99', '10']

class App extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      textItems: STATE_1,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((state) => ({
        textItems: STATE_2,
      }))
    }, 1500)
  }

  render() {
    const config = {
      scrollbar: 'visible',
      anchors: 'visible',
      startAnimation: true,
      align: 'center',
      onClick: (e) => console.log(e),
    }

    return (
      <ReactScroller config={config}>
        {this.state.textItems.map((item, i) => {
          return (
            <div
              data-central={i == 3 ? 'true' : 'false'}
              data-anchor={item}
              className="item"
              key={i}>
              <a href="#">{item}</a>
            </div>
          )
        })}
      </ReactScroller>
    )
  }
}

render(<App />, document.getElementById('app'))
