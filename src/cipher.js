function msgCifrar() {
  let codeCypher = document.getElementById("campoMsg").value;
  let keyCypher = parseInt(document.getElementById("key").value);
  let encodeResult = caesarCypher(codeCypher, keyCypher);

  document.getElementById("resultCypher").innerHTML = encodeResult;
}
function msgDecifrar() {
  let codeCypher = document.getElementById("campoMsg").value;
  let keyCypher = parseInt(document.getElementById("key").value);
  let decodeResult = caesarDecipher(codeCypher, keyCypher);

  document.getElementById("resultDcypher").innerHTML = decodeResult;
}
function caesarCypher(codeCypher, keyCypher) {
  let resultCode = "", code;
  for (let i = 0; i < codeCypher.length; i++) {
    if (codeCypher.charCodeAt(i) >= 65 && codeCypher.charCodeAt(i) <= 90) {
      code = (((codeCypher.charCodeAt(i) - 65) + keyCypher) % 26) + 65;
    }
    else if (codeCypher.charCodeAt(i) >= 97 && codeCypher.charCodeAt(i) <= 122) {
      code = (((codeCypher.charCodeAt(i) - 97) + keyCypher) % 26) + 97;
    }
    else if (codeCypher.charCodeAt(i) === 32) {
      code = 32;
    }
    resultCode += String.fromCharCode(code);
  }
  return resultCode;
}
function caesarDecipher(codeCypher, keyCypher) {
  let resultDecode = "", code;
  for (let i = 0; i < codeCypher.length; i++) {
    if (codeCypher.charCodeAt(i) >= 65 && codeCypher.charCodeAt(i) <= 90) {
      code = (((codeCypher.charCodeAt(i) - 65) - keyCypher % 26) + 26) % 26 + 65;
    }
    else if (codeCypher.charCodeAt(i) >= 97 && codeCypher.charCodeAt(i) <= 122) {
      code = (((codeCypher.charCodeAt(i) - 97) - keyCypher % 26) + 26) % 26 + 97;
    }
    else if (codeCypher.charCodeAt(i) === 32) {
      code = 32;

    }
    resultDecode += String.fromCharCode(code);
  }
  return resultDecode;
}
