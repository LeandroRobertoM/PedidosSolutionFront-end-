import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { clienteService } from '../Cliente.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { ICliente } from '../cliente.model';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator'
import { Router } from '@angular/router';


@Component({
  selector: 'app-cliente-table',
  templateUrl: './cliente-table.component.html',
  styleUrls: ['./cliente-table.component.scss']

})
export class ClienteTableComponent implements OnInit, AfterViewInit {

  // clientesL:ICliente[] = [{nome:'Leandro', cpf:7623745,sobrenome:'Roberto Machado',endereco:'Rua Professor Simplicio',numero:3, bairro:'Dom DAniel',cep:32,complemento:'casa'},{nome:'Leandro', cpf:7623745,sobrenome:'Roberto Machado',endereco:'Rua Professor Simplicio',numero:3, bairro:'Dom DAniel',cep:32,complemento:'casa'},{nome:'Leandro', cpf:7623745,sobrenome:'Roberto Machado',endereco:'Rua Professor Simplicio',numero:3, bairro:'Dom DAniel',cep:32,complemento:'casa'},{nome:'Leandro', cpf:7623745,sobrenome:'Roberto Machado',endereco:'Rua Professor Simplicio',numero:3, bairro:'Dom DAniel',cep:32,complemento:'casa'},{nome:'Leandro', cpf:7623745,sobrenome:'Roberto Machado',endereco:'Rua Professor Simplicio',numero:3, bairro:'Dom DAniel',cep:32,complemento:'casa'},{nome:'Leandro', cpf:7623745,sobrenome:'Roberto Machado',endereco:'Rua Professor Simplicio',numero:3, bairro:'Dom DAniel',cep:32,complemento:'casa'},{nome:'Leandro', cpf:7623745,sobrenome:'Roberto Machado',endereco:'Rua Professor Simplicio',numero:3, bairro:'Dom DAniel',cep:32,complemento:'casa'},]; 
  // public clientes: Observable<ICliente[]>;

  displayedColumns = ['idCliente', 'nome', 'cpf', 'pontosFidelidade', 'action']
  cliente: ICliente;
  dataSource = new MatTableDataSource<ICliente>

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private clienteservice: clienteService, private router: Router) {

    this.clienteservice.getAllCliente().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {

  }

  navigateToClienteCreate(): void {
    this.router.navigate(['/clientes/formulario'])
    console.log("console")
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  public excluirCliente(cliente: ICliente) {
    if (confirm(`Você Deseja Excluir o Cliente ${cliente.nome}? sendo Excluindo todos os pedidos seram excluido`)) {
      this.clienteservice.deleteCliente(cliente).subscribe(() => {
        this.clienteservice.showMessage("Cliente excluido com sucesso!");
      });

    }
  }
}
