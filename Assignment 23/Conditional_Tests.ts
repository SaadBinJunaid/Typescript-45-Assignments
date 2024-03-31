let car = "subaru";
console.log("is car == 'subaru'? !  predict true");
console.log(car == "subaru");

console.log("is car != 'Honda city'? ! predict true");
console.log(car != 'Honda city');

console.log("is car == 'subaru'? ! predict false");
console.log(car === 'subaru');

console.log("is car.length == 6? ! predict true");
console.log(car.length ==6);

console.log("is car.length >= 6 ? ! predict true");
console.log(car.length >= 6);

// now false test start;
console.log("is car == 'fortuner' ? ! predict false");
console.log(car == "fortuner");

console.log("is car != 'subaru' ? ! predict false");
console.log(car != "subaru");

console.log("is car.length > 6 ? ! predict false");
console.log(car.length > 6);

console.log("is car.length < 1 ? ! predict false");
console.log(car.length < 1);

console.log("is car === 'SUBARU' ? ! predict false");
console.log(car === "SUBARU");