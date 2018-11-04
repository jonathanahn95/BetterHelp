// export const searchBusinesses = (searchData) => {
// if (searchData.price && searchData.price.length > 0 && searchData.noise && searchData.noise.length > 0 && searchData.delivery && searchData.delivery.length > 0){
//   return $.ajax({
//     method: 'GET',
//     url: `api/businesses/search/?price=${searchData.price}&noise=${searchData.noise}&delivery=${searchData.delivery}`,
//   });
// } else if (searchData.price && searchData.price.length > 0 && searchData.noise && searchData.noise.length > 0) {
//   return $.ajax({
//     method: 'GET',
//     url: `api/businesses/search/?price=${searchData.price}&noise=${searchData.noise}`,
//   });
// } else if (searchData.price && searchData.price.length > 0 && searchData.delivery && searchData.delivery.length > 0) {
//   return $.ajax({
//     method: 'GET',
//     url: `api/businesses/search/?price=${searchData.price}&delivery=${searchData.delivery}`,
//   });
// } else if (searchData.noise && searchData.noise.length > 0 && searchData.delivery && searchData.delivery.length > 0) {
//   return $.ajax({
//     method: 'GET',
//     url: `api/businesses/search/?noise=${searchData.noise}&delivery=${searchData.delivery}`,
//   });
// } else if (searchData.price && searchData.price.length > 0) {
//   return $.ajax({
//     method: 'GET',
//     url: `api/businesses/search/?price=${searchData.price}`,
//   });
// } else if (searchData.noise && searchData.noise.length > 0) {
//   return $.ajax({
//     method: 'GET',
//     url: `api/businesses/search/?noise=${searchData.noise}`,
//   });
// } else if (searchData.delivery && searchData.delivery.length > 0) {
//   return $.ajax({
//     method: 'GET',
//     url: `api/businesses/search/?delivery=${searchData.delivery}`,
//   });
// } else {
//   return $.ajax({
//     method: 'GET',
//     url: `api/businesses/search/?search=${searchData}`,
//   });
// }};

export const searchBusinesses = (query)  => {
	return $.ajax({
		method: 'GET',
		url: `api/businesses/search/?${query}`
	});
};
