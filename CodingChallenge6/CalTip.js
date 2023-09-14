// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
function calTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2
}

// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
var bills = [125, 555, 44]

// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
var tips = []
bills.forEach(element => {
    console.log((element >= 50 && element <= 300) ? element * 0.15 : element * 0.2)
    tips.push(calTip(element))
});


// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
var total = []
for (let i = 0; i < tips.length; i++) {
    total.push(tips[i] + bills[i])
}

for (let i = 0; i < tips.length; i++) {
    console.log(`Bill ${i + 1} is ${bills[i]}, tip is ${tips[i]}, total is ${total[i]}`)
}
