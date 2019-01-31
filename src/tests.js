//TESTE CIFRAR
function test(codeCypher, keyCypher, encodeResult) {
    var result = caesarCypher(codeCypher, keyCypher);
    if (result === encodeResult) {
        console.log("correto!", codeCypher, "->", result, "===", encodeResult);
    } else {
        console.log("errado!", codeCypher, "->", result, "!==", encodeResult);
    }
}
test("Ola bom dia", 1, "Pmb cpn ejb");
test("Ola tudo bem", 3, "Rod wxgr ehp");
test("Azeitona", 26, "Azeitona");
test("Azeitona", 30, "Edimxsre");
test("O dia Esta Nublado", 80, "Q fkc Guvc Pwdncfq");

//TESTE DECIFRAR
function test(codeCypher, keyCypher, encodeResult) {
    var result = aesarDecipher (codeCypher, keyCypher);
    if (result === encodeResult) {
        console.log("correto!", codeCypher, "->", result, "===", encodeResult);
    } else {
        console.log("errado!", codeCypher, "->", result, "!==", encodeResult);
    }
}
test("Ola tudo bem", 1, "Rod wxgr ehp");
test("Ola bom dia", 1, "Pmb cpn ejb");
test("Ola bom dia", 1, "Pmb cpn ejb");
test("Ola bom dia", 1, "Pmb cpn ejb");
test("Ola bom dia", 1, "Pmb cpn ejb");
