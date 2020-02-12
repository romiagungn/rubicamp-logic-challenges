/* challange 6
1. copy semua function challange 5
2. cari method string yang buat misahin jadi per kata
3. buat variable kosong
4. looping
5. cari method untuk memasukan hasil ke variable
6. cari method untuk menggabungkan hasil menjadi kalimat lagi
 
*/

function stringManipulation(word){
    var vokal = 'a, i, u, e, o';
    var newWord;

    if(vokal.includes(word[0])){
       return word;
    }else {
       newWord = word.slice(1, word.length).concat(word[0]+ 'nyo')
       return newWord;
    }
   }
function sentenceManipulation(sentence){
    var kata = sentence.split(" ");
    var a = [];

    for (let i = 0; i < kata.length; i++){
        a.push(stringManipulation(kata[i]));
     //   console.log(a);
    }
    console.log(a.join(" "));
  }
   
sentenceManipulation('ibu pergi ke pasar bersama aku');
