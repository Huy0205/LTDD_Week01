// 1.
function calAverage(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3
}

var diem1Dolphins = prompt("Điểm lần 1 của Dolphins:")
var diem2Dolphins = prompt("Điểm lần 2 của Dolphins:")
var diem3Dolphins = prompt("Điểm lần 3 của Dolphins:")
var diemTBDolphins = calAverage(diem1Dolphins, diem2Dolphins, diem3Dolphins)

var diem1Koalas = prompt("Điểm lần 1 của Koalas:")
var diem2Koalas = prompt("Điểm lần 2 của Koalas:")
var diem3Koalas = prompt("Điểm lần 3 của Koalas:")
var diemTBKoalas = calAverage(diem1Koalas, diem2Koalas, diem3Koalas)

// 2.
if (diemTBDolphins > diemTBKoalas) {
    console.log("Dolphins win")
} else if (diemTBDolphins < diemTBKoalas) {
    console.log("Koalas win")
} else {
    console.log("draw")
}

// 3. 
if (diemTBDolphins >= 100 && diemTBDolphins > diemTBKoalas) {
    console.log("Bonus 1: Dolphins win")
}
if (diemTBKoalas >= 100 && diemTBKoalas < diemTBDolphins) {
    console.log("Bonus 1: Koalas win")
}

// 4.
if ((diemTBDolphins >= 100) && (diemTBKoalas >= 100) && (diemTBDolphins = diemTBKoalas)) {
    console.log("Bonus 2: draw")
}