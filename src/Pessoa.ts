export class Pessoa{

    nome:string

    constructor(nome: string){
        this.nome = nome
    }

    falarNome(){
        return `Meu nome é ${this.nome}`
    }
}