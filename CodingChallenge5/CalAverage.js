//  1.  Create an arrow function 'calcAverage' to calculate the average of 3 scores
var calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

//  2.  Use the function to calculate the average for both teams
var diem1Dolphins = prompt("Điểm lần 1 của Dolphins:")
var diem2Dolphins = prompt("Điểm lần 2 của Dolphins:")
var diem3Dolphins = prompt("Điểm lần 3 của Dolphins:")
var avgDolphins = calcAverage(diem1Dolphins, diem2Dolphins, diem3Dolphins)

var diem1Koalas = prompt("Điểm lần 1 của Koalas:")
var diem2Koalas = prompt("Điểm lần 2 của Koalas:")
var diem3Koalas = prompt("Điểm lần 3 của Koalas:")
var avgKoalas = calcAverage(diem1Koalas, diem2Koalas, diem3Koalas)

// 3.  Create a function 'checkWinner' that takes the average score of each team as 
// parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, \
// together with the victory points, according to the rule above.
var checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log("No team wins")
    }
}

// 4.  Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
checkWinner(avgDolphins, avgKoalas)