const userService = require('./services/user-service');
const hotelService = require('./services/hotel-service');
const priceService = require('./services/price-service');
const helper = require('./services/helper');

function findHotelsNearby(lat, lng, radius) {
    
}

function findHotelNearbyWithBestOffer(lat, lng, radius, date) {
    // TODO implement me
    return null;
}

function findHotelNearbyWithBestOfferForUser(lat, lng, radius, date, userId) {
    // TODO implement me
    return null;
}

module.exports = {
	findHotelsNearby: findHotelsNearby,
	findHotelNearbyWithBestOffer: findHotelNearbyWithBestOffer,
	findHotelNearbyWithBestOfferForUser: findHotelNearbyWithBestOfferForUser
}
