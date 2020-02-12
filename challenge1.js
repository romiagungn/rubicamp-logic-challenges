function sum(){
    var a = 0;
    //argument.length = menentukan baris dari argument
    for ( let i = 0; i < arguments.length; i++){
        //assigntment penjumlahan wadah A + argument ke i.
        a = a + arguments[i];
    }
    console.log(a);
}

// invok (argument) , argument (isi (angka) dari function)
sum(1,2,7);
sum(1,4);
sum(11);
sum(10,3,6,7,9);