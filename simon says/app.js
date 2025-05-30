let palyer = [];
let sequence = [];
let level = 0;  
let started = false;
let color = ["red", "blue", "green", "yellow"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (!started){
        console.log("Game started");
        started = true ;

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout (function(){
        btn.classList.remove("flash");
    }, 200);
}

function levelup(){
    palyer = [];
    level++;
    h2.innerText = "Level " + level;

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = color[randomNumber];
    let btn = document.querySelector("." + randomChosenColor);
    sequence.push(randomChosenColor);
    palyer = [];
    console.log(sequence);
    console.log(palyer);
    console.log(randomChosenColor)
    btnflash(btn);
}

function checkans(idx){
    console.log("current level " + level);
    console.log("user ans " + palyer);

    if (palyer[idx] === sequence[idx]){
        console.log("correct");
        if (palyer.length === sequence.length){
            setTimeout(function(){
                levelup();
            }, 1000);
        }
    }
    else {
        h2.innerHTML = "Game Over !, Your score was <b>${level}</b> <br>Press Any Key to Restart";
        console.log("wrong");
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        rest();
    }
}

function btnclick(){
    console.log (this +" clicked");
    let btn = this;
    btnflash(btn); 

    let user  = btn.getAttribute("id");
    palyer.push(user);
    console.log(palyer);

    checkans(palyer.length - 1);
    console.log("user ans " + palyer);
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn){
btn.addEventListener("click", btnclick);
}

function rest(){
    sequence = [];
    palyer = [];
    level = 0;
    started = false;
    h2.innerText = "Press Any Key to Start";
    console.log("Game restarted");
}