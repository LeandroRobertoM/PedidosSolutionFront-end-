
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { pedidoService } from '../pedido.service';
import { IPedido } from '../pedido.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'


import { IProduto } from '../../produto/produto.model';
import { MatSort } from '@angular/material/sort';
import { Observable, take } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator'
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-table',
  templateUrl: './pedido-table.component.html',
  styleUrls: ['./pedido-table.component.scss']
})

export class PedidoTableComponent implements OnInit, AfterViewInit {
  pedido: IPedido;
  public pedidos: IPedido[] = [];

  displayedColumns = ['idPedido', 'pedido.cliente.nome', 'quantidadeProduto', 'status', 'valorTotal', 'action']

  dataSource = new MatTableDataSource<IPedido>

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private pedidoservice: pedidoService, private router: Router) {

    this.pedidoservice.getAllPedido().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);

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

  navigateTopedidoCreate(): void {
    this.router.navigate(['/pedidos/formulario'])
    console.log("console")
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  public andamento() {
    if (this.pedido.status === 0) {
      return 0
    }
    else {
      if (this.pedido.status === 1) {
        return 1
      }
      else {
        if (this.pedido.status === 2) {
          return 2
        }
      }
    }
    return 0;
  }

}

