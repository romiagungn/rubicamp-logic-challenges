/* challange 8
1. pisahkan value str jadi per index
2. method konversi , ganti
3. buat array
4. nested loop
5. kondisi
6. method masukan
*/
function pola(str) {
    var potong = str.split(" ");
    var arr = [];

    for (let i = 0; i < 10; i++) {
        for (let a = 0; a < 10; a++) {
            if (parseInt(potong[0].replace('#', i)) * parseInt(potong[2])
                === parseInt(potong[4].replace('#', a))) {
                arr.push(i, a);
            }
        }

    }
    return arr;
}

console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));