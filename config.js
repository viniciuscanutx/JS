function Logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('Password').value;

    if(login == 'admin' && senha == 'admin'){
        location.href= "home.html"
        document.getElementById("textomud").style.color="black"
        document.getElementById("textomud").innerHTML="Sucesso, Logado."
    }
    else{
        document.getElementById("textomud").style.color="red";
        document.getElementById("textomud").innerHTML="Login ou senha incorretos, tente novamente!";
    }

}


function Voltar(){
    location.href = "index.html";
}
