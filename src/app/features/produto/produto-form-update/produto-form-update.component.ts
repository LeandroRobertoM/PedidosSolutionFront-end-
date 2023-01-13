import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduto } from '../produto.model';
import { produtoService } from '../produto.service';
import { Router, ActivatedRoute } from '@angular/router';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto-form-update',
  templateUrl: './produto-form-update.component.html',
  styleUrls: ['./produto-form-update.component.scss']
})
export class ProdutoFormUpdateComponent implements OnInit {
  produto: IProduto;
  public form!: FormGroup;
  public formValido: boolean = true;

  constructor(private Produtoservice: produtoService,
    private router: Router,
    private route: ActivatedRoute) { }

  public ngOnInit(): void {
    const idProduto = +this.route.snapshot.paramMap.get("idProduto")!;
    this.Produtoservice.getIDproduto(idProduto).subscribe((produto) => {
      this.produto = produto;
      //this.produto.dataValidade = new Date(this.produto.dataValidade);
      console.log(produto);
    });

      this.form = new FormGroup({
      idproduto: new FormControl({ value: null, disabled: true }),
      descricao: new FormControl (null, [Validators.required, Validators.minLength(3)]),
      precoUnitario: new FormControl(null, [Validators.required]),
      dataValidade: new FormControl(null, [Validators.required]),
      quantidade: new FormControl({ value: null, disabled: true }),
      ativo: new FormControl(),

    });
  };

  public salvar(): void {
    if (this.form.valid) {
      const novoProduto: IProduto = {
        idproduto: this.form.value.idproduto,
        descricao: this.form.value.descricao,
        precoUnitario: this.form.value.precoUnitario,
        dataValidade: this.form.value.dataValidade,
        quantidade: this.form.value.quantidade,
        ativo: this.form.value.ativo,
      };

      this.Produtoservice.salvarproduto(novoProduto).subscribe(() => {
        this.Produtoservice.showMessage('Produto criado com sucesso!')
        this.router.navigate(['/products'])
      })
    }
  }

  updateProduto(): void {
    if (this.form.valid) {
      const updateProduto: IProduto = {
        idproduto: this.produto.idproduto,
        descricao: this.form.value.descricao,
        precoUnitario: this.form.value.precoUnitario,
        dataValidade: this.form.value.dataValidade,
        quantidade: this.produto.quantidade,
        ativo: true,
      };
      this.Produtoservice.updateProduto(updateProduto).subscribe(() => {
        this.Produtoservice.showMessage("Produto atualizado com sucesso!");
        this.router.navigate(["/products"]);
      })
    }
  }
}
