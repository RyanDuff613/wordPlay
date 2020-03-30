$(document).ready(function() {
  $('#form').submit(function(event){
    
    var userSentence = $('#userEntry').val();
    console.log(userSentence);
    
    var array1 = userSentence.split(" ");
    console.log(array1);
    
    
    event.preventDefault();
  });
});