export class Administrador{
public id: string; 
constructor( 
public nome: string,
public email: string,
public senha: string
)
{
this.id = crypto.randomUUID();
this.nome = nome;
this.email = email;
this.senha = senha;
}

cadastrar(): void{
//recupera a lista de adm armazenada no local storage
const listaAdm: Administrador[] = JSON.parse(localStorage.getItem("listaAdm") || "[]");



//Adciona o adm atual na lista
listaAdm.push(this);

//salva a lista atualizado no local storange
localStorage.setItem("listaAdm", JSON.stringify(listaAdm));


}



static  listar(): Administrador[] {
const listaAdm: Administrador [] = JSON.parse(localStorage.getItem("listaAdm") || "[]");
return listaAdm;
}

static excluir(id: string): void{
let listaAdm: Administrador[] = JSON.parse(localStorage.getItem("listaAdm") || "[]");
listaAdm = listaAdm.filter((adm: Administrador) => adm.id!== id);
localStorage.setItem("listaAdm", JSON.stringify(listaAdm))
}

static alterar(admAlterado: Administrador): void {
let listaAdm: Administrador[] = JSON.parse(localStorage.getItem("listaAdm" )|| "[]")
listaAdm = listaAdm.map((adm: Administrador) => {
if (adm.id === admAlterado.id){
return admAlterado;
}
return adm;
});
localStorage.setItem("listaAdm", JSON.stringify(listaAdm))
}

static buscarAdm(id: string){
let listaAdm: Administrador[] = this.listar();
let adm = listaAdm.find(adm => adm.id === id);
return adm;

}
} 

                     