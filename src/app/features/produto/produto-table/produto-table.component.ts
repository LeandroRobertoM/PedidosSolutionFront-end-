import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { produtoService } from '../produto.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'


import { IProduto } from '../../produto/produto.model';
import { MatSort } from '@angular/material/sort';
import { Observable, take } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator'
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-table',
  templateUrl: './produto-table.component.html',
  styleUrls: ['./produto-table.component.scss']
})
export class ProdutoTableComponent implements OnInit, AfterViewInit {
  produto: IProduto;
  // produtosL:Iproduto[] = [{nome:'Leandro', cpf:7623745,sobrenome:'Roberto Machado',endereco:'Rua Professor Simplicio',numero:3, bairro:'Dom DAniel',cep:32,complemento:'casa'},{nome:'Leandro', cpf:7623745,sobrenome:'Roberto Machado',endereco:'Rua Professor Simplicio',numero:3, bairro:'Dom DAniel',cep:32,complemento:'casa'},{nome:'Leandro', cpf:7623745,sobrenome:'Roberto Machado',endereco:'Rua Professor Simplicio',numero:3, bairro:'Dom DAniel',cep:32,complemento:'casa'},{nome:'Leandro', cpf:7623745,sobrenome:'Roberto Machado',endereco:'Rua Professor Simplicio',numero:3, bairro:'Dom DAniel',cep:32,complemento:'casa'},{nome:'Leandro', cpf:7623745,sobrenome:'Roberto Machado',endereco:'Rua Professor Simplicio',numero:3, bairro:'Dom DAniel',cep:32,complemento:'casa'},{nome:'Leandro', cpf:7623745,sobrenome:'Roberto Machado',endereco:'Rua Professor Simplicio',numero:3, bairro:'Dom DAniel',cep:32,complemento:'casa'},{nome:'Leandro', cpf:7623745,sobrenome:'Roberto Machado',endereco:'Rua Professor Simplicio',numero:3, bairro:'Dom DAniel',cep:32,complemento:'casa'},]; 
  // public produtos: Observable<Iproduto[]>;

  displayedColumns = ['idproduto', 'descricao', 'precoUnitario', 'quantidade','ativo', 'action']

  dataSource = new MatTableDataSource<IProduto>

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private produtoservice: produtoService, private router: Router) {
    
    this.produtoservice.getAllproduto().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {

  }

  navigateToprodutoCreate(): void {
    this.router.navigate(['/produtos/formulario'])
    console.log("console")
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  public DesatStatusProduto(produto: IProduto) {
    if (produto.ativo=false) {
      if (confirm(`Você Deseja ativar o produto${produto.descricao}?`)) {
        produto.ativo = true;
        this.produtoservice.updateProdutoStatus(produto)
          .pipe(take(1))
          .subscribe(() => {
            alert(`${produto.descricao}? foi ativado`);
          });
      }
    } else {
      if (produto.ativo=true) {
        if (confirm(`Você Deseja desativar o produto${produto.descricao}?`)) {
          produto.ativo=false;
          this.produtoservice.updateProdutoStatus(produto)
            .pipe(take(1))
            .subscribe(() => {
              alert(`${produto.descricao}? foi desativado`);
            });
        }
      }
    }
  }
}


