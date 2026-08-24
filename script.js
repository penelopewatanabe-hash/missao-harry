function sortearCasa() {
    const casas = [
        { nome: "🦁 GRIFINÓRIA!", cor: "#ae0001", frase: "Onde habitam os corajosos!" },
        { nome: "🐍 SONSERINA!", cor: "#1a472a", frase: "Aqueles astutos que usam de qualquer meio!" },
        { nome: "🦅 CORVINAL!", cor: "#0e1a40", frase: "Inteligência e sabedoria!" },
        { nome: "🦡 LUFA-LUFA!", cor: "#ecb939", frase: "Leais e justos!" }
    ];
    
    const sorteada = casas[Math.floor(Math.random() * casas.length)];
    document.getElementById("resultado-casa").innerText = sorteada.nome;
    document.getElementById("resultado-casa").style.color = sorteada.cor;
    document.getElementById("frase-chapeu").innerText = sorteada.frase;
}

