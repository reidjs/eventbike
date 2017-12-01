import React from 'react'
import FlashItem from './flash_item'
class Flash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: this.props.messages}
  }
  componentDidMount() {
  }

  componentWillReceiveProps(newProps) {
    const messages = newProps.messages
    this.setState({messages})

    
  }
  

  render() {
    const flashItems = this.state.messages.map((flash) => {
      return (<FlashItem 
                key={flash.id} 
                flash={flash} 
                hideflash={this.props.hideflash}/>)
    })
    return (
      <div className="flash-container">
        <ul>
          {flashItems}
        </ul>
      </div>
    );
  }
}


export default Flash;