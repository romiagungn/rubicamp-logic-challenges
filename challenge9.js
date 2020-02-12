function spiral(prima1) {
    let start1 = 0;
    let start2 = 0;
    let end1 = prima1 - 1;
    let end2 = prima1 - 1;
    let hasil = [];
    let result = [];
    let spiral = 0;

    for (let i = 0; i < prima1; i++){
        hasil[i] = [];
        for (let j = 0; j < prima1; j++){
            hasil[i][j] = spiral++;
        }
    }
    while (start1 <= end1 && start2 <= end2){
        for (let i = start1; i <= end1; i++){
            result.push(hasil[start1][i])
        }
        start2++;
        for (let i = start2; i <= end2; i++){
            result.push(hasil[i][end1]);
        }
        end1--;
        for (let i = end1; i >= start1; i--){
            result.push(hasil[end2][i]);
        }
        end2--;
        for (let i = end2; i >= start2; i--){
            result.push(hasil[i][start1]);
        }
        start1++;        
    }
    console.log(result)
    return hasil;

}

spiral(5);
spiral(6);
spiral(7);