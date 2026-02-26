let nome;
let senha;

function login(nome, senha){
    if(nome === "miguel" && senha === "123"){
        console.log("Seja bem vindo!");
    }else{
        console.log("ùsuario ou senha incorreto!");
    }
}

login("miguel", "123");