function test(codeCypher, keyCypher, encodeResult) {
    var result = caesarCypher(codeCypher, keyCypher);
    if (result === encodeResult) {
        console.log("correto!", codeCypher, "->", result, "===", encodeResult);
    } else {
        console.log("errado!", codeCypher, "->", result, "!==", encodeResult);
    }
}
test("Ola bom dia", 1, "Pmb cpn ejb");
test("Oi tudo bem", 3, "Rl wxgr ehp");
test("Azeitona", 26, "Azeitona");
test("Azeitona", 30, "Edimxsre");
test("O dia Esta Nublado", 80, "Q fkc Guvc Pwdncfq");

function test2(codeCypher, keyCypher, decodeResult) {
    var result2 = caesarDecipher (codeCypher, keyCypher);
    if (result2 === decodeResult) {
        console.log("correto!", codeCypher, "->", result2, "===", decodeResult);
    } else {
        console.log("errado!", codeCypher, "->", result2, "!==", decodeResult);
    }
}
test("Pmb cpn ejb", 1, "Ola bom dia");
test("Rl wxgr ehp", 3, "Oi tudo bem");
test("Azeitona", 26, "Azeitona");
test("Edimxsre", 30, "Azeitona");
test("Q fkc Guvc Pwdncfq", 80, "O dia Esta Nublado");
