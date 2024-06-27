let nome = "";
let historia = "";

console.log("Olá viajante, poderia nos informar seu nome antes de começarmos?");
process.stdin.once("data", function (data) {
    nome = data.toString().trim();

    console.log("Seja bem-vindo, contador " + nome + ".\nQual história você vai nos contar hoje?");
    process.stdin.once("data", function (data) {
        historia = data.toString().trim();

        // Dividir a história em palavras
        let palavras = historia.split(/\s+/).filter(word => word.length > 0);

        // Contar o número de palavras
        let numeroDePalavras = palavras.length;

        // Criar um objeto para contar a frequência de cada palavra
        let contagemDePalavras = {};

        palavras.forEach(word => {
            word = word.toLowerCase(); // Ignorar diferenças de maiúsculas e minúsculas
            if (contagemDePalavras[word]) {
                contagemDePalavras[word]++;
            } else {
                contagemDePalavras[word] = 1;
            }
        });

        console.log("Sua história tem " + numeroDePalavras + " palavras.");
        console.log("Relação de palavras e suas contagens:");

        for (let palavra in contagemDePalavras) {
            console.log(palavra + ": " + contagemDePalavras[palavra]);
        }

        process.exit();
    });
});
