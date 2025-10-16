document.getElementById("form-filme").addEventListener("submit", function(event) {
    event.preventDefault();

    const filme = {
        id: Date.now(),
        titulo: document.getElementById("titulo").value,
        descricao: document.getElementById("descricao").value,
        genero: document.getElementById("genero").value,
        classificacao: document.getElementById("classificacao").value,
        duracao: document.getElementById("duracao").value,
        dataEstreia: document.getElementById("dataEstreia").value
    };

    let filmes = JSON.parse(localStorage.getItem("filmes")) || [];
    filmes.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmes));
    
    alert('Filme salvo com sucesso!');
    event.target.reset();
});