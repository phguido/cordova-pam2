function enviar() {


    const dbParam = JSON.stringify({
        "nome": document.querySelector("#nome").value,
        "documento": document.querySelector("#documento").value,
        "celular": document.querySelector("#celular").value,
        "curso": document.querySelector("#curso").value,
        "vagas": document.querySelector("#vagas").value,
        "periodo": document.querySelector("#periodo").value,
        "numero": document.querySelector("#numero").value,
        "cep": document.querySelector("#cep").value,
        "endereco": document.querySelector("#endereco").value,
        "bairro": document.querySelector("#bairro").value,
        "cidade": document.querySelector("#cidade").value,
        "estado": document.querySelector("#estado").valu
    });
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        console.log(myObj);
        document.getElementById("demo").innerHTML = myObj;
    };
    xmlhttp.open("POST", "http://localhost:8081/api/back.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("dados=" + dbParam);

}