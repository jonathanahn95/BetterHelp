export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }


  // updateMarkers(businesses) {
  //   const businessesObj = {};
  //   businesses.forEach(business => businessesObj[business.id] = business);
  //
  //  businesses
  //    .filter(business => !this.markers[business.id])
  //    .forEach(newBusiness => this.createMarkerFromBench(newBusiness, this.handleClick));
  //
  //  Object.keys(this.markers)
  //    .filter(businessId => !businessesObj[businessId])
  //    .forEach((businessId) => this.removeMarker(this.markers[businessId]));
  // }
  //
  // createMarkerFromBench(business) {
  //   const position = new google.maps.LatLng(business.lat, business.lng);
  //   const marker = new google.maps.Marker({
  //     position,
  //     map: this.map,
  //     businessId: business.id
  //   });
  //
  //   marker.addListener('click', () => this.handleClick(business));
  //   this.markers[marker.businessId] = marker;
  // }


}
