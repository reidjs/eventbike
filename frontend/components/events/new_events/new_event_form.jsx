import React from 'react';
import DropDown from './drop_down';
// import rrui from 'react-responsive-ui/style.css'
// import { getAddress } from '../../../util/events_api';
import { fetchCategories, getAddress } from '../../../util/events_api_util'
import
{
  PageAndMenu,
  Page,
  CollapsibleMenu,
  MenuButton,
  Form,
  Snackbar,
  Tooltip,
  ActivityIndicator,
  TextInput,
  Select,
  Button,
  Switch,
  Checkbox,
  SegmentedControl,
  DatePicker,
  FileUpload,
  Modal
}
from 'react-responsive-ui'
class NewEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.waitingForConfirmation = false;
    this.state = ({title: "", details: "", category: "Social", date: "", location:"", matchResults: []});
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.categories = []
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
    // debugger
    //redirect 
    // console.log(this.props)
    this.waitingForConfirmation = true;
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors.length === 0 && this.waitingForConfirmation) {
      //show errors, do not redirect 
      this.waitingForConfirmation = false;
      nextProps.history.push(`users/${this.props.user.id}/myevents`)
      console.log('no errors')
      
    } else {
      this.waitingForConfirmation = false;
    }
  }
  handleCategory(category) {
    // console.log('here',category)
    this.setState({category})
  }
  componentWillMount() {
    fetchCategories()
      .then(res => {
        res.categories 
      })
  }
  //AIzaSyDkREocgFR4OI0hcwrvDINxt0CuM0nKAgw
  handleLocationChange(e) {
    let value = e.target.value;
    getAddress(value).then(res => {
        // console.log(res.results[0].formatted_address)
        let matchResults = res.results.slice(0, 4)
        this.setState({matchResults})
    })
    // let location = value;
    this.setState({location: value})
  }

  render() {
    let matchItems = this.state.matchResults.map((result) => {
      if (result !== undefined) {
        return <li>{result.formatted_address}</li>
      } else 
        return <li></li>
    })
    console.log(matchItems)
    return (
      <div className="new-event-container">
        <div>
          <h1>Create An Event</h1>
        </div>
        <form className="new-event" onSubmit={this.handleSubmit}>
          <div className="header">
            {/* <span className="big-number">1</span>  */}
            <h2>Event Details</h2>
          </div>
          <h3>Event Title</h3><span className="red-asterisk">*</span>
          <input name="title" placeholder="Give it a catchy name" value={this.state.title} onChange={this.handleInputChange}/>
          <h3>Location</h3>
          <input name="location" onChange={this.handleLocationChange} value={this.state.location} placeholder="Search for a venue or address"/>          
          <ul>
            {matchItems}
          </ul>
          <h3>Date</h3>
          {/* <input name="date" placeholder="Search for a venue or address"/>  */}
          <DatePicker  value={this.state.date} onChange={date => this.setState({ date })}/>
          <h3>Event Image</h3>
          Lightbox
          {/* <input name="image" placeholder="Pick an image"/>  */}
          <h3>Description</h3>
          <textarea name="details" value={this.state.details} onChange={this.handleInputChange}/>
          {/* <DropDown handleCategory={this.handleCategory} categories={this.props.categories}/> */}
          <Select
          placeholder="Select one"
          value={this.state.category}
          onChange={category => this.setState({ category })}
          //pass in categories as [{value: '', label: ''}]
          options=
          {[
            { value: 'Social', label: 'Social'},
            { value: 'Race', label: 'Race'},
            { value: 'Other', label: 'Other'},
            { value: 'Joyride', label: 'Joyride'},
            { value: 'Motorcycle', label: 'Motorcycle'},
            { value: 'Scooter', label: 'Scooter'},
            { value: 'Bicycle', label: 'Bicycle'},
            { value: 'Workout', label: 'Workout'},
          ]}/>
          <input type="submit" value="Create New Event" />
        </form>
      </div>
    )
  }
}
// const NewEventForm = () => {
  
// }

export default NewEventForm;