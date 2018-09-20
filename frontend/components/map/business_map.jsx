import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';


class BusinessMap extends React.Component {

  // componentDidMount() {
  //   const mapOptions = {
  //     center: { lat: 37.7758, lng: -122.435 }, // this is SF
  //     zoom: 13
  //   };
  //
  // }



  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 40.751282, lng: -73.983990 },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }

    componentDidUpdate() {
      this.MarkerManager.updateMarkers(this.props.businesses);
    }

  render() {

    return (
      <div id='map-container' ref={ map => this.mapNode = map }>

      </div>

    )
  }
}

export default withRouter(BusinessMap);
