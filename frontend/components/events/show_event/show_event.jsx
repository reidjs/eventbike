//while loading show spinner, then once its loaded show the other 
import React from 'react';
import Header from './header';
import ActionBar from './action_bar';
import Details from './details';
class ShowEvent extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true;
    this.state= {event: {}};
  }
  componentWillMount() {
    this.props.getevent(this.props.eventId);
  }
  componentWillReceiveProps(nextProps) {
    const event = nextProps.event;
    this.loading = false;
    this.setState({event});
  }
  render() {
    if (this.loading) {
      return (
        <div className="loader"></div>
      )
    } else {
      const event = this.state.event;
      const title = event.title;
      const image_url = "temp image url";
      const date = "temp date";
      const details = event.details;
      const bookmark = this.props.bookmark;
      const unbookmark = this.props.unbookmark;
      const register = this.props.register;
      const unregister = this.props.unregister;
      const currentUser = this.props.currentUser;
      return (
        <div className="event-show-container">
          <Header 
                title={title} 
                image_url={image_url} 
                date={date}/>
          <ActionBar 
                event={event} 
                currentUser={currentUser}
                bookmark={bookmark}
                unbookmark={unbookmark}
                register={register}
                unregister={unregister}/>
          <Details details={details}/>
        </div>
      )
    }
  }
}

export default ShowEvent