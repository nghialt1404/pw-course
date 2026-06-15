//1 
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log(car.year);
//2
let person = {
    name: "Ray",
    address: {
        street: "Cong Hoa",
        city: "Ho Chi Minh",
        country: "Viet Nam"

    }
}
console.log(person.address.street);

//3
let student = {
    name: "Ray",
    grades: {
        math: 9,
        english: 10,
    }
}
console.log(student["grades"]["math"]);

//4
let settings = {
    volumn: 100,
    brightness: 60
}
settings.volumn = 80;
console.log(settings.volumn);

//5
let bike = {
}
bike.color = "blue";
console.log(bike.color);

//6
let employee = {
    name: "Ray",
    age: 32
}
delete employee.age;
console.log(employee);

//7
const school = {
    classA: [An, Bình, Châu],
    classB: [Đào, Hương, Giang]
}
delete employee.age;
console.log(employee);


