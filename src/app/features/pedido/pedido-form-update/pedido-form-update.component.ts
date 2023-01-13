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
  selector: 'app-pedido-form-update',
  templateUrl: './pedido-form-update.component.html',
  styleUrls: ['./pedido-form-update.component.scss']
})
export class PedidoFormUpdateComponent implements OnInit {

  
  pedido: IPedido;
  public form!: FormGroup;
  public formValido: boolean = true;
  public produtos: IProduto[] = [];
  public produto: IProduto = {} as IProduto;

  constructor(private pedidoservice: pedidoService,
    private produtoservice: produtoService,
    private router: Router,
    private route: ActivatedRoute) { }

  public ngOnInit(): void {

      const idPedido = +this.route.snapshot.paramMap.get("idPedido")!;
      this.pedidoservice.getIDPedido(idPedido).subscribe((pedido) => {
      this.pedido = pedido;
      console.log(pedido);
      });
     
      this.form = new FormGroup({
      idPedido: new FormControl({ value: null, disabled: true }),
      status: new FormControl(null, [Validators.required]),
    });

    var select = document.getElementById("marcas");
  }

public update(): void {
    
        const novoPedido: IPedido = {
        idPedido: this.pedido.idPedido,
        produto: this.pedido.produto,
        cliente: this.pedido.cliente,
        dataPedido: this.pedido.dataPedido,
        quantidadeProduto: this.pedido.quantidadeProduto,
        valorTotal: this.pedido.valorTotal,
        status:this.form.get('status')?.value,

      };
       console.log('Codigo de retorno'+ novoPedido);

        this.pedidoservice.updatePedidoStatus(novoPedido).subscribe(() => {
        this.pedidoservice.showMessage('Produto criado com sucesso!');
        this.router.navigate(['/pedidos/tabela']);
      })
  }
}


