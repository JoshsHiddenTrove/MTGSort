var express = require('express');
var app = express();
const mtg = require('mtgsdk')

// mtg.card.find(3)
// .then(result => {
//     console.log(result.card.name == "Black Lotus")
//     // console.log(result.card.colors == "[] ")
//     console.log(result.card.colors)
//     console.log(result.card.manaCost == "{0}")
//     console.log(result.card.rarity == "Rare")
//     console.log(result.card.imageUrl == "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=3&type=card")
//
// })
//
// mtg.card.where({ name:"aj", color:"", manaCost : "NAN", rarity:"" })
// .then(cards => {
//   for (i = 0; i < cards.length; i++) {
//     console.log(cards[i].name)
//
//   }
// })

//
// mtg.card.where({ colors: 'Red', name: 'Shaman' })
// .then(cards => {
//   console.log(cards[0].name)
//   console.log(cards[0].colors)
//   console.log(cards[0].manaCost)
//   console.log(cards[0].rarity)
//   console.log(cards[0].imageUrl)
// })

// app.get('/get_proxy', function(req, res) {
//   res.setHeader('Content-Type', 'application/json');
//   if(proxy_list.length == 0) {
//     update_proxies(function() {
//       var random = parseInt(Math.random() * proxy_list.length, 10);
//       res.json({status: 'ok', data: { proxy: proxy_list[random] } });
//     });
//   }else{
//     var random = parseInt(Math.random() * proxy_list.length, 10);
//     res.json({status: 'ok', data: { proxy: proxy_list[random] } });
//   }
// });

app.use(express.static(__dirname + '/public'));

app.get('/index.html', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
});

// Start the server on port 3000
app.listen(8080, '127.0.0.1');
console.log('Node server running on port 8080');
