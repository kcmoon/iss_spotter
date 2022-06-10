const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const myIP = JSON.parse(body).ip;
  return request(`https://api.ipbase.com/v1/json/${myIP}`);
};

const fetchISSFlyOverTimes = function(body) {
  const {latitude, longitude} = JSON.parse(body);
  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}&n=5`)
}; 

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then (fetchCoordsByIP)
    .then (fetchISSFlyOverTimes)
    .then ((body) => {
      return JSON.parse(body)
    });
};

module.exports = {
  nextISSTimesForMyLocation
}