import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProduto } from "../produto/produto.model";
import { Observable, subscribeOn, tap, EMPTY, ObservedValueOf } from "rxjs";
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from "@angular/material/snack-bar";
import { map, catchError } from "rxjs/operators";
import { IPedido } from "./pedido.model";



@Injectable()
export class pedidoService {

  private api: string = "https://localhost:44301/api/Pedido"
  

  public dataSource = new MatTableDataSource<IProduto>();
  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  public salvarPedido(novoPedido: IPedido): Observable<IPedido> {
    console.log('Passou Aqui Dentro do Salvar'+ novoPedido);
    const url = `${this.api}`;
    console.log(url)
    return this.httpClient.post<IPedido>(`${this.api}`, novoPedido).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getAllPedido(): Observable<IPedido[]> {
    return this.httpClient.get<IPedido[]>(this.api)
      .pipe(
        tap(pedidos => console.log(pedidos))
      )
      ;
  }

  getIDPedido(idPedido: number): Observable<IPedido> {
    const url = `${this.api}/${idPedido}`;
    return this.httpClient.get<IPedido>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      
    );
    console.log("Passou aqui"+ url) ;
  }

  updatePedido(pedido: IPedido): Observable<IPedido> {
    const url = `${this.api}`;
    console.log(url)
    return this.httpClient.put<IPedido>(url, pedido).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updatePedidoStatus(pedido: IPedido): Observable<IPedido> {
    const url = (`${this.api}/​manager/atualizastatus`);
        console.log("URL sendo Chamada"+url)
    return this.httpClient.patch<any>(url, pedido).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

}