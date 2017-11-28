//while loading show spinner, then once its loaded show the other 
import React from 'react';
import Header from './header';
import ActionBar from './action_bar';
import Details from './details';
class ShowEvent extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true;
  }
  componentWillMount() {
    this.props.getevent(this.props.eventId);
  }
  componentWillReceiveProps(nextProps) {
    // debugger
    // console.log('here')
    // debugger
    if (!this.props.event || this.props.event.id != nextProps.eventId) {
      this.props.getevent(this.props.eventId);
      this.loading = true
    } else {
      this.loading = false;
    }

  }
  isLoading() {
    return (this.props.eventId !== this.props.event.id)
  }

  render() {
    if (this.loading) {
      return (
        <div className="loader"></div>
      )
    } else {
      const event = this.props.event;
      const id = event.id
      const title = event.title;
      const image_url = event.image_url;
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
                id={id}
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