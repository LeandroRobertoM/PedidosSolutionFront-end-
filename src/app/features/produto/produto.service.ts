import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProduto } from "../produto/produto.model";
import { Observable, subscribeOn, tap, EMPTY, ObservedValueOf } from "rxjs";
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from "@angular/material/snack-bar";
import { map, catchError } from "rxjs/operators";



@Injectable()
export class produtoService {

  private api: string = "https://localhost:44301/api/produto"

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
  public salvarproduto(novoproduto: IProduto): Observable<IProduto> {
    //  console.log(novoproduto);
    // this.httpClient.post(`${this.api}/api/produto`, novoproduto)
    //    .subscribe(() => { });
    return this.httpClient.post<IProduto>(`${this.api}`, novoproduto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getAllproduto(): Observable<IProduto[]> {
    return this.httpClient.get<IProduto[]>(this.api)
      .pipe(
        tap(produtos => console.log(produtos))
      )
      ;
  }

  public buscarProdutosAtivos(): Observable<IProduto[]> {
    return this.httpClient.get<IProduto[]>(`${this.api}/buscaativo`);

  }

  getIDproduto(idproduto: number): Observable<IProduto> {
    const url = `${this.api}/${idproduto}`;
    return this.httpClient.get<IProduto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))  
    );
  }

  updateProduto(produto: IProduto): Observable<IProduto> {
    const url = `${this.api}`;
    console.log(url)
    return this.httpClient.put<IProduto>(url, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateProdutoQuantidade(produto: IProduto): Observable<IProduto> {
    const url = (`${this.api}/​manager/entradaestoque`);
        console.log(url)
    return this.httpClient.put<IProduto>(url, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateProdutoStatus(produto: IProduto): Observable<IProduto> {
    const url = (`${this.api}/​manager/desativa`);
        console.log(url)
    return this.httpClient.patch<IProduto>(url, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

}