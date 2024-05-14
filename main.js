function adicionarContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    if (nome && telefone) {
        var tabela = document.getElementById("corpo-tabela-contatos");
        var novaLinha = tabela.insertRow();
        var colunaNome = novaLinha.insertCell(0);
        var colunaTelefone = novaLinha.insertCell(1);
        colunaNome.innerHTML = nome;
        colunaTelefone.innerHTML = telefone;

        ordenarTabelaPorNome();
    } else {
        alert("Por favor, preencha o nome e o telefone.");
    }

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}

function ordenarTabelaPorNome() {
    var tabela = document.getElementById("tabela-contatos");
    var linhas = tabela.rows;
    var trocado;
    do {
        trocado = false;
        for (var i = 1; i < linhas.length - 1; i++) {
            var primeiraLinha = linhas[i].getElementsByTagName("td")[0];
            var segundaLinha = linhas[i + 1].getElementsByTagName("td")[0];
            if (primeiraLinha.innerHTML.toLowerCase() > segundaLinha.innerHTML.toLowerCase()) {
                linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
                trocado = true;
            }
        }
    } while (trocado);
}
