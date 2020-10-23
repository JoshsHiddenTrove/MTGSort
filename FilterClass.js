const mtg = require('mtgsdk')

class Filter {
  constructor() {
//name,,color,manacost,rarity,flavor,imageUrl
  }
 get Search_by_name(card, name) {
   return card.name;
 }
 get Search_by_color(card, color) {
   return card.color;
 }
 get Search_by_manacost(card, manacost) {
   return card.manacost;
 }
 get Search_by_rarity(card, rarity) {
   return card.rarity;
 }
 get Search_by_flavor(card, flavor) {
   return card.flavor;
 }
 get Search_by_power(card, power) {
   return card.power;
 }
 get Search_by_toughness(card, toughness) {
   return card.toughness;
 }

}
