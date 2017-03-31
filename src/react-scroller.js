import React from 'react'
import {isEqual} from 'lodash'
import '../dist/scroller.js'


export default class ReactScroller extends React.Component {

  constructor(props, context) {
    super(props, context)
  }


  componentDidMount() {
    const {config, startPosition} = this.props
    
    this.scroller = new Scroller({
      el: this.refs.root,
      ...config
    })

    this.scroller.update({...config})

    if (startPosition) {
      const endpoint = startPosition.position 
      const speed = startPosition.speed
      this.scroller.scrollTo(endpoint, speed)
    }
  }


  componentDidUpdate() {
    const {config} = this.props
    this.scroller.update({...config})
  }


  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.children.length !== this.props.children.length 
      || !isEqual(newProps.config, this.props.config)
  }


  render() {
    const {children} = this.props
    const prefix = 'ab_scroller'

    return <div ref="root" className={`${prefix}`}>
      <div className={`${prefix}-wrapper`}>
        <div className={`${prefix}-border ${prefix}-border--left`}></div>
        <div className={`${prefix}-border ${prefix}-border--right`}></div>
        <div className={`${prefix}-strip`}>{children}</div>

        <div className={`${prefix}-scrollwrap`}>
          <div className={`${prefix}-scrollbar`}></div>
        </div>
        <div className={`${prefix}-anchors`}></div>
      </div>
    </div>
  }
}