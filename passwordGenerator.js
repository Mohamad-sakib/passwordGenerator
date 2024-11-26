function getNumberSession(numberSessionLength) {
  const string = "1c&2j'3k#5@4x,*";
  let numberSession = "";

  for (let index = 0; index < numberSessionLength - 1; index++) {
    let randomNumber = Math.round(Math.random() * 10);
    randomNumber = randomNumber > 9 ? randomNumber - 1 : randomNumber;
    numberSession = numberSession + string[randomNumber];
  }

  return numberSession + Math.round(Math.random() * 10);
}

function getCharSession(charSessionLength) {
  const charString = "qeriypnsglzx"
  let charSession = "";

  for (let index = 0; index < charSessionLength; index++) {
    const randomNumber = Math.round(Math.random() * 10);
    charSession = charSession + charString[randomNumber];
  }

  return charSession;
}


function getSpecialCharSession() {
  const charString = "@$&,_*#~`@$&,_*#@$&,_*#@$&,_*#@$&,_*#"

  const randomNumber = Math.round(Math.random() * 10);

  return charString[randomNumber];
}

function shufflePassword(charSession, numberSession, specialCharSession) {
  if (charSession.length > numberSession.length) {
    return charSession + numberSession + specialCharSession;
  }

  if (charSession.length === numberSession.length) {
    return specialCharSession + numberSession + charSession;
  }

  return charSession + specialCharSession + numberSession;
}


function generatePassword(passwordLength) {
  if (passwordLength < 3 || passwordLength > 16) {
    console.log("password can't be lesser and greater then 3 and 8 length");
    return;
  }

  const numberSessionLength = Math.ceil((passwordLength - 1) / 2);
  const charSessionLength = Math.floor((passwordLength - 1) / 2);
  const numberSession = getNumberSession(numberSessionLength);
  const charSession = getCharSession(charSessionLength);
  const specialCharSession = getSpecialCharSession();
  const shuffledPassword = shufflePassword(charSession, numberSession,
    specialCharSession);

  return shuffledPassword;
}

const passwordLength = prompt("Enter Length of Password :");
const password = generatePassword(passwordLength);
console.log(password);