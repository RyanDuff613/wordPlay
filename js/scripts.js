$(document).ready(function() {
  $('#form').submit(function(event){
    event.preventDefault();

    var userSentence = $('#userEntry').val();
    console.log(userSentence);
    
    var userWords = userSentence.split(" ");
    console.log(userWords);
    
    var array2 = [];
    userWords.forEach(function(userWord){
      return userWord.length();
      array2.push(userWord);
    })

    console.log(array2);
    
    
  });
});