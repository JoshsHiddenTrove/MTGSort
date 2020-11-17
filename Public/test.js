function SearchClick() {
  $("#cardDisplay").html("");
  addStuff();
}


function addStuff() {
  data = getSearchValues()
  cardCall(data);
}

function getSearchValues(){
  var givenName = document.getElementById("SearchBar").value;
  var givenRarity = document.getElementById("rarity").value;
  var givenMana = getMana();
  var givenManacost = parseInt(document.getElementById("Manacost").value);
  if(givenManacost > 16){
    givenManacost = 16;
  }
  var givenPower = parseInt(document.getElementById("power").value);
  if(givenPower > 15){
    givenPower = 15;
  }
  var givenToughness = parseInt(document.getElementById("toughness").value);
  if(givenToughness > 15){
    givenToughness = 15;
  }
  var searchVals = {name:givenName,color: givenMana, manacost:givenManacost,power:givenPower,toughness:givenToughness,rarity:givenRarity};
  // console.log(searchVals);
  return searchVals;
}

function getMana(){
  var colors = [];
  if($("#Black").is(":checked")){
    colors.push("Black");
  }
  if($("#blue").is(":checked")){
    colors.push("Blue");
  }
  if($("#green").is(":checked")){
    colors.push("Green");
  }
  if($("#red").is(":checked")){
    colors.push("Red");
  }
  if($("#white").is(":checked")){
    colors.push("White");
  }
  return colors;

}

window.onscroll = function(event){
  console.log("inside scroll function");
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    addStuff();
  }
};

  function cardCall(CardData){
    $(document).ready(function() {
        $.ajax({
            url: 'http://localhost:8080/getCards',
            dataType: "json",
            data: {"data": CardData},
            type: 'GET',
            headers: {'Access-Control-Allow-Origin': '*'},
            success: function (data) { // on success take in urls and append to div
              var html ='';
              for (i = 0; i < 20; i++) {
                if(data[i].imageUrl != undefined){
                  html += '<div class="card" style="width: 13rem;">';
                  html += '<img class="card-img-top" src="' + data[i].imageUrl  + '" alt="Card image cap">';
                  html += '</div>';
                }
              }
              $("#cardDisplay").append(html);
              console.log(data);
              var holder = data;
            },
            error: function (xhr, status, error) {
                console.log('Error: ' + xhr + "\n" + status + "\n" + error);
                $('#lblResponse').html('Error connecting to the server.');
            },
        });
    });
  }
