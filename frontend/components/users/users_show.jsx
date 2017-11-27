import React from 'react'
import GenericEventsShowList from '../generic_events_show_list';

class UsersShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state={bookmarkedEvents:{}}
  }
  componentWillMount() {
    this.props.getbookmarks();
  }
  render() {
    this.props.user.attending_events.map((event) => {
      // return <EventsListItem
      //   key={event.title}
      //   event={}
      // />
    })
    return (
      <div>
        {this.props.user.username}
          <GenericEventsShowList events={this.props.bookmarkedEvents}/>

        {/*fetch events user is attending*/}
        {this.props.user.attending_events}
        User information goes here
      </div>  
    )
  }
}

export default UsersShow;