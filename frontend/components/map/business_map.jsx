import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';


/// ayellapragada@gmail.com
const mapOptions = {
  center: {
    lat: 40.915494,
    lng: -74.002209
  },
  zoom: 7
};


const getCoordsObj = latlng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class BusinessMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map,  this.handleMarkerClick.bind(this));
    if (this.props.single) {
      this.MarkerManager.createMarkerFromBusiness(this.props.business);
    } else  {
      this.MarkerManager.updateMarkers(this.props.businesses);
    }
  }

  componentDidUpdate() {
    if (this.props.single) {
      this.MarkerManager.createMarkerFromBusiness(this.props.business);
      const business = this.props.business;
      this.MarkerManager.createMarkerFromBusiness(this.props.business);
      this.MarkerManager.updateMarkers([business]);
    } else {
      this.MarkerManager.updateMarkers(this.props.businesses);
    }
  }

  handleMarkerClick(business) {
    const url = `https://www.google.com/maps/place/${business.address}`;
      window.open(url);
  }

  render() {
      return (
        <div id={this.props.id} ref={ map => this.mapNode = map }>
        </div>
      )

  }
}

export default withRouter(BusinessMap);
