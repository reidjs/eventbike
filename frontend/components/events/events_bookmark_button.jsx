import React from 'react';
import BookmarkBorder from 'material-ui-icons/BookmarkBorder';
import { flashMessage } from 'redux-flash';

class EventsBookmarkButton extends React.Component {
  constructor(props) {
    super(props)
    // this.eventIsBookmarked = this.eventIsBookmarked.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
  }
  // eventIsBookmarked() {
  //       if (this.props.currentUser &&
  //           this.props
  //           .currentUser
  //           .bookmarked_events
  //           .indexOf(this.props.event.id) >= 0) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     }
    
  handleBookmark(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      switch(this.props.event.bookmarked) {
        case false:
          this.props
            .bookmark(this.props.event.id); 
          return
        case true:
          this.props
          .unbookmark(this.props.event.id); 
          return 
      }
    } else {
      dispatch(flashMessage('You must be logged in to bookmark events.'))
    }
  }
  
  render() {
    let myClass;
    this.props.event.bookmarked ? myClass="active" : myClass = "";
    
    return (
      <button className={myClass} onClick={this.handleBookmark}><BookmarkBorder /></button>
    )
  }
}

export default EventsBookmarkButton;