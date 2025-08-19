//your JS code here. If required.
const submitButton = document.getElementById('submit');
const inputSection = document.querySelector('#inputdata');
const gameSection = document.querySelector('.game-section');
const boardElement = document.getElementById('board');
const messageElement = document.getElementById('message');

let players = [];
let currentPlayer = 0;
let board = Array(9).fill(null);

// board ['X','O','X', 'O'------]
// [
//     0,1,2
//     3,4,5
//     6,7,8
// ]

const winningCombination = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];


function handleCellClick(index){

    if(board[index] || checkWinner()) return;
    board[index] = currentPlayer === 0 ? 'X' : 'O';
    document.getElementById(index).textContent = board[index];
if(checkWinner()){
    
       messageElement.style.color="orange";
        const imgdata = document.createElement("img");
        imgdata.setAttribute("src", "./win_9949456.png");
        imgdata.setAttribute("width" ,"70px");
        imgdata.setAttribute("height","70px");
        document.querySelector(".contain").insertBefore(imgdata, document.querySelector(".contain").children[0]);
        messageElement.textContent = `${players[currentPlayer].toUpperCase()} wins!`;
        console.log(winnerdata);
        for(let i=0;i<winnerdata.length;i++){
            document.getElementById(`${winnerdata[i]}`).style.backgroundColor = "Magenta";

        }

    }else if(board.every(cell => cell)){
        messageElement.style.color="brown";
        
        const imgdata = document.createElement("img");
        imgdata.setAttribute("src", "./handshake.png");
        imgdata.setAttribute("width" ,"70px");
        imgdata.setAttribute("height","70px");
        document.querySelector(".contain").insertBefore(imgdata, document.querySelector(".contain").children[0]);
        messageElement.textContent = "it's a Draw";

    }else{
        currentPlayer = 1- currentPlayer;
        messageElement.textContent = `${players[currentPlayer].toUpperCase()}'s Turn!`;
    }

}

// let winnerdata;
// function checkWinner(){
//     return winningCombination.some(combination =>
//         combination.every(index => board[index] === (currentPlayer === 0 ? 'X' : 'O'))
//     );
//     winnerdata=combination;
// }

let winnerdata = null;

function checkWinner() {
    const symbol = (currentPlayer === 0 ? 'X' : 'O');

    return winningCombination.some(combination => {
        if (combination.every(index => board[index] === symbol)) {
            winnerdata = combination; // save the winning combo
            return true; // stop searching
        }
        return false;
    });
}

document.querySelector(".startagain").addEventListener('click', ()=>{
    inputSection.style.display = "block";
    gameSection.style.display = "none";
    document.querySelector(".startdiv").style.display="none";
   document.querySelector("img").style.display= "none";
   document.querySelectorAll(".board > div").forEach(el => {
  el.style.backgroundColor = "lightpink";
});


})
submitButton.addEventListener('click', () => {
    const player1 = document.getElementById('player-1').value.trim();
    const player2 = document.getElementById('player-2').value.trim();

    if(!player1 || !player2){
        alert('enter another player name');
        return;
    }

    players = [player1, player2];
    currentPlayer = 0;
    board.fill(null);
for(let i = 0; i < 9; i++){
        const cell = document.getElementById(i);
        cell.textContent = '';
        cell.addEventListener('click', () => handleCellClick(i));
    }
    // document.getElementById("inputdata").style.display="none";
    inputSection.style.display = "none";
    console.log(inputSection);
    gameSection.style.display = "block";
    messageElement.style.color="green";
    messageElement.style.padding="20px";
    messageElement.textContent = `${players[currentPlayer].toUpperCase()}, You're up`;
    document.querySelector(".startdiv").style.display="block";
    document.querySelector(".startdiv").style.textalign="center";
});
