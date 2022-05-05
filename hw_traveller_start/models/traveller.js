const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.find((journey) => {
    return journey.startLocation === startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.find((journey) => {
    return journey.endLocation === endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.find((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.every((journey) => {
    return journey.length >= length;
  })

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, distance) => {
    return total += distance.length;
  })
};

Traveller.prototype.getUniqueModesOfTransport = function (transport, value) {
  return this.journeys.filter((transport) => {
    return journey[transport] === value;
  })
};


module.exports = Traveller;
