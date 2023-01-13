import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduto } from '../produto.model';
import { produtoService } from '../produto.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produto-form-update-manager',
  templateUrl: './produto-form-update-manager.component.html',
  styleUrls: ['./produto-form-update-manager.component.scss']
})
export class ProdutoFormUpdateManagerComponent implements OnInit {
  produto: IProduto;
  public form!: FormGroup;
  public formValido: boolean = true;

  constructor(private Produtoservice: produtoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idProduto = +this.route.snapshot.paramMap.get("idProduto")!;
    this.Produtoservice.getIDproduto(idProduto).subscribe((produto) => {
      this.produto = produto;
      //this.produto.dataValidade = new Date(this.produto.dataValidade);
      console.log(produto);
    });
    this.form = new FormGroup({
      idproduto: new FormControl({ value: null, disabled: true }),
      descricao: new FormControl({ value: null, disabled: true }),
      precoUnitario: new FormControl({ value: null, disabled: true }),
      dataValidade: new FormControl({ value: null, disabled: true }),
      quantidade: new FormControl(null, [Validators.required]),
      ativo: new FormControl(),
    });
  }
   
  updateProdutoQuantidade(): void {
    if (this.form.valid) {
      const updateProduto: IProduto = {
        idproduto: this.produto.idproduto,
        descricao: this.produto.descricao,
        precoUnitario: this.produto.precoUnitario,
        dataValidade: this.produto.dataValidade,
        quantidade: this.form.value.quantidade,
        ativo: true,
      };
      this.Produtoservice.updateProdutoQuantidade(updateProduto).subscribe(() => {
        this.Produtoservice.showMessage("Produto atualizado com sucesso!");
        this.router.navigate(["/pedidos/formulario"]);
      })
    }
  }

}
