import React from 'react'
class Flash extends React.Component {
  constructor(props) {
    super(props);
    // props.clearFlash();
  }

  render() {
    // console.log(this.props.message)
    const flashItems = this.props.messages.map((message) => {
      return (<li>{message}</li>)
    })
    console.log(this.flashMessages, this.props.messages)
    // this.props.clearFlash();
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