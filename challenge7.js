function weirdMultiply(sentence) {
    let angka = sentence.toString();
    let a = 1;

    if (angka.length > 1) {
        for (let i = 0; i < angka.length; i++) {

            a = a * angka[i];
            console.log(a)
        }
        return weirdMultiply(a);
    }

    return sentence;
}
console.log(weirdMultiply(39)); 
// console.log(weirdMultiply(999)); 
// console.log(weirdMultiply(3));