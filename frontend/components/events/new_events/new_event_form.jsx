import React from 'react'
import DropDown from './drop_down'
class NewEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.waitingForConfirmation = false;
    this.state = ({title: "", details: "", category: "Social"});
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    if (this.props.errors.length > 0)
      this.props.reseterrors();
    this.setState({[name]: value})
  }
  handleSubmit(e) {
    e.preventDefault();
    // console.log('Submit new event!',this.state)
    this.props.submit(this.state)
    //redirect 
    // console.log(this.props)
    this.waitingForConfirmation = true;
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors.length > 0 && this.waitingForConfirmation) {
      //show errors, do not redirect 
      this.waitingForConfirmation = false;
      
    } else {
      console.log('no errors')
      nextProps.history.push(`users/${this.props.user.id}/myevents`)
    }
  }
  handleCategory(category) {
    // console.log('here',category)
    this.setState({category})
  }
  render() {
    return (
      <div className="new-event-container">
        <div>
          <h1>Create An Event</h1>
        </div>
        <form className="new-event" onSubmit={this.handleSubmit}>
          <div className="header">
            <span className="big-number">1</span> <h2>Event Details</h2>
          </div>
          <h3>Event Title</h3><span className="red-asterisk">*</span>
          <input name="title" placeholder="Give it a catchy name" value={this.state.title} onChange={this.handleInputChange}/>
          <input name="Location" placeholder="Search for a venue or address"/>          
          Details
          <textarea name="details" value={this.state.details} onChange={this.handleInputChange}/>
          <DropDown handleCategory={this.handleCategory} categories={this.props.categories}/>
          <input type="submit" value="Create New Event" />
        </form>
      </div>
    )
  }
}
// const NewEventForm = () => {
  
// }

export default NewEventForm;