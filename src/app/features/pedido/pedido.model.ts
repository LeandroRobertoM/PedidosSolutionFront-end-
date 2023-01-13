import { ICliente } from "../cliente/cliente.model";
import { IProduto } from "../produto/produto.model";

export interface IPedido{
    idPedido?:number;
    produto:IProduto;
    cliente?:ICliente;
    idCliente?:number;
    nome?:string;
    cpf?:number;
    dataPedido:Date;
    quantidadeProduto:number;
    valorTotal:number;
    status?:number;
} 




