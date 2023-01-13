import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduto } from '../produto.model';
import { produtoService } from '../produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {
  produto: IProduto;
  public form!: FormGroup;
  public formValido: boolean = true;

  constructor(private produtoservice: produtoService, private router: Router) { }

  public ngOnInit(): void {

    this.form = new FormGroup({
      idProduto: new FormControl(),
      descricao: new FormControl (null, [Validators.required, Validators.minLength(3)]),
      precoUnitario: new FormControl(null, [Validators.required]),
      dataValidade: new FormControl(null, [Validators.required]),
      quantidade: new FormControl({ value: null, disabled: true }),    
    }); 
  }

  public salvar(): void {
    if (this.form.valid) {
      const novoProduto: IProduto = {
      descricao: this.form.value.descricao,
      precoUnitario: this.form.value.precoUnitario,
      dataValidade: this.form.value.dataValidade,
      quantidade: 0,
      ativo:true,
  };

    
      this.produtoservice.salvarproduto(novoProduto).subscribe(() => {
        this.produtoservice.showMessage('Produto criado com sucesso!')
        this.router.navigate(['/products'])
    })
   }
  }
}

