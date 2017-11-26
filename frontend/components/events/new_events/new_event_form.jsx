import React from 'react'
class NewEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({title: "", details: ""});
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('Submit new event!')
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Create new event 
        Title
        <input name="title" value={this.state.title} onChange={this.handleInputChange}/>
        Details
        <textarea name="details" value={this.state.details} onChange={this.handleInputChange}/>
        <input type="submit" value="Create New Event" />
      </form>
    )
  }
}
// const NewEventForm = () => {
  
// }

export default NewEventForm;