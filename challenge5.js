function stringManipulation(word){
 var vokal = 'a, i, u, e, o';
 var newWord;
    //method .includes menentukan apakah string berisi karakter dari string yang ditentukan
 if(vokal.includes(word[0])){
    console.log(word);
 }else {
    //method .slice(1, word.length) buat menghapus baris ke 1 dan mencetak 4 baris terakhir.
    //method word.lenght untuk mencari bari dari word
    //word[0] adalah index ke 0 dari (word)
    //method .concat untuk menggabungkan arguments
    newWord = word.slice(1, word.length).concat(word[0]+ 'nyo')
    console.log(newWord);
 }
}

stringManipulation('ayam');
stringManipulation('bebek');