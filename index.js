class PageHandler{ // class to handle all functions on page
  pages=null; // declares and sets page to 1
  constructor(){
    this.pages=1;
  }

  searchClick() { //when clicking search button
    $("#cardDisplay").html(""); // set inside div to empty
    this.pages = 1; // resets pages for query to 1
    this.addStuff();
  }

  addStuff() {
    var data = this.getSearchValues(); // gets inputs from users front end
    this.cardCall(data); // calls the ajax call
  }

  getSearchValues(){
    var urlAddOn = "?";
    if(document.getElementById("SearchBar").value != ""){ //gets if user typed in a name
      urlAddOn += "name=" + document.getElementById("SearchBar").value +"&";
    };
    if(document.getElementById("rarity").value != ""){ // gets rarity drop down
      urlAddOn += "rarity=" + document.getElementById("rarity").value +"&";
    }
    var urlAddOn = this.getColor(urlAddOn);
    if(document.getElementById("Type").value != ""){ // gets if type has a input
      urlAddOn += "type=" + document.getElementById("Type").value +"&";
    };
    if(!isNaN(parseInt(document.getElementById("power").value))){ // gets if power has a input
      var givenPower = parseInt(document.getElementById("power").value);
      if(givenPower > 15){ //sets it between 15 and 0
        givenPower = 15;
      }
      if(givenPower < 0){
        givenPower = 0;
      }
      urlAddOn += "power=" + givenPower +"&";
    }
    if(!isNaN(parseInt(document.getElementById("toughness").value))){ // gets toughness input
      var givenToughness = parseInt(document.getElementById("toughness").value);
      if(givenToughness > 15){ // sets between 15 and 0
        givenToughness = 15;
      }
      if(givenToughness < 0){
        givenToughness = 0;
      }
      urlAddOn += "toughness=" + givenToughness +"&";
    }
    urlAddOn = urlAddOn.slice(0, -1); // removes final & in query or ? if empty
    if(urlAddOn == ""){ // if emptyt add pagination
      urlAddOn += "?page=" + parseInt(this.pages);
      this.pages++;
    }else{
      urlAddOn += "&page=" + parseInt(this.pages); // else adds other pageination format
      this.pages++;
    }
    return urlAddOn;
  }

  getColor(urlAddOn){ // gets colors from checkboxs
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

    cardCall(cardData){ // calls mtg api
      var url="https://api.magicthegathering.io/v1/cards" + cardData; // sets up url for api call
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
                if(data.cards.length != 0){ // if query was not empty add cards images
                  for(let i=0;i<data.cards.length;i++){
                    if(data.cards[i].imageUrl != undefined){
                      html += '<div class="card" style="width: 13rem;">';
                      html += '<img class="card-img-top" src="' + data.cards[i].imageUrl  + '" alt="Card image cap">';
                      html += '</div>';
                    }
                  }
                }else{ // if query was empty say there is no more cards
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


function initPageHandler(){ // function for calling class
  var temp = new PageHandler();
  temp.searchClick();
  window.onscroll = function(event){
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      temp.addStuff();
    }
  };
}
  function FirstLoadPageHandler(){ // function for calling class
    var temp = new PageHandler();
    temp.searchClick();
    window.onscroll = function(event){
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        temp.addStuff();
      };
    };
}
