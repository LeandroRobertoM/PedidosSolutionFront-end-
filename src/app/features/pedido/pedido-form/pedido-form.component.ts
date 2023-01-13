import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPedido } from '../pedido.model';
import { pedidoService } from '../pedido.service';
import { Router, ActivatedRoute } from '@angular/router';
import { produtoService } from '../../produto/produto.service';
import { IProduto } from '../../produto/produto.model';
import { take } from 'rxjs';
import { ICliente } from '../../cliente/cliente.model';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit {
  pedido: IPedido;
  public form!: FormGroup;
  public formValido: boolean = true;
  public produtos: IProduto[] = [];
  public produto: IProduto = {} as IProduto;

  constructor(private pedidoservice: pedidoService,
              private produtoservice: produtoService,
              private route: ActivatedRoute,
              private router: Router) { }

public ngOnInit(): void {
      this.form = new FormGroup({
      idPedido: new FormControl(),
      dataValidade: new FormControl(null),
      cpf: new FormControl(null),
      produto: new FormControl(null),
      dataPedido: new FormControl(null, [Validators.required]),
      quantidadeProduto: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(this.produto.quantidade)]),
    });


       this.produtoservice
      .buscarProdutosAtivos()
      .pipe(take(1))
      .subscribe((dados: IProduto[]) => {
        this.produtos = dados;
      });

    console.log("Passou aqui " + this.produtos);

  }

public salvar(): void {
    this.produtos.forEach(element => {
      if (element.idproduto === this.form.get('produto')?.value) {
        this.produto = element;
      }
    });

    if (this.form.valid) {
      const novoCliente: ICliente = {
        cpf: this.form.value.cpf,
        nome: 'null'
        }
        
        const novoPedido: IPedido = {
        produto: this.produto,
        
        cliente: novoCliente,
        dataPedido: this.form.value.dataPedido,
        quantidadeProduto: this.form.value.quantidadeProduto,
        valorTotal: 0,
        status: 1,
        };

        this.pedidoservice.salvarPedido(novoPedido).subscribe(() => {
        this.pedidoservice.showMessage('Produto criado com sucesso!')
        this.router.navigate(['/products'])
      })
    }
  }
}


