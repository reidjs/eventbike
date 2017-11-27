import React from 'react'
class UsersShow extends React.Component {
  constructor(props) {
    super(props);

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

        {/*fetch events user is attending*/}
        {this.props.user.attending_events}
        User information goes here
      </div>  
    )
  }
}

export default UsersShow;