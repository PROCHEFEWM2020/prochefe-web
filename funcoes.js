var login = document.querySelector
function entrar() {  //return boolean
    var login = document.getElementById("login");
    var senha = document.getElementById("senha");
    if(login.value == "hiago" && senha.value =="123"){
        window.location.assign("telaPrincipal.html");
    }
    else{
    }
        alert.toString("Senha ou Login incorretos");
    }