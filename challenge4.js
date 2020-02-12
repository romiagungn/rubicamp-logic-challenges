function indexPrime(param1) {
    var index = 0; // +1 , 2 , 2
    var prima = 2;
    var isPrime;

    while (index < param1) {
        isPrime = true;
        for (var i = 2; i <= Math.sqrt(prima); i++) {
            if (prima % i === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            index++;
        }
        prima++;
    }
    return prima -1 ;
}

console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))


function cek(prima) {
    //looping menentukan bilangan prima apa bukan
    for (let i = 2; i < prima; i++) {
        if (prima % i === 0) {
            // jika blok for = true , turun ke IF , jika if = true langsung mengembalikan nilai false.
            return false;
        }
    } 
    // jika blok for = false , langsung keluar blok dan mengembalikan nilai true
    return true;

}
function indexPrime(param1) {
    var prima = 2; // 3 , 4 , 5 dst sampe nilai index < param1
    var index = 0; // +1 , 2 , 2
    while (index < param1) {
        if (cek(prima) === true){
       // kalau cek(prima == true) index naek prima naek
       index++;
        }
       // kalau cek(prima == false) index ga naek tapi prima naek
       prima++;
    }
    // return prima = buat mengembalikan ke prima ++
     return prima - 1;
}

console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))