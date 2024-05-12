let board = document.getElementById("chessboard1");
let str1 = "";
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

for(let j = 8; j>0; j--){
    str1 += `<tr>`;
    for(let i = 1; i<9; i++){
        if((j%2 == 0) && (i%2 == 0)){
            str1 += '<td style="background-color: #B96131;" id='+letters[i-1]+j+'></td>';            
        }

        else if((j%2 == 1) && (i%2 == 1)){
            str1 += '<td style="background-color: #B96131;" id='+letters[i-1]+j+'></td>';            
        }
        
        else{
            str1 += '<td style="background-color: #F3DBBA;" id='+letters[i-1]+j+'></td>';
        }        
    }
    str1 += "</tr>";
}

board.innerHTML = str1;