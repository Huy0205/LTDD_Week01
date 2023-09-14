// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
var printForecast = (arr) => {
    var str = ''
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days ... `
    }
    console.log(str)
}

var data1 = [17, 21, 23]
var data2 = [12, 5, -5, 0, 4]

printForecast(data1)
printForecast(data2)