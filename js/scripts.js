$(document).ready(function() {
  $('#form').submit(function(event){
    event.preventDefault();

    var userSentence = $('#userEntry').val();
    console.log(userSentence);
    
    var userWords = userSentence.split(" ");
    console.log(userWords[0]);
    console.log(userWords);

    var userWordLengths = userWords.map(function(userWord){
      return userWord.length;
    });

    console.log(userWordLengths);
    
    
    
  });
});