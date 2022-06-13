// Code your solutions in this file
let messages = [];
function writeCards(arrayOfNames, eventName){
    for(let i=0; i < arrayOfNames.length; i++){
        let cardMessage = `Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`;
        messages.push(cardMessage);
    }
    return messages;
}

function countDown(){
    let countDownNumber = 10;
    while(countDownNumber >= 0){
        countDownNumber--;
        console.log(countDownNumber);
    }
}