/*
'use strict';
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let answer = Math.trunc(Math.random()*20+1);
let score = 20;
let highscore = 0;
'use strict';

const displayMessage = function(destination, message){
    document.querySelector(destination).textContent = message;

}
document.querySelector('.check').addEventListener('click', function(){
    // console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value); 
    console.log(typeof guess);
    if(!guess){
        displayMessage('.message', 'No Number!' );
    }else if(guess === answer){
        displayMessage('.message', 'Your Answer is correct!');
        displayMessage('.number', answer);

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            displayMessage('.highscore', highscore);
        }
    }else if(guess!==answer){
        if(score>1){
            let measure = guess > answer ? 'Too High!' : 'Too Low!';
            displayMessage('.message', measure);
            score--;
            displayMessage('.score', score);
        }else{
            displayMessage('.message', 'You lost the game!');
            displayMessage('.score', 0);
        }        
    }
 }); 

document.querySelector('.again').addEventListener('click', function(){
    answer = Math.trunc(Math.random()*20+1);
    score = 20;
    displayMessage('.message', 'Start guessing...');
    displayMessage('.number', '?');
    displayMessage('.score', 20);
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
})
