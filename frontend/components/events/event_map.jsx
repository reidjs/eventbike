import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';
import { fetchAllEvents } from '../../util/events_api_util';
import values from 'lodash/values'
const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 13
};
class EventMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    
    this.registerListeners();
    fetchAllEvents()
    .then(res => 
      this.MarkerManager.updateMarkers(values(res)));
  }
  handleMarkerClick(event) {
    this.props.history.push(`events/${event.id}`);
  }
  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      // const { north, south, east, west } = this.map.getBounds().toJSON();
      // const bounds = {
      //   northEast: { lat:north, lng: east },
      //   southWest: { lat: south, lng: west } };
      // this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleClick(coords) {
    // this.props.history.push({
    //   pathname: 'benches/new',
    //   search: `lat=${coords.lat}&lng=${coords.lng}`
    // });
  }

  render() {
    return (
      <div id="map-container" ref="map">

      </div>
    )
  }
}

export default withRouter(EventMap)