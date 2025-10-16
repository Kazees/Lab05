document.addEventListener('DOMContentLoaded', function() {
    const listaSessoes = document.getElementById('lista-sessoes');

    const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];
    const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    const salas = JSON.parse(localStorage.getItem('salas')) || [];

    if (sessoes.length === 0) {
        listaSessoes.innerHTML = '<p>Nenhuma sessão cadastrada.</p>';
        return;
    }

    const filmesMap = new Map(filmes.map(f => [f.id.toString(), f.titulo]));
    const salasMap = new Map(salas.map(s => [s.id.toString(), s.nome]));

    sessoes.forEach(sessao => {
        const div = document.createElement('div');
        div.className = 'session-item';

        const dataHora = new Date(sessao.dataHora);
        const dataFormatada = dataHora.toLocaleDateString('pt-BR');
        const horaFormatada = dataHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        div.innerHTML = `
            <h3>${filmesMap.get(sessao.filmeId) || 'Filme não encontrado'}</h3>
            <p><strong>Sala:</strong> ${salasMap.get(sessao.salaId) || 'Sala não encontrada'}</p>
            <p><strong>Data e Hora:</strong> ${dataFormatada} às ${horaFormatada}</p>
            <p><strong>Preço:</strong> R$ ${parseFloat(sessao.preco).toFixed(2)}</p>
            <a href="venda-ingressos.html?sessaoId=${sessao.id}" class="buy-ticket-btn">Comprar Ingresso</a>
        `;
        listaSessoes.appendChild(div);
    });
});