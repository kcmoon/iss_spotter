const { nextISSTimesForMyLocation } = require('./iss_promised')
const { printFlyOverTimes } = require('./index')

nextISSTimesForMyLocation()
  .then((flyOverTimes) => {
    printFlyOverTimes(flyOverTimes);
  })
  .catch((error) => {
    console.log('It didn\'t work: ', error.message);
  });
