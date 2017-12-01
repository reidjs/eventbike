import React from 'react';
import DropDown from './drop_down';

// import rrui from 'react-responsive-ui/style.css'
// import { getAddress } from '../../../util/events_api';
import { fetchCategories, getAddress } from '../../../util/events_api_util'

import
{
  Tooltip,
  TextInput,
  Select,
  DatePicker,
}
from 'react-responsive-ui'
// const test = () => {
//   console.log('hi')
// }
const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)",
        enableImageSelection: true,
        onSelectImage: () => {console.log('hi')},
        onClickThumbnail: () => {console.log('hi')}
},
 
{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

class NewEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.waitingForConfirmation = false;
    this.state = ({title: "", details: "", category: "Other", date: new Date(), location:"", matchResults: []});
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.showMatchItems = true;
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
    this.props.submit(this.state)
    // this.props.history.push(`users/${this.props.user.id}/myevents`)
    this.waitingForConfirmation = true;
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
    if (nextProps.errors.length === 0 && this.waitingForConfirmation) {
      this.waitingForConfirmation = false;
      this.props.history.push(`users/${this.props.user.id}/myevents`)
      // console.log('no errors')
      
    } else {
      //show errors
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
    this.showMatchItems = true;
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
        return <li key={result.formatted_address} onClick={() => 
          {
            this.showMatchItems = false;
            this.setState({matchResults: []})
            this.setState({location: result.formatted_address}
          )}}>{result.formatted_address}</li>
      } else 
        return <li></li>
    })
    let errorList = this.props.errors.map((error) => {
      return <li key={error}>{error}</li>
    })
    return (
      <div className="new-event-container">
        <div className="header-info">
          <h2>Create an Event</h2>
        </div>
        <hr className="fancy" />
        <form className="new-event" onSubmit={this.handleSubmit}>
          <span className="big-number">1</span> 
          <h3>Event Title</h3><span className="red-asterisk">*</span>
          <hr className="divider" />
          <input type="text" name="title" placeholder="Give it a catchy name" value={this.state.title} onChange={this.handleInputChange}/>
          <span className="big-number">2</span> 
          <h3>Location</h3><span className="red-asterisk">*</span>
          <input type="text" name="location" onChange={this.handleLocationChange} value={this.state.location} placeholder="Search for a venue or address"/>          
          {this.showMatchItems === true &&
            <ul className="location-match">
              {matchItems}
            </ul>
          }
          <span className="big-number">3</span> 
          <h3>Date</h3><span className="red-asterisk">*</span>
          {/* <input name="date" placeholder="Search for a venue or address"/>  */}
          <DatePicker type="date" value={this.state.date} onChange={date => this.setState({ date })}/>
          {/* <h3>Event Image</h3> */}
          {/* <input name="image" placeholder="Pick an image"/>  */}

          <span className="big-number">4</span> 
          <h3>Description</h3>
          <textarea name="details" value={this.state.details} onChange={this.handleInputChange}/>
          {/* <DropDown handleCategory={this.handleCategory} categories={this.props.categories}/> */}
          <span className="big-number">5</span> 
          <h3>Category</h3>
          <div className="category-dropdown">
            <Select
            placeholder="Select a category"
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
          </div>
          <input type="submit" value="Create New Event" />
          <ul id="form-errors">
            {errorList}
          </ul>
        </form>
      </div>
    )
  }
}
// const NewEventForm = () => {
  
// }

export default NewEventForm;