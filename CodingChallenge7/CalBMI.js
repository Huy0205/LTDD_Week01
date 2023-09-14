// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
function createObject(name, mass, height) {
    return {
        name: name,
        mass: mass,
        height: height,
    }
}

var mark = createObject('Mark Miller', 78, 1.69);
var john = createObject('John Smith', 92, 1.95);

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return
// it from the method.
mark.calcBMI = function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
}

john.calcBMI = function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
}

console.log(mark);
console.log(john);

// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
if (mark.calcBMI() > john.calcBMI()) {
    console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`)
} else if (mark.calcBMI() < john.calcBMI()) {    
    console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`)
} else {
    console.log(`Mark's BMI (${mark.bmi}) is equal to John's (${john.bmi})!`)
}

