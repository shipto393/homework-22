let nameInput = document.getElementById("nameInput")
let startGameBtn = document.getElementById("startGameBtn")
let errorMsg = document.getElementById("errorMsg")
let startScreen = document.getElementById("startScreen")
let playerOneScreen = document.getElementById("playerOneScreen");
let playerOneTitle = document.getElementById("playerOneTitle");


startGameBtn.addEventListener("click", () => {
    if (nameInput.value == "") {
        errorMsg.removeAttribute("hidden");
    } else {
        startScreen.style.display = "none";
        playerOneScreen.style.display = "block";
        playerOneTitle.innerText = nameInput.value;
    }
});





