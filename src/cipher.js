//Função para chamar dados do html
function msgCifrar() {
  let codeCypher = document.getElementById("campoMsg").value;
  let keyCypher = parseInt(document.getElementById("key").value);
  let encodeResult = caesarCypher(codeCypher, keyCypher);

  document.getElementById("resultCypher").innerHTML = encodeResult;

  console.log(codeCypher, keyCypher);
}
function msgDecifrar() {
  let codeCypher = document.getElementById("campoMsg").value;
  let keyCypher = parseInt(document.getElementById("key").value);
  let decodeResult = caesarDecipher(codeCypher, keyCypher);

  document.getElementById("resultDcypher").innerHTML = decodeResult;

  console.log(codeCypher, keyCypher);
}
//Função para cifrar mensagem
function caesarCypher (codeCypher, keyCypher) {
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

  console.log(resultCode);
}

//decifrar mensagem
function caesarDecipher (codeCypher, keyCypher) {
  let resultDecode = "", code;
  for (let i = 0; i < codeCypher.length; i++) {
    if (codeCypher.charCodeAt(i) >= 65 && codeCypher.charCodeAt(i) <= 90) {
      code = (((codeCypher.charCodeAt(i) - 65) - keyCypher) % 26) + 65;
    }
    else if (codeCypher.charCodeAt(i) >= 97 && codeCypher.charCodeAt(i) <= 122) {
      code = (((codeCypher.charCodeAt(i) - 97) - keyCypher) % 26) + 97;
    }
    else if (codeCypher.charCodeAt(i) === 32) {
      code = 32;[
        
      ]
    }
    resultDecode += String.fromCharCode(code);
  }
  return resultDecode;
}

//console.log(caesarCipher("Hello World", 21));
