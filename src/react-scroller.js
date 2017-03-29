import React from 'react'
import {isEqual} from 'lodash'
import 'prokrutchik/build/scroller-min'


export default class ReactScroller extends React.Component {

  constructor(props, context) {
    super(props, context)
  }

  
  static propTypes = {
    config: React.PropTypes.object,
    startPosition: React.PropTypes.object
  }


  componentDidMount() {
    const {config, startPosition} = this.props
    
    this.scroller = new Scroller({
      el: this.refs.root,
      ...config
    })

    if (startPosition) {
      const endpoint = startPosition.position || 0
      const speed = startPosition.speed || null
      this.scroller.scrollTo(endpoint, speed)
    }
  }


  componentDidUpdate(prevProps) {
    const {config} = this.props

    // this.scroller = new Scroller({
    //   el: this.refs.root,
    //   ...config
    // })
  }


  componentWillUnmount() {
    delete this.scroller
  }


  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.children.length !== this.props.children.length) {
      this.refs.root.querySelector('.ab_scroller-wrapper').remove()
      return true
    }

    return !isEqual(newProps.config, this.props.config)
  }


  render() {
    const {children} = this.props

    return <div ref="root">
      {children}
    </div>
  }
}