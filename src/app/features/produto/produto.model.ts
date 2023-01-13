export interface IProduto{
    idproduto?:number;
    descricao:string;
    precoUnitario:number;
    dataValidade:Date;
    quantidade:number;
    ativo?:boolean;
}