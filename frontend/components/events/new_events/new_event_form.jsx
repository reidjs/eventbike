import React from 'react'
import DropDown from './drop_down'
class NewEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({title: "", details: "", category: "Social"});
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }
  handleSubmit(e) {
    e.preventDefault();
    // console.log('Submit new event!',this.state)
    this.props.submit(this.state)
  }
  handleCategory(category) {
    // console.log('here',category)
    this.setState({category})
  }
  render() {
    return (
      <form className="new-event" onSubmit={this.handleSubmit}>
        Create new event 
        Title
        <input name="title" value={this.state.title} onChange={this.handleInputChange}/>
        Details
        <textarea name="details" value={this.state.details} onChange={this.handleInputChange}/>
        Category 
        <DropDown handleCategory={this.handleCategory} categories={this.props.categories}/>
        <input type="submit" value="Create New Event" />
      </form>
    )
  }
}
// const NewEventForm = () => {
  
// }

export default NewEventForm;