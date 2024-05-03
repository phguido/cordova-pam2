function consultaCep() {
    let campo = document.querySelector("#cep");
    let requisicao = new XMLHttpRequest();
    let url = "https://viacep.com.br/ws/" + campo.value + "/json/";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function() {
        let objetoCEP = JSON.parse(requisicao.response)
        let campoEndereco = document.querySelector("#logradouro")
        console.log(requisicao.response)
        campoEndereco.value = objetoCEP.logradouro
    }
}
let botao = document.querySelector("#botao");
botao.addEventListener("click", consultaCep);