<script type="text/javascript">

function myFunction() {
  document.getElementById("cardcontainer").innerHTML = "Hello World";
}

// $(document).ready(function(){
//     function addStuff() {
//       var words = ['one', 'two', 'three'];
//
//       var html = '<table>';
//
//       $.each(words, function(i, word) {
//         html += '<tr><td>' + word + '</td></tr>';
//       });
//
//       html += '</table>';
//
//       $("#cardcontainer").append(html);
//     }
// });
// window.onload = function(){
//
//   function addStuff() {
//     var words = ['one', 'two', 'three'];
//
//     var html = '<table>';
//
//     $.each(words, function(i, word) {
//       html += '<tr><td>' + word + '</td></tr>';
//     });
//
//     html += '</table>';
//
//     $("#cardcontainer").append(html);
//   }
//
//   // function tableCreate() {
//   //   var body = document.getElementById('cardcontainer');
//   //   var tbl = document.createElement('table');
//   //   tbl.style.width = '100%';
//   //   tbl.setAttribute('border', '1');
//   //   var tbdy = document.createElement('tbody');
//   //   for (var i = 0; i < 3; i++) {
//   //     var tr = document.createElement('tr');
//   //     for (var j = 0; j < 2; j++) {
//   //       if (i == 2 && j == 1) {
//   //         break
//   //       } else {
//   //         var td = document.createElement('td');
//   //         td.appendChild(document.createTextNode('\u0020'))
//   //         i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
//   //         tr.appendChild(td)
//   //       }
//   //     }
//   //     tbdy.appendChild(tr);
//   //   }
//   //   tbl.appendChild(tbdy);
//   //   body.appendChild(tbl)
//   // }
//   //
//   // document.getElementById("search").onclick = function(){
//   //   tableCreate();
//   //   // var game = $("cardcontainer");
//   //   // var tableEl = table();
//   //   //
//   //   // tableEl.find('td').append(function () {
//   //   //     // `this` is the <td> element jQuery is currently appending to
//   //   //     var num = this.id.split('-')[1];
//   //   //     return '<img src="' + images/testCard + '.jpg" />';
//   //   // });
//   //   //
//   //   // game.append(tableEl)
//   // }
// // your code
// };
// // \$(document).ready(function() {
// //
// //
// //   $("button").click(function(){
// //     $("#div1").html(<IMG SRC="images/testCard.jpg"/>);
// //   });
// //
// //   document.getElementById("search").onclick = function(){
// //     var game = $("cardcontainer");
// //     var tableEl = table();
// //
// //     tableEl.find('td').append(function () {
// //         // `this` is the <td> element jQuery is currently appending to
// //         var num = this.id.split('-')[1];
// //         return '<img src="' + images/testCard + '.jpg" />';
// //     });
// //
// //     game.append(tableEl)
// //   }
// //
// //   $.ajax({
// //     type:'POST',
// //     url: $(this).attr('action'),
// //     data:formData,
// //     cache:false,
// //     contentType: false,
// //     processData: false,
// //     success:function(data){
// //       //function here
// //     },
// //     error: function(data){
// //       //function here
// //     }
// //   });
// //
// // });
