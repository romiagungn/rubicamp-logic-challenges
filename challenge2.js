function deretKaskus(n) {
    var hasil = [];

    for (let i = 3; i <= n * 3; i+=3) {
        // assigntment buat mencari perkalian 3 <= n/(10)
        // a = i * 3;
       
        //operator && must be first statement
        if (i % 5 === 0 && i % 6 === 0) {
        //method .push buat masukin ke akhir dari array.
            hasil.push('KASKUS');
        } else if (i % 5 === 0) {
            hasil.push('KAS');
        } else if (i % 6 === 0) {
            hasil.push('KUS');
        } else {
            hasil.push(i);
        }
        //console.log(i);
    }
    return hasil;

}
console.log(deretKaskus(10));