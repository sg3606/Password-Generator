// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password
function generatePassword() {
    var selectlength = prompt("Select your Password length between 8 and 128");
    if (selectlength >= 8 && selectlength <=128){
        // input is a number and it is between 8 and 128
        alert('Your Password Length: ' + selectlength);
    } else {
        // if input length is not betwen 8 and 128, 
        // the prompt will be closed and password is undefined
        alert('You have to type a number between 8 and 128');
        return "You have to type a number between 8 and 128";
    }

    // password criteria, numbers, letters, characters
    if (confirm('Numbers')) {
        var num = 1;
    } else {
        var num = 0;
    }

    if (confirm('Lower case letters')) {
      var lletter = 1;
    } else {
      var lletter = 0;
    }

    if (confirm('Upper case letters')) {
        var uletter = 1;
    } else {
        var uletter = 0;
    }

    if (confirm('Special Characters')) {
        var schar = 1;
    } else {
        var schar = 0;
    }

    // if no type is selected, 
    // the prompt will be closed and password is undefined
    if (num == 0 &&  lletter == 0 && uletter == 0 && schar == 0){
        alert('At least one type should be selected, your password is undefined')
        return;
    }

    var number = '';
    var length = selectlength;
    
    // generate password string
    if (num == 1) {
        var numeric = '1234567890';
    } else {
        var numeric = '';
    }
    if (lletter == 1) {
        var letter = 'abcdefghijklmnopqrstuvwxyz';
    } else {
        var letter = '';
    }
    
    if (uletter == 1) {
        var upletter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    } else {
        var upletter = '';
    }

    if (schar == 1) {
        var char = " !#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\"";
    } else {
        var char = '';
    }

    // combine selected passwode strings
    var combolist = numeric + letter + upletter + char

    for (i = 0; i<length; i++) {
        number = number + combolist[Math.floor(Math.random()*combolist.length)];
    }
    return number;
}

// Write password to the #password input\
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
