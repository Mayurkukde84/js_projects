// const Person = function (firstName,birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear)
// }

// const Student = function (firstName, birthYear, course){
//     Person.call(this,firstName,birthYear)
//     this.course = course;
// };

// Student.prototype.introduce = function(){
//     console.log(`My name is ${this.firstName} and i study ${this.course}`)
// };

// const mike = new Student ('Mike', 2020, 'Computer Science');
// console.log(mike)
// mike.introduce();



const Car = function (make,speed){
    this.make = make;
    this.speed = speed;

};

Car.prototype.accelrate = function (){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);

}
Car.prototype.brake = function (){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);

}

const Ev = function(make,speed,charge){
    Car.call(this,make,speed)
    this.charge = charge;

}

///link to prototype

Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function (chargeTo){
    this.charge = chargeTo;
}

Ev.prototype.accelrate = function () {
    this.speed += 20;
    this.charge --;
    console.log(`${this.make} is going at ${this.speed}km/h, with a charge ofd\ ${this.charge}`)
}

const tesla = new Ev('tesla',120,23)
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelrate();