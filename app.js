const computerchoicedisplay = document.getElementById('computer-choice')
const userchoicedisplay = document.getElementById('user-choice')
const resultdisplay = document.getElementById('result')
const possiblechoice = document.querySelectorAll('button')

let userchoice
let computerchoice
let result

possiblechoice.forEach(possiblechoice => possiblechoice.addEventListener('click',(p) => {
    userchoice = p.target.id
    userchoicedisplay.innerHTML=userchoice
    generateComputerChoice()
    getresult()
}))

function generateComputerChoice(){
    const randomNumber =Math.floor(Math.random() * possiblechoice.length) + 1

if(randomNumber === 1){
    computerchoice = 'rock'
}
if(randomNumber === 2){
    computerchoice = 'scissor'
}
if(randomNumber === 3){
    computerchoice = 'paper'
}
 computerchoicedisplay.innerHTML = computerchoice
}

function getresult() {
    if( computerchoice === userchoice){
        result = 'its a draw!'
    }
    if( computerchoice === 'rock' && userchoice === 'paper'){
        result = 'you won!'
    }
    if( computerchoice === 'paper' && userchoice === 'scissor'){
        result = 'you won!'
    }
    if( computerchoice === 'scissor' && userchoice === 'paper'){
        result = 'you lost!'
    }
    if( computerchoice === 'rock' && userchoice === 'scissor'){
        result = 'you lost!'
    }
    if( computerchoice === 'paper' && userchoice === 'scissor'){
        result = 'you won!'
    }
    if( computerchoice === 'paper' && userchoice === 'rock' ){
        result = 'you lost!'
    }


    resultdisplay.innerHTML = result
}