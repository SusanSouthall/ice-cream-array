$(document).ready(function(){
  $('#julia').click(function(event){
    event.preventDefault;

    var flavors1 = ['Peanut Butter', 'Coffee', 'Chocolate', 'Coconut'];

    flavors1.forEach(function(flavor) {
      $('ul#juliasList').append("<li>" + flavor + "</li>");
    });
  });
  $('#sue').click(function(){
    var flavors2 = ['Mint Chip', 'Salted Caramel', 'Snickerdoodle', 'Coconut'];

    flavors2.forEach(function(flavor) {
      $('ul#SuesList').append("<li>" + flavor + "</li>");
    });
  });





});
