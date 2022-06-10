const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didn\'t work!', error);
//     return;
//   }
//   console.log('It worked! Returned IP', ip);
// });

// // let myIP = '23.16.111.179';

// // fetchCoordsByIP(myIP, (error, coordinates) => {
// //    if (error) {
// //      console.log('Coordinates not found', error);
// //      return;
// //    }
// //    console.log('Coordinates found', coordinates)
// // });

// // let myCoordinates = latitude: 49.03118133544922, longitude: -122.3010482788086

// fetchISSFlyOverTimes(myCoordinates, (error, flyOverTimes) => {
//   if (error) {
//     console.log('Fly over times not found', error);
//     return;
//   }
//   console.log('Fly over times found', flyOverTimes);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printFlyOverTimes(passTimes);
});

const printFlyOverTimes = function(flyOverTimes) {
  for (let flyOver of flyOverTimes) {
    // console.log(flyOver);
    let datetime = new Date(0);
    datetime.setUTCSeconds(flyOver.risetime);
    //console.log(datetime)
    console.log(`Next pass at ${datetime} for ${flyOver.duration} seconds!`);
  }
};
 
module.exports = {
  printFlyOverTimes
}