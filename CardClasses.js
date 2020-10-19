const mtg = require('mtgsdk')

mtg.card.find(3)
.then(result => {
    console.log(result.card.name) // "Black Lotus"
})

mtg.set.find('AER')
.then(result => {
    console.log(result.set.name) // "Aether Revolt"
})
 //test
 class Cards {
   constructor(name,,color,manacost,rarity,flavor,imageUrl) {
     this.name = name;
     this.color = color;
     this.manacost = manacost;
     this.rarity = rarity;
     this.flavor = flavor;
     this.imageUrl = imageUrl;
   }
  get name() {
    return this.name;
  }
  get color() {
    return this.color;
  }
  get manacost() {
    return this.manacost;
  }
  get rarity() {
    return this.rarity;
  }
  get flavor() {
    return this.flavor;
  }
  get imageUrl() {
    return this.imageUrl;
  }
 }

 class Spells extends Cards {
   constructor() {

   }

 }

 class Creatures extends Cards {
   constructor(power,toughness) {
     this.power = power;
     this.toughness = toughness;
   }
   get power() {
     return this.power;
   }
   get toughness() {
     return this.toughness;
   }
 }
