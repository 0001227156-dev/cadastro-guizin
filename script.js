let botao = document.createElement("button");

botao.textContent = "Baixar cadastro";
botao.type = "button";


document.getElementById("areaBotao").appendChild(botao);


botao.addEventListener("click", function() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let endereco = document.getElementById("endereco").value;
    let cpf = document.getElementById("cpf").value;

    let imagem = document.getElementById("imagem");

    let nomeImagem = "Nenhuma imagem selecionada";

    if (imagem.files.length > 0) {
        nomeImagem = imagem.files[0].name;
    }

    let texto =
        "CADASTRO DE USUÁRIO\n\n" +
        "Nome: " + nome + "\n" +
        "E-mail: " + email + "\n" +
        "Senha: " + senha + "\n" +
        "Endereço: " + endereco + "\n" +
        "CPF: " + cpf + "\n" +
        "Imagem: " + nomeImagem + "\n\n" +
        "CADASTRO REALIZADO COM SUCESSO!";

   
    let arquivo = new Blob([texto], {
        type: "text/plain"
    });

    let link = document.createElement("a");

    link.href = URL.createObjectURL(arquivo);
    link.download = "cadastro.txt";

    link.click();

    URL.revokeObjectURL(link.href);
});