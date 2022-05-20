
const fourWheeler={
    brand : 'TATA',
    Wheels : 4,
    Stairing : 1,
    HeadLight : 2,
}

const car1=Object.create(fourWheeler,{name:{value:'Altros'}})
const car2=Object.create(fourWheeler,{name:{value:'Tiago'}})
console.log('car2',car2)
console.log('car1',car1)

function Vehicle(type){
    this.type=type
    this.brand = 'TATA';
    this.Wheels = 4;
    this.Stairing = 1;
    this.HeadLight = 2;
}
Vehicle.prototype.fuel='petrol'
let car3= new Vehicle('lightWeight')
let car4= new Vehicle('heiveyWeight')
console.log(car3)