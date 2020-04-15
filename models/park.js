const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];

};

Park.prototype.add = function (value) {
  this.dinosaurs.push(value);
};

Park.prototype.remove = function (value) {
  const arr_index = this.dinosaurs.indexOf(value);
  this.dinosaurs.splice(arr_index, 1);
};

Park.prototype.findMostAttractive = function() {
  let vipDinosaur = this.dinosaurs[0];

  for(const dinosaur of this.dinosaurs){
    if (dinosaur.guestsAttractedPerDay === vipDinosaur.guestsAttractedPerDay){
      vipDinosaur = dinosaur;
    }
  }return vipDinosaur;
};

Park.prototype.findBySpecies = function(value) {
  const newArr = []
for(const dinosaur of this.dinosaurs){
  if (dinosaur.species ===  value) {
    newArr.push(dinosaur)
  }
}return newArr;
};

Park.prototype.visitsPerDay = function() {
  let dailyVisit = 0;
  for(const dinosaur of this.dinosaurs){
    dailyVisit += dinosaur.guestsAttractedPerDay;
  }return dailyVisit;
};

Park.prototype.averageVisitPerYear = function() {
  let total = this.visitsPerDay() * 365
  return total ;
};

Park.prototype.removeBySpecies = function (value) {
  const speciesToBeSaved = [];
  for(const dinosaur of this.dinosaurs){
    if(dinosaur.species !== value){
      speciesToBeSaved.push(dinosaur);
    }
  }return this.dinosaurs = speciesToBeSaved;
};

Park.prototype.numberOfDinosaursByDiet = function() {
  const objectDinoDiet = {};

  for(const dinosaur of this.dinosaurs){
    if (objectDinoDiet[dinosaur.diet]){
      objectDinoDiet[dinosaur.diet] += 1;
    }else{
      objectDinoDiet[dinosaur.diet] = 1;
    }
  }return objectDinoDiet;
};

module.exports = Park;
