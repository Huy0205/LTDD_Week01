var billValue = prompt("Enter the bill value:")
var tip  = (billValue >= 50 && billValue <= 300) ? billValue * 0.15 : billValue * 0.2
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`)