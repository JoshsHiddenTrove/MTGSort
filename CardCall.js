const mtg = require('mtgsdk')

mtg.card.find(3)
.then(result => {
    console.log(result.card.name == "Black Lotus")
    // console.log(result.card.colors == "[] ")
    console.log(result.card.colors)
    console.log(result.card.manaCost == "{0}")
    console.log(result.card.rarity == "Rare")
    console.log(result.card.imageUrl == "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=3&type=card")

})

mtg.card.where({ name:"squee",color:"Red",manaCost : "", rarity:"Rare" })
.then(cards => {
  for (i = 0; i < cards.length; i++) {
    console.log(cards[i].name)
    console.log(cards[i].colors)
    console.log(cards[i].manaCost)
    console.log(cards[i].rarity)
    console.log(cards[i].imageUrl)
  }
})
//
// mtg.card.where({ colors: 'Red', name: 'Shaman' })
// .then(cards => {
//   console.log(cards[0].name)
//   console.log(cards[0].colors)
//   console.log(cards[0].manaCost)
//   console.log(cards[0].rarity)
//   console.log(cards[0].imageUrl)
// })
