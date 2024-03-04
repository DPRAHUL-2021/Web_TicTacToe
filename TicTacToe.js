let container = document.querySelector(".container");
let box = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-game");
let newbtn = document.querySelector(".new-game");
let msgcontainer = document.querySelector(".msg-container");
let msgpara = document.querySelector(".msg");
let PlayerX = document.querySelector(".Player-X");
let PlayerO = document.querySelector(".Player-O");

let currentUser = "O";
let count = 0;
const winCondition = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [6,4,2]
];

// const showUser = () =>{
//     PlayerX.classList.add("hidden");
//     PlayerO.classList.remove("hidden");
// }

function switchUser()
{
    if(currentUser == "O")
    {
        currentUser = "X";
        PlayerX.classList.add("hidden");
        PlayerO.classList.remove("hidden");
    }
    else
    {
        currentUser = "O";
        PlayerX.classList.remove("hidden");
        PlayerO.classList.add("hidden");
    }
}

const resetGame = () => {
    currentUser = "O";
    enabledBox();
    container.style.marginTop = "2rem";
    msgpara.classList.add("hidden");
    newbtn.classList.add("hidden");
    resetbtn.classList.remove("reset-extra-details");
    PlayerX.classList.remove("hidden");
}

const newGame = () => {
    currentUser = "O";
    enabledBox();
    container.style.marginTop = "2rem";
    msgpara.classList.add("hidden");
    newbtn.classList.add("hidden");
    resetbtn.classList.remove("reset-extra-details");
    PlayerX.classList.remove("hidden");
}



box.forEach((boxes) => {
    boxes.addEventListener("click",()=>{
        if(currentUser == "X")
        {
            boxes.innerHTML = "O";
            switchUser();
        }
        else if(currentUser == "O")
        {
            boxes.innerHTML = "X";
            switchUser();
        }
        boxes.disabled = true;
        count = count + 1;
        checkWinner();
    })
});

const disabledBox = () =>{
    for(let boxes of box)
    {
        boxes.disabled = true;
    }
};

const enabledBox = () =>{
    for(let boxes of box)
    {
        boxes.disabled = false;
        boxes.innerHTML = "";
        count = 0;
    }
};

const showWinner = (winner) =>{
    msgpara.innerText = `Congrats , Winner Is Player ${winner}`;
    msgpara.classList.remove("hidden");
    container.style.marginTop = "1.7rem";
    disabledBox();
    newbtn.classList.remove("hidden");
    resetbtn.classList.add("reset-extra-details");
    PlayerX.classList.add("hidden");
    PlayerO.classList.add("hidden");
    // resetbtn.classList.add("hidden");

};

const grawDame = () =>{
    msgpara.innerText = `The Game Is A Draw`;
    msgpara.classList.remove("hidden");
    container.style.marginTop = "1.7rem";
    disabledBox();
    newbtn.classList.remove("hidden");
    resetbtn.classList.add("reset-extra-details");
    PlayerX.classList.add("hidden");
    PlayerO.classList.add("hidden");
};



const checkWinner = () => {
    for(let pattern of winCondition)
    {
        let value1 = box[pattern[0]].innerText;
        let value2 = box[pattern[1]].innerText;
        let value3 = box[pattern[2]].innerText;
        if(value1 != "" && value2 != "" && value3 != "")
        {
            if(value1 === value2 && value2 === value3)
            {
                showWinner(currentUser);
            }
        }
    }
    if(count === 9)
    {
        grawDame();
    }
}

newbtn.addEventListener("click",newGame);
resetbtn.addEventListener("click",resetGame);