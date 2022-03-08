console.log("This is Tut 27");
// Object Literals, Constructors and Object Orientated JavaScript


console.log('\n');
console.log('\n');


// Object  Literals for creating Objects
let car = {
    name: 'Maruti 800',
    topSpeed: 89,
    run: function(){
        console.log("Car is running");
    }
}

console.log(car);
console.log(car.name);
console.log(car.run());










//////////////////////////////////////////////////////////////////////////////////////////////////////




console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');






// we have already seen constructors like these:
// new Date();









// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {

    this.name = givenName;
    this.topSpeed = givenSpeed;

    this.run = function() {
      console.log(`${this.name} Is Running`);
    };

    this.analyze = function() {
      console.log(
        `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
      );
    };

  }



  car1 = new GeneralCar("Nissan", 180);
  car2 = new GeneralCar("Marutu Alto", 80);
  car3 = new GeneralCar("Mercedes", 200);

  console.log(car1, car2, car3);