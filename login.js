const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    if(nome === "" || senha === ""){

        document.getElementById("mensagem").innerText =
        "Preencha todos os campos.";

        return;
    }

    sessionStorage.setItem("nome", nome);

    window.location.href = "index.html";

});