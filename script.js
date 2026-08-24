// VARIAVEIS
let estrelasSelecionadas = 0;
let casaAtual = "Lufa-Lufa";

// FUNÇÃO SORTEAR CASA
function sortearCasa() {
    const casas = ["Grifinória", "Sonserina", "Corvinal", "Lufa-Lufa"];
    const frases = {
        "Grifinória": "Onde habitam os corajosos!",
        "Sonserina": "Aqueles astutos que usam de qualquer meio!",
        "Corvinal": "Inteligência e sabedoria!",
        "Lufa-Lufa": "Leais e justos!"
    };

    const sorteada = casas[Math.floor(Math.random() * casas.length)];
    casaAtual = sorteada;

    document.getElementById("resultado-casa").innerText = sorteada.toUpperCase() + "!";
    document.getElementById("frase-chapeu").innerText = frases[sorteada];
    document.getElementById("casa-texto").innerText = "Sua casa: " + sorteada + "!";
}

function escolherCasa(nome) {
    casaAtual = nome;
    document.getElementById("resultado-casa").innerText = nome.toUpperCase() + "!";
    document.getElementById("casa-texto").innerText = "Sua casa: " + nome + "!";
    document.getElementById("frase-chapeu").innerText = "Excelente escolha!";
}

// FUNÇÃO ESTRELAS
function avaliar(num) {
    estrelasSelecionadas = num;
    const estrelas = document.querySelectorAll(".estrelas span");
    estrelas.forEach((est, i) => {
        if (i < num) est.classList.add("ativa");
        else est.classList.remove("ativa");
    });
}

// FUNÇÃO REGISTRAR FEITIÇO
function registrarFeitico() {
    const nome = document.getElementById("nomePocao").value;
    const nivel = document.getElementById("nivel").value;

    if (nome == "" || estrelasSelecionadas == 0) {
        alert("Escreva o nome da poção e clique nas estrelinhas!");
        return;
    }

    document.getElementById("grimorio-vazio").style.display = "none";

    const lista = document.getElementById("lista-feiticos");
    const novo = document.createElement("div");
    novo.style.background = "#2a2a45";
    novo.style.padding = "10px";
    novo.style.borderRadius = "10px";
    novo.style.marginTop = "10px";
    novo.innerHTML = `✨ <b>${nome}</b> - ${nivel} - ${"★".repeat(estrelasSelecionadas)} - Casa: ${casaAtual}`;

    lista.appendChild(novo);

    // Limpa
    document.getElementById("nomePocao").value = "";
    avaliar(0);
}
