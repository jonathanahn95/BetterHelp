export const searchBusinesses = (query)  => {
	return $.ajax({
		method: 'GET',
		url: `api/businesses/search/?${query}`
	});
};
