function SearchClick() {
  var CardDiv = document.getElementById("cardDisplay");
  CardDiv.style.visibility = 'visible';
  addStuff();
  // document.body.appendChild(btn);
}

  function addStuff() {
    var words = ['one', 'two', 'three'];

    var html = '<table>';

    $.each(words, function(i, word) {
      html += '<td> <IMG SRC="images/testCard.jpg" /></td>';
      html += '<td> <IMG SRC="images/testCard.jpg" /></td>';
      html += '<td> <IMG SRC="images/testCard.jpg" /></td>';
      html += '<td> <IMG SRC="images/testCard.jpg" /></td>';
      html += '<td> <IMG SRC="images/testCard.jpg" /></td>';
      html += '<td> <IMG SRC="images/testCard.jpg" /></td>';
      html += '<td> <IMG SRC="images/testCard.jpg" /></td>';
      html += '</tr>';

    });

    html += '</table>';

    $("#cardDisplay").append(html);
  }
