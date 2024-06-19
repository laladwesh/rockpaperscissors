let userScore = 0;
let compScore = 0;
const user = document.querySelector("#user-score");
const msgg = document.querySelector("#mis");
const computer = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const playGame = (choiceId) =>  {
    const options = ["rock" , "scissor", "paper"];
    const idx = Math.floor(Math.random()*3)
    return options[idx];
};
const drawGame = () => {
    console.log("Draw game");
}
const showWinner = (userWin , choiceId ,compChoice) => {
    if(userWin){
        console.log("useer wonn");
        userScore++;
        msgg.classList.remove("msg-container" , "draw");
        msgg.classList.add("win");
        msgg.classList.remove("lose");
        user.innerText = userScore;
        msgg.innerText = `You Won! ${choiceId} beats ${compChoice}`;
    }
    else{
        console.log("compWon");
        compScore++;
        msgg.classList.remove("msg-container", "draw");
        msgg.classList.add("lose");
        msgg.classList.remove("win");
        computer.innerText = compScore;
        msgg.innerText = `You Lose! ${compChoice} beats ${choiceId}`;
    }
}
choices.forEach((choice) =>{
    console.log(choice)
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id")
        console.log("choice was clicked" , choiceId);
        const compChoice = playGame(choiceId);
        console.log("Comp Choice id " , compChoice);
        if(choiceId === compChoice){
            drawGame();
            msgg.innerText = "Game was Draw Please try again";
            msgg.classList.remove("msg-container");
            msgg.classList.add("draw");
        }
        else{
            let userWin = true;
            if(choiceId === "rock"){
                userWin = compChoice === "paper" ? false : true;
            } else if(choiceId === "paper"){
                userWin = compChoice === "scissor" ? false : true;
            }else{
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin , choiceId ,compChoice );
        }
    });
});