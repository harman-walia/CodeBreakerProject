let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' && attempt.value == ''){
      setHiddenFields();
    }
    if (validateInput(input.value) == false) {
      return false;
    }
    attempt.value++;
    if (getResults(input.value) == true){
      setMessage('You Win! :)');
      showAnswer(true);
      showReplay();
    }
    else if (attempt.value >= 10) {
      setMessage ('You Lose! :(');
      showAnswer(false);
      showReplay();
    }
    else {
      setMessage ("Incorrect, try again.")
    }
}

//implement new functions here
function setHiddenFields() {
  answer.value = math.floor(Math.random()*10000).toString();
  while (answer.value.length<4) {
    answer.value = '0' + answer.value;
  }
  attempt.value = '0';
}

function setMessage(message){
  document.getElementById('message').innerHTML = message;
}

function validateInput(input){
  if (input.length != 4) {
    setMessage("Guesses must be exactly 4 characters long");
    return false;
  }
  return true;
}

funciton getResults(input){
  let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  let correctchar=0;
  for (var i= 0; i < input.length; i++){
    if (input.charAt(i) == answer.value.charAt(i)){
      html +='<span class="glyphicon glyphicon-ok"></span>';
      correctchar++;
    }
    else if (answer.value.indexOf(input.charAt(i))> -1) {
      html += '<span class="glyphicon glyphicon-transfer"></span>';
      correctchar++;
    }
    else {
      html += '<span class="glyphicon glyphicon-remove"></span>'
    }

  html += '</div><div>'
  document.getElementsByid('results').innerHTML += html;
  if (input != answer.value) {
    return false;
  }
  return true;
}

function showAnswer(input) {
  let code = document.getElementById('code');
  if (input == true) {
    code.classname += ' success';
  }
  else {
    code.classname += ' failure';
  }
  code.innerHTML = answer.value;
}

function showReplay () {
  document.getElementById('guessing-div').style.display = "none";
  document.getElementById('replay-div').style.display = "block";
}
