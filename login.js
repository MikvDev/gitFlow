let nome;
let senha;

function login(nome, senha){
    if(nome === "miguel" && senha === "123"){
        console.log("Seja bem vindo!");
    }else{
        console.log("inválido");
    }
}

login("miguel", "123");