// Coding Challenge #1
function calBMI(mass, height) {
    return mass / height ** 2
}
var massMark = 95
var heightMark = 1.88
var bmiMark = calBMI(massMark, heightMark)
debugger
console.log(`Mark's BMI: ${bmiMark}`)

var massJohn = 85
var heightJohn = 1.76
var bmiJohn = calBMI(massJohn, heightJohn)
console.log(`John's BMI: ${calBMI(massJohn, heightJohn)}`)

var markHigherBMI = bmiMark > bmiJohn

// Coding Challenge #2
// 1.
if (markHigherBMI == true) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}

// 2.
if (markHigherBMI == true) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
}