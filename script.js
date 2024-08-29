let userscore=0;
let compscore=0;

let msg=document.getElementById("message-box");
let msgUserScore=document.getElementById("user-score");
let msgCompScore=document.getElementById("comp-score");


const Choices=document.querySelectorAll("img");
console.log(Choices);

const drawgame=()=>{
    console.log("It's a draw match");
    msg.innerText="It's a draw match !!";
    msg.style.background="purple";

}
const updatescore=(userwin,userChoice,compchoice)=>{
   if(userwin)
   {
    userscore++;
    msgUserScore.innerText=userscore;
    msg.innerText=`User won as ${userChoice} beats ${compchoice} ☻ !!`;
    msg.style.background="green";

   }
   else{
    compscore++;
    msgCompScore.innerText=compscore;
    msg.innerText=`Computer won as ${compchoice} beats ${userChoice} ☻ !!`;
    msg.style.background="red";
   }
}
const generatecompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randomchosen=Math.floor(Math.random()*3);
    return options[randomchosen];
}

const playgame=(userChoice)=>{
   
    let userwin=true;
    console.log("user choice=",userChoice);
    //generate comp choice
    const compchoice=generatecompchoice();
    console.log("computer choice=",compchoice);
    if(userChoice===compchoice)
    {    
        drawgame();
    }
    else{
          if(userChoice==="rock"&&compchoice=="paper")
          {
            userwin=false;
          }
          else if(userChoice=="rock"&&compchoice==="scissor")
          {
            userwin=true;
          }
          else if(userChoice=="paper"&&compchoice==="rock")
            {
              userwin=true;
            }
            else if(userChoice=="paper"&&compchoice==="scissor")
           {
             userwin=false;
           }
           else if(userChoice=="scissor"&&compchoice==="paper")
            {
              userwin=true;
            }
            else if(userChoice=="scissor"&&compchoice==="rock")
                {
                  userwin=false;
                }
            updatescore(userwin,userChoice,compchoice);

    }
}

Choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});
