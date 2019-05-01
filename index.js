document.getElementById("button").addEventListener("click", function rollDice(){

    let randomNumber1 = Math.floor(Math.random()*6)+1
    let randomNumber2 = Math.floor(Math.random()*6)+1
    
    
    let dice1 = document.querySelectorAll("img")[0]
    let dice2 = document.querySelectorAll("img")[1]
    
    dice1.setAttribute("src", `images/dice${randomNumber1}.png`)
    dice2.setAttribute("src", `images/dice${randomNumber2}.png`)
    
    let myNewHeader = document.getElementsByTagName("h1")
    
    if (randomNumber1> randomNumber2){
        myNewHeader[0].textContent="Player 1 Wins!"
    } else if (randomNumber1< randomNumber2){
        myNewHeader[0].textContent="Player 2 Wins!"
    }else {
        myNewHeader[0].textContent="Draw!"

    }
})