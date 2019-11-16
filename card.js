class Card {
    constructor(point, suit, value) {
        this.point = point;
        this.suit = suit;
        this.value = value;
    }
    getImageUrl() {
        console.log("images/" + this.point + "_of_" + this.suit + ".png");
    }
}

let myCard = new Card(5, "diamonds", 5);

console.log(myCard.point);
console.log(myCard.suit);
console.log(myCard.value);

myCard.getImageUrl();
 

// class Hand {
//     constructor()
// }

var myHand;