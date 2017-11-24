import React from 'react'
import FlashItem from './flash_item'
class Flash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: this.props.messages}
    // props.clearFlash();
    // console.log(props)
  }
  componentDidMount() {
    // console.log('clearflash: ',this.props.clearFlash)
  }

  componentWillReceiveProps(newProps) {
    const messages = newProps.messages
    this.setState({messages})
    // console.log('new props', newProps)
    // if (newProps.messages != this.props.messages)
    //   setTimeout(() => (this.props.clearFlash()), 4000);
    
  }
  

  render() {
    // console.log(this.props.messages)
    const flashItems = this.state.messages.map((flash) => {
      // console.log(message)
      return (<FlashItem 
                key={flash.id} 
                flash={flash} 
                hideflash={this.props.hideflash}/>)
    })
    // console.log("flashitems: ", flashItems)
    // console.log(this.flashMessages, this.props.messages)
    // this.props.clearFlash();
    // {flashItems}
    return (
      <div className="flash-container">
        <ul>
          {flashItems}
        </ul>
      </div>
    );
  }
}
// const Flash = ({message, flashMessage, clearFlash}) => {
//   // console.log('flash: ', message)
//   clearFlash();
// }

export default Flash;