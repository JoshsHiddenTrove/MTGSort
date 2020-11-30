class PageHandler{
  pages=null;
  constructor(){
    this.pages=1;
  }

  searchClick() {
    $("#cardDisplay").html("");
    this.pages = 1;
    this.addStuff();
  }

  addStuff() {
    var data = this.getSearchValues();
    this.cardCall(data);
  }

  getSearchValues(){
    var urlAddOn = "?";
    if(document.getElementById("SearchBar").value != ""){
      urlAddOn += "name=" + document.getElementById("SearchBar").value +"&";
    };
    if(document.getElementById("rarity").value != ""){
      urlAddOn += "rarity=" + document.getElementById("rarity").value +"&";
    }
    var urlAddOn = this.getColor(urlAddOn);
    if(document.getElementById("Type").value != ""){
      urlAddOn += "type=" + document.getElementById("Type").value +"&";
    };
    if(!isNaN(parseInt(document.getElementById("power").value))){
      var givenPower = parseInt(document.getElementById("power").value);
      if(givenPower > 15){
        givenPower = 15;
      }
      if(givenPower < 0){
        givenPower = 0;
      }
      urlAddOn += "power=" + givenPower +"&";
    }
    if(!isNaN(parseInt(document.getElementById("toughness").value))){
      var givenToughness = parseInt(document.getElementById("toughness").value);
      if(givenToughness > 15){
        givenToughness = 15;
      }
      if(givenToughness < 0){
        givenToughness = 0;
      }
      urlAddOn += "toughness=" + givenToughness +"&";
    }
    urlAddOn = urlAddOn.slice(0, -1);
    if(urlAddOn == ""){
      urlAddOn += "?page=" + parseInt(this.pages);
      this.pages++;
    }else{
      urlAddOn += "&page=" + parseInt(this.pages);
      this.pages++;
    }
    return urlAddOn;
  }

  getColor(urlAddOn){
    var colors = "";
      if($("#Black").is(":checked")){
      colors += "black,"
    }
    if($("#blue").is(":checked")){
      colors += "blue,"
    }
    if($("#green").is(":checked")){
      colors += "green,"
    }
    if($("#red").is(":checked")){
      colors += "red,"
    }
    if($("#white").is(":checked")){
      colors += "white,"
    }
    if(colors != ""){
      colors = colors.slice(0, -1);
      urlAddOn += "colors=" + colors +"&";
    }
    return urlAddOn;

  }

    cardCall(cardData){
      var url="https://api.magicthegathering.io/v1/cards" + cardData;
      // console.log(url);
      $(document).ready(function() {
        $.ajax(
             {
                type: 'GET',
                url: url,
                async: false,
                success: function(data)
                {
                  // console.log(data.cards);
                var html ='';
                if(data.cards.length != 0){
                  for(let i=0;i<data.cards.length;i++){
                    if(data.cards[i].imageUrl != undefined){
                      html += '<div class="card" style="width: 13rem;">';
                      html += '<img class="card-img-top" src="' + data.cards[i].imageUrl  + '" alt="Card image cap">';
                      html += '</div>';
                    }
                  }
                }else{
                    html+= '<div class="container">';
                    html+= '<div class="row justify-content-center">';
                    html+='<h1>No more cards sorry :/</h1>';
                    html+='</div>';
                    html+='</div>';
                }
                $("#cardDisplay").append(html);

              },
              error: function (xhr, status, error) {
                  console.log('Error: ' + xhr + "\n" + status + "\n" + error);
                  $('#lblResponse').html('Error connecting to the server.');
              },
          });
      });
    }
}


function initPageHandler(){
  var temp = new PageHandler();
  temp.searchClick();
  window.onscroll = function(event){
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      temp.addStuff();
    }
  };
}
