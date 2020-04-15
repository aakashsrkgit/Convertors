const game  =  ()=> {
   let  pScore = 0;
   let cScore = 0;

   //Start the game
   const startGame = () =>{
       const playBtn = document.querySelector(".intro button");
       const introScreen = document.querySelector(".intro");
       const match = document.querySelector(".match");

       playBtn.addEventListener("click", () => {
         introScreen.classList.add("fadeout");
         match.classList.add("fadeIn")
       });
   };

   //Is call all the inner function
   startGame();
};

//start the game function
game();