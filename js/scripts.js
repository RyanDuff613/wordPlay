$(document).ready(function() {
  $('#form').submit(function(event){
    event.preventDefault();

    var userSentence = $('#userEntry').val();
    
    var userWords = userSentence.split(" ");

    /*var userWordLengths = userWords.map(function(userWord){
      return userWord.length;
    });*/

    var output = userWords.map(function(userWord){
      if (userWord.length >= 3){
        console.log(userWord);
        return userWord;
      } else{
      }
    });

    output.reverse();
    console.log(output);
    
  });
});