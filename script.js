// selector
const box = document.getElementsByClassName("box");
const resetbtn = document.getElementById("reset");
const scoreBoard = document.getElementById("scoreBoard"); 

// Methods
function checkTurn(a){
    if( gameStatus === true && turn === true && box[a].innerText === ""){
        box[a].innerText = "X";
        turn = false;
        assign(a);
        return;
    }
    
    if(gameStatus === true && turn === false && box[a].innerText === ""){
        box[a].innerText = "O";
        turn = true;
        assign(a);
        return;
    }

    if(box[a].innerText != ""){
        console.log("invalid");
    }
};

function assign(a) {

        if(box[a] === box[0]){
            b0 = box[a].innerText;
        }
        
        if(box[a] === box[1]){
            b1 = box[a].innerText;
        }

        if(box[a] === box[2]){
            b2 = box[a].innerText;
        }

        if(box[a] === box[3]){
            b3 = box[a].innerText;
        }

        if(box[a] === box[4]){
            b4 = box[a].innerText;
        }

        if(box[a] === box[5]){
            b5 = box[a].innerText;
        }

        if(box[a] === box[6]){
            b6 = box[a].innerText;
        }

        if(box[a] === box[7]){
            b7 = box[a].innerText;
        }

        if(box[a] === box[8]){
            b8 = box[a].innerText;
        }
}

function winner() {
    const winCombo = [
        [b0,b1,b2],
        [b0,b3,b6],
        [b6,b7,b8],
        [b8,b5,b2],
        [b0,b4,b8],
        [b2,b4,b6],
        [b1,b4,b7],
        [b3,b4,b5]
    ]

    for(let i = 0; i < winCombo.length; i++){

        const [a,b,c]  = winCombo[i];

        if(a != undefined && a==b && b==c){
            console.log(`Round ${round} \nwinner is ${a}`);
            scoreBoard.innerText = `Round ${round} winner is ${a}`;
            gameStatus = false;
            winnerName = a; 
            round++;
            return true;
        }
    }
    return false;
}

function checkDraw() {
    for (let i = 0; i < box.length; i++) {
        if (box[i].innerText === "") {
            return false;
        }
    }
    return true;
}


function reset(){
    for(let i=0; i < box.length; i++){
        box[i].innerText = "";
    };
    turn = true;
    gameStatus = true;
    b0=b1=b2=b3=b4=b5=b6=b7=b8 = undefined;
}

// Variable
let round = 1;
let turn = true;
let gameStatus = true;
let b0,b1,b2,b3,b4,b5,b6,b7,b8;
let winnerName;

// excutable
for(let i=0; i < box.length; i++){
    box[i].addEventListener("click",()=>{

        if(gameStatus){
            checkTurn(i);
            winner();
            if (checkDraw() && !winner()) {
                console.log("It's a draw!");
                scoreBoard.innerText = "It's a draw!";
                gameStatus = false;
            }
        }else{
            console.log(`Game Over!!! ${winnerName} won the round ${round} plz Reset to play round ${round+1}.`)
            scoreBoard.innerText = `Game Over!!! ${winnerName} won the round ${round} plz Reset to play round ${round+1}.`;
        }
       
    })
};

resetbtn.addEventListener('click',()=>{
    reset();
})

