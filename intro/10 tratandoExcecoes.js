try {
    // Código que pode gerar um erro
    let result = 10 / 0;
    console.log(result); // Aqui result será Infinity, mas não gera erro
    let x = undefinedVariable; // Isso geraria um erro de referência
} catch (error) {
    // Código que será executado caso um erro aconteça
    console.log("Ocorreu um erro: " + error.message);
} finally {
    // Código que será sempre executado, independentemente de erro ou não
    console.log("Fim do bloco try-catch");
}

/* Imaginemos que queremos verificar se um número fornecido pelo usuário é positivo.
 Se o número não for positivo, queremos lançar um erro e capturá-lo com try...catch.
*/

function verificarNumeroPositivo(numero) {
    try {
        if (numero <= 0) {
            throw new Error("O número deve ser positivo!");
        } else {
            console.log("O número é positivo: " + numero);
        }
    } catch (error) {
        console.log("Erro capturado: " + error.message); // Exibe a mensagem do erro
    } finally {
        console.log("Operação concluída.");
    }
}

// Testando a função
verificarNumeroPositivo(5);  // O número é positivo: 5
verificarNumeroPositivo(-3); // Erro capturado: O número deve ser positivo!
verificarNumeroPositivo(0);  // Erro capturado: O número deve ser positivo!
