document.addEventListener('DOMContentLoaded', function() {
    const selectSessao = document.getElementById('sessao');

    const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];
    const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    const salas = JSON.parse(localStorage.getItem('salas')) || [];

    const filmesMap = new Map(filmes.map(f => [f.id.toString(), f.titulo]));
    const salasMap = new Map(salas.map(s => [s.id.toString(), s.nome]));
    
    sessoes.forEach(sessao => {
        const option = document.createElement('option');
        option.value = sessao.id;
        const dataHora = new Date(sessao.dataHora);
        const dataFormatada = dataHora.toLocaleDateString('pt-BR');
        const horaFormatada = dataHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        option.textContent = `${filmesMap.get(sessao.filmeId)} - Sala: ${salasMap.get(sessao.salaId)} - ${dataFormatada} ${horaFormatada}`;
        selectSessao.appendChild(option);
    });

    const urlParams = new URLSearchParams(window.location.search);
    const sessaoId = urlParams.get('sessaoId');
    if (sessaoId) {
        selectSessao.value = sessaoId;
    }
});

document.getElementById('form-venda').addEventListener('submit', function(event) {
    event.preventDefault();

    const ingresso = {
        id: Date.now(),
        sessaoId: document.getElementById('sessao').value,
        cliente: document.getElementById('cliente').value,
        cpf: document.getElementById('cpf').value,
        assento: document.getElementById('assento').value,
        pagamento: document.getElementById('pagamento').value
    };

    let ingressos = JSON.parse(localStorage.getItem('ingressos')) || [];
    ingressos.push(ingresso);
    localStorage.setItem('ingressos', JSON.stringify(ingressos));

    alert('Venda confirmada com sucesso!');
    event.target.reset();
});