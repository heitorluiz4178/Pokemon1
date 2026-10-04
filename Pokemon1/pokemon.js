let machop = {
    nome: "Machop",
    numeroPokedex: 66,
    tipo: "Lutador",
    nivel: 15,
    vida: 100,
    energia: 80,
    altura: 0.8,
    peso: 19.5,
    forca: 80,
    defesa: 50,
    velocidade: 35,
    habilidade: "Guts",
    ataques: ["Soco", "Chute", "Karate Chop"],
    fraqueza: "Voador",

    andar: function() {
        console.log("Machop está andando.");
    },

    treinar: function() {
        this.nivel = this.nivel + 1;
        this.forca = this.forca + 5;

        console.log("Machop treinou e ficou mais forte!");
    },

    atacar: function() {
        this.energia = this.energia - 10;

        console.log("Machop atacou!");
    },

    receberDano: function() {
        this.vida = this.vida - 20;

        console.log("Machop recebeu dano!");
    },

    descansar: function() {
        this.energia = this.energia + 20;

        console.log("Machop descansou e recuperou energia.");
    },

    comer: function() {
        this.vida = this.vida + 10;

        console.log("Machop comeu e recuperou vida.");
    }
};


// Mostrar o objeto completo
console.log(machop);

// Mostrar informações separadas
console.log("Nome:", machop.nome);
console.log("Tipo:", machop.tipo);
console.log("Vida atual:", machop.vida);
console.log("Energia atual:", machop.energia);
console.log("Nível atual:", machop.nivel);


// Executando métodos
machop.andar();
machop.atacar();
machop.receberDano();
machop.descansar();
machop.comer();
machop.treinar();


// Mostrar os valores depois das ações
console.log("Depois das ações:");
console.log("Vida:", machop.vida);
console.log("Energia:", machop.energia);
console.log("Nível:", machop.nivel);
console.log("Força:", machop.forca);