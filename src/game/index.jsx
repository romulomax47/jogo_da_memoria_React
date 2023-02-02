
const game = {

    times: [
        'brasil',
        'argentina',
        'alemanha',
        'catar',
        'frança',
        'bélgica',
        'croácia',
        'inglaterra',
        'portugal',
        'senegal'
    ],
    cards: null,
    firstCard: false,
    secondCard: false,
    lockMode: false,


    setCard(id) {

        let card = this.cards.filter(item => item.timeId === id)[0];

        if (card.flip || this.lockMode) {
            return false;
        };

        if (!this.firstCard) {

            this.firstCard = card;
            this.firstCard.flip = true;

            return true;

        } else {
            this.secondCard = card;
            this.secondCard.flip = true;
            this.lockMode = true;

            return true;
        }
    },

    checkMatch: function () {

        if (!this.firstCard || !this.secondCard) {
            return false
        }

        return this.firstCard.nomeTime === this.secondCard.nomeTime
    },


    createCardfromSele() {
        this.cards = [];

        this.times.forEach((time) => {

            this.cards.push(this.createPairFromSelecoes(time))
        })


        this.cards = this.cards.flatMap(card => card);
        this.shuffleCars();

        return this.cards;
    },

    createPairFromSelecoes: function (time) {
        return [
            {
                timeId: this.createIdWhithTime(time),
                nomeTime: time,
                flip: false
            },
            {
                timeId: this.createIdWhithTime(time),
                nomeTime: time,
                flip: false
            }

        ]
    },

    createIdWhithTime: function (time) {
        return time + parseInt(Math.random() * 1000);
    },

    shuffleCars: function () {

        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];

        }

    },

    clearCard: function () {

        this.firstCard = false;
        this.secondCard = false;
        this.lockMode = false;


    },



    disableCard() {

        this.firstCard.flip = false;
        this.secondCard.flip = false;


        game.clearCard()

    },


    gameOver () {

        if (this.cards.filter(card => !card.flip).length === 0) {
            return true
        }
    },

    flipCard(cardId, setShowGame, setCards){
        if (this.setCard(cardId)) {

            if (this.secondCard) {
      
              if (this.checkMatch()) {
      
                  this.clearCard();
      
                if (this.gameOver()) {
                  
                    setShowGame()
                    game.clearCard()
                }
              } else {
                // NI MATCH
                setTimeout(() => {
                  this.disableCard()

                  setCards()
                }, 1000)
      
      
              }
            }
      
          }
    }
}

export default game;