const cards = document.querySelectorAll('.card');

function flipCard(){
    console.log(1);
    this.classList.toggle('flip');
    console.log(2);
}

cards.forEach(card => card.addEventListener('click', flipCard));