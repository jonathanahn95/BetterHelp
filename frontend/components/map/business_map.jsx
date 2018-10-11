import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: {
    lat: 40.915494,
    lng: -74.002209
  },
  zoom: 11
};

const getCoordsObj = latlng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

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
    const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    if (this.props.single) {
      this.MarkerManager.createMarkerFromBusiness(this.props.business);
    }
  }

    // componentDidUpdate() {
    //   this.MarkerManager.updateMarkers(this.props.businesses);
    // }


  render() {
      return (
        <div id='map-container' ref={ map => this.mapNode = map }>
        </div>
      )

  }
}

export default withRouter(BusinessMap);


// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import MarkerManager from '../../util/marker_manager';
//
//
// const mapOptions = {
//   center: {
//     lat: 40.915494,
//     lng: -74.002209
//   },
//   zoom: 11
// };
//
// const getCoordsObj = latlng => ({
//   lat: latLng.lat(),
//   lng: latLng.lng()
// });
//
// class BusinessMap extends React.Component {
//   // componentDidMount() {
//   //   const mapOptions = {
//   //     center: { lat: 37.7758, lng: -122.435 }, // this is SF
//   //     zoom: 13
//   //   };
//   //
//   // }
//   componentDidMount() {
//     // set the map to show SF
//
//     const map = this.refs.map;
//     this.map = new google.maps.Map(map, mapOptions);
//     this.MarkerManager = new MarkerManager(
//       this.map,
//       this.handleMarkerClick.bind(this)
//     );
//
//
//     this.registerListeners();
//     this.MarkerManager.updateMarkers(this.props.businesses);
//   }
//
//   registerListeners() {
//     google.maps.event.addListener(this.map, 'click', event => {
//       const coords = getCoordsObj(event.latLng);
//     });
//   }
//
//   componentDidUpdate() {
//     google.maps.event.addListener(this.map, 'click', event => {
//       const coords = getCoordsObj(event.latLng);
//     });
//   }
//
//   handleMarkerClick(listing){
//     this.props.history.push(`/businesses/${business.id}`)
//   }
//
//
//
//   render() {
//     return (
//       <div id='map-container' ref='map' >
//       </div>
//     )
//   }
// }
//
// export default withRouter(BusinessMap);
