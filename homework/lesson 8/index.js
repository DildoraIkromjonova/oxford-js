
const numbers = [4, 8, 6, 10, 2];

function ortaArifmetik(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}
function ortaGeometrik(arr) {
    const product = arr.reduce((a, b) => a * b, 1);
    return Math.pow(product, 1 / arr.length);
}
const arifmetik = ortaArifmetik(numbers);
const geometrik = ortaGeometrik(numbers);

console.log("O'rtacha arifmetik:", arifmetik.toFixed(2));
console.log("O'rtacha geometrik:", geometrik.toFixed(2));
