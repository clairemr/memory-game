const cards = document.querySelectorAll('.card');
let firstCardFlipped = false;
let lockBoard = false;
let firstCard, secondCard;
    //console.log(2);

function flipCard(){
    if(lockBoard)return;
    //if (this === firstCard) return;
    this.classList.add('flip');

    if(!firstCardFlipped){
        firstCard = this;
        firstCardFlipped = true;
        return;
    }
    secondCard = this;
    lockBoard = true;
    //firstCardFlipped = false;
    checkForMatch();
}

function checkForMatch(){
    let cardsMatch = firstCard.dataset.match === secondCard.dataset.match;
    cardsMatch ? stayFlipped() : unflipCards();
}

function stayFlipped(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards(){
    console.log(secondCard.classList);
    lockBoard = true;
    setTimeout(function(){ //parameters = function with no name, milliseconds
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        console.log(2);
        resetBoard();//has to stay in timeout loop otherwise it'll clear the cards too soon
    } , 1500);
}

function resetBoard(){
    [firstCardFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//Immediately Invoked Function Expression
(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    }

    );
})();

cards.forEach(card => card.addEventListener('click', flipCard));//this doesn't run again to re-add flips?