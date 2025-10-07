export class Administrador {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    cadastrar() {
        //recupera a lista de adm armazenada no local storage
        const listaAdm = JSON.parse(localStorage.getItem("listaAdm") || "[]");
        //Adciona o adm atual na lista
        listaAdm.push(this);
        //salva a lista atualizado no local storange
        localStorage.setItem("listaAdm", JSON.stringify(listaAdm));
    }
    static listar() {
        const listaAdm = JSON.parse(localStorage.getItem("listaAdm") || "[]");
        return listaAdm;
    }
    static excluir(id) {
        let listaAdm = JSON.parse(localStorage.getItem("listaAdm") || "[]");
        listaAdm = listaAdm.filter((adm) => adm.id !== id);
        localStorage.setItem("listaAdm", JSON.stringify(listaAdm));
    }
    static alterar(admAlterado) {
        let listaAdm = JSON.parse(localStorage.getItem("listaAdm") || "[]");
        listaAdm = listaAdm.map((adm) => {
            if (adm.id === admAlterado.id) {
                return admAlterado;
            }
            return adm;
        });
        localStorage.setItem("listaAdm", JSON.stringify(listaAdm));
    }
    static buscarAdm(id) {
        let listaAdm = this.listar();
        let adm = listaAdm.find(adm => adm.id === id);
        return adm;
    }
}
//# sourceMappingURL=administrador.js.map