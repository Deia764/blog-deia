const formCadUsuario = document.getElementById("formCadUsuario") as HTMLFormElement;
const txtNome = document.getElementById("txtNome") as HTMLInputElement;
const txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
const txtSenha = document.getElementById("txtSenha") as HTMLInputElement;
const txtConfSenha = document.getElementById("txtConfSenha") as HTMLInputElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

function exbirMensagem(color: string, msg: string) {
divMensagem.style.color = color;
divMensagem.textContent = msg;
}

function validarSenha(senha: string, confSenha: string)
{
    if (!confSenha) {
    exbirMensagem("red", "Confirme a senha, campo obrigatório.");
    return;
    }

    if (senha.length <6){
    exbirMensagem("red", "A senha deve ter no mínimo 6 caracteres.");
    return false;
    }

    if (senha.length >15){
    exbirMensagem("red", "A senha deve ter no máximo 15 caracteres.");
    return false;
    }
    return true;
}


formCadUsuario.addEventListener("submit", (event) => {
event.preventDefault();

const nome = txtNome.value; 
const email = txtEmail.value;
const senha = txtSenha.value;
const confSenha = txtConfSenha.value;

if (!nome) {
exbirMensagem("red", "Preencha seu nome, campo obrigatório." )
return;
} else if (!email) {
exbirMensagem("red", "Preencha seu e-mail, campo obrigatório.");
return;
}else if (!senha) {
exbirMensagem("red", "Preencha a senha, campo obrigatório.");
return;
}else if(!senha != !confSenha){
exbirMensagem("red", "A senha, precisa ser igual");
return;
}else if (!validarSenha(senha, confSenha)){
return;
}else{
exbirMensagem("green", "Cadastro realizado com sucesso!");
return;
}

})

