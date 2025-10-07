const formLogin = document.getElementById("formLogin");
const txtEmail = document.getElementById("txtEmail");
const txtSenha = document.getElementById("txtSenha");
const mensagem = document.getElementById("mensagem");
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = txtEmail.value;
    const senha = txtSenha.value;
    if (!email) {
        mensagem.style.color = "red";
        mensagem.textContent = "Preencha o email, campo obrigatório!";
        return;
    }
    else if (!senha) {
        mensagem.style.color = "red";
        mensagem.textContent = "Preencha o senha, campo obrigatório!";
        return;
    }
    if (email == "admin@gmail.com" && senha == "admin12345") {
        mensagem.style.color = "green";
        mensagem.textContent = "Login realizado com sucesso!";
        setTimeout(() => {
            window.location.href = "admin.html";
        }, 1000);
    }
    else {
        mensagem.style.color = "red";
        mensagem.textContent = "Email ou senha inválidos";
    }
});
export {};
//# sourceMappingURL=login.js.map