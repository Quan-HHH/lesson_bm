Car.prototype.height = 1400
Car.prototype.long = 4900
Car.prototype.carName = 'BMW'


function Car(color, owner) {
    this.color = color;
    this.owner = owner;
    // this.carName = 'BMW';
    // this.long = 4900
    // this.height = 1400
}

var car = new Car('red', 'huang');
var car1 = new Car('green', 'haonan')