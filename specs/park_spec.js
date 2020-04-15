const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let almosaurus1;
  let almosaurus2;
  let almosaurus3;
  let brachiosaurus1;
  let brachiosaurus2;
  let triceratops1;
  let triceratops2;
  let park;

  beforeEach(function () {
    almosaurus1 = new Dinosaur('almosaurus', 'carnivore', 30);
    almosaurus2 = new Dinosaur('almosaurus', 'carnivore', 40);
    almosaurus3 = new Dinosaur('almosaurus', 'carnivore', 70);

    brachiosaurus1 = new Dinosaur('brachiosaurus', 'omnivore', 20);
    brachiosaurus2 = new Dinosaur('brachiosaurus', 'omnivore', 30);

    triceratops1 = new Dinosaur('triceratops', 'herbivore', 65);
    triceratops2 = new Dinosaur('triceratops', 'herbivore', 70);

    park = new Park('Jurassik Park', 15,[])
  });



  it('should have a name',function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassik Park');
  });

  it('should have a ticket price',function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 15);
  });

  it('should have a collection of dinosaurs',function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.add(triceratops1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [triceratops1]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.add(brachiosaurus1);
    park.add(brachiosaurus2);
    park.remove(brachiosaurus2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [brachiosaurus1]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.add(triceratops2);
    park.add(triceratops1);
    park.add(brachiosaurus1);
    park.add(brachiosaurus2);
    const actual = park.findMostAttractive();
    assert.deepStrictEqual(actual, triceratops2)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.add(triceratops2);
    park.add(triceratops1);
    park.add(brachiosaurus1);
    park.add(brachiosaurus2);
    const actual = park.findBySpecies('brachiosaurus');
    const expected = [brachiosaurus1, brachiosaurus2];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.add(almosaurus1);
    park.add(almosaurus2);
    park.add(almosaurus3);
    park.add(brachiosaurus1);
    park.add(brachiosaurus2);
    park.add(triceratops1);
    park.add(triceratops2);
    const actual = park.visitsPerDay()
    assert.strictEqual(actual, 325);
  });



  it('should be able to calculate the total number of visitors per year',function(){
    park.add(almosaurus1);
    park.add(almosaurus2);
    park.add(almosaurus3);
    park.add(brachiosaurus1);
    park.add(brachiosaurus2);
    park.add(triceratops1);
    park.add(triceratops2);
    const actual = park.averageVisitPerYear();
    assert.strictEqual(actual, 118625);
  });


  it('should be able to remove all dinosaurs of a particular species', function() {
    park.add(almosaurus1);
    park.add(almosaurus2);
    park.add(almosaurus3);
    park.add(brachiosaurus1);
    park.add(brachiosaurus2);
    park.add(triceratops1);
    park.add(triceratops2);
    park.removeBySpecies('almosaurus');
    const actual = park.dinosaurs;
    const expected = [brachiosaurus1, brachiosaurus2, triceratops1, triceratops2];
    assert.deepStrictEqual(actual,expected);
  });

  it('should be able to calculate number of dinosaurs for each diet type', function() {
    park.add(almosaurus1);
    park.add(almosaurus2);
    park.add(almosaurus3);
    park.add(brachiosaurus1);
    park.add(brachiosaurus2);
    park.add(triceratops1);
    park.add(triceratops2);
    const actual = park.numberOfDinosaursByDiet()
    const expected = {carnivore: 3, omnivore: 2, herbivore: 2};
    assert.deepStrictEqual(actual, expected);
  });


});
