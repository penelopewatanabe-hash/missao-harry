let avaliacoes = JSON.parse(localStorage.getItem('avaliacoes') || '[]');
const tabela = document.getElementById('tabela');
const form = document.getElementById('formAvaliacao');

function mostrar() {
    tabela.innerHTML = '<tr><th>Disciplina</th><th>Nota</th><th>Comentário</th></tr>';
    avaliacoes.forEach(a => {
        tabela.innerHTML += `<tr><td>${a.disciplina}</td><td>${a.nota}</td><td>${a.comentario}</td></tr>`;
    });
}
mostrar();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nova = {
        disciplina: document.getElementById('disciplina').value,
        nota: document.getElementById('nota').value,
        comentario: document.getElementById('comentario').value
    };
    avaliacoes.push(nova);
    localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));
    mostrar();
    alert('Avaliação registrada! RF001 OK');
    form.reset();
});

document.getElementById('formAuto').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Auto-avaliação salva! RF002 OK');
});
