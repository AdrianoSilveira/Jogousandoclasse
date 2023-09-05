const prompt = require('prompt-sync')(); /* pacote para solicitar a entrada do usuário em um programa JavaScript. 
O prompt-sync é um módulo que permite ler a entrada do teclado de forma síncrona. Para usá-lo, você precisa instalá-lo com o 
comando "npm install prompt-sync" no console e depois importá-lo no seu código com o comando "const prompt = require('prompt-sync')()".*/

// classe heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    // metodo da classe
    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "uso magia";
                break;

            case "guerreiro":
                ataque = "uso espada";
                break;

            case "monge":
                ataque = "uso artes marciais";
                break;

            case "ninja":
                ataque = "uso shuriken";
                break;
        }
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

let validacao = false;
let nome, idade, tipo;

while (!validacao) {
    nome = prompt("Digite o nome do herói: ");
    idade = parseInt(prompt("Digite sua idade: "));

    if (idade >= 0) {
        console.log("Escolha o seu tipo de herói:");
        console.log("  Opção Mago");
        console.log("Opção Guerreiro");
        console.log("  Opção Monge");
        console.log("  Opção Ninja");

        tipo = prompt("Digite seu tipo de herói: ").toLowerCase();

        if (["mago", "guerreiro", "monge", "ninja"].includes(tipo)) {
            validacao = true;
        } else {
            console.log("Tipo de herói inválido");
        }
    } else {
        console.log("Idade inválida");
    }
}

// Instanciando o objeto
let novoHeroi = new Heroi(nome, idade, tipo);

// Chamando o método do objeto
novoHeroi.atacar();