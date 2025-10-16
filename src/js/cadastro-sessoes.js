document.addEventListener('DOMContentLoaded', function() {
    const selectFilme = document.getElementById('filme');
    const selectSala = document.getElementById('sala');


    const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    filmes.forEach(filme => {

        if (filme && filme.id && filme.titulo) {
            const option = document.createElement('option');
            option.value = filme.id;
            option.textContent = filme.titulo;
            selectFilme.appendChild(option);
        }
    });


    const salas = JSON.parse(localStorage.getItem('salas')) || [];
    salas.forEach(sala => {

        if (sala && sala.id && sala.nome) {
            const option = document.createElement('option');
            option.value = sala.id;
            option.textContent = `${sala.nome} (${sala.tipo})`;
            selectSala.appendChild(option);
        }
    });
});


document.getElementById('form-sessao').addEventListener('submit', function(event) {
    event.preventDefault();

    const sessao = {
        id: Date.now(),
        filmeId: document.getElementById('filme').value,
        salaId: document.getElementById('sala').value,
        dataHora: document.getElementById('dataHora').value,
        preco: document.getElementById('preco').value,
        idioma: document.getElementById('idioma').value,
        formato: document.getElementById('formato').value
    };

    let sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];
    sessoes.push(sessao);
    localStorage.setItem('sessoes', JSON.stringify(sessoes));

    alert('Sessão salva com sucesso!');
    event.target.reset();
});