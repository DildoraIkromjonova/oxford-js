  
let str = "lo2rem ip5sum 7 dol9or";
let harflar = "";
let sonlar = "";

for (let a of str) {
  if (a >= "0" && a <= "9") {
    harflar+=a;
  } else {
    sonlar+=a;
  }
}
console.log(harflar);
console.log(sonlar);