import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ICliente } from "./cliente.model";
import { Observable, subscribeOn, tap, EMPTY, ObservedValueOf } from "rxjs";
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from "@angular/material/snack-bar";
import { map, catchError } from "rxjs/operators";



@Injectable()
export class clienteService {

  private api: string = "https://localhost:44301/api/Cliente"

  public dataSource = new MatTableDataSource<ICliente>();
  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  public salvarCliente(novoCliente: ICliente): Observable<ICliente> {
    //  console.log(novoCliente);
    // this.httpClient.post(`${this.api}/api/Cliente`, novoCliente)
    //    .subscribe(() => { });
    return this.httpClient.post<ICliente>(`${this.api}`, novoCliente).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getAllCliente(): Observable<ICliente[]> {
    return this.httpClient.get<ICliente[]>(this.api)
      .pipe(
        tap(clientes => console.log(clientes))
      )
      ;
  }
  getIDCliente(idCliente: number): Observable<ICliente> {
    const url = `${this.api}/${idCliente}`;
    return this.httpClient.get<ICliente>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateCliente(cliente: ICliente): Observable<ICliente> {
    const url = `${this.api}`;
    console.log(url)
    return this.httpClient.put<ICliente>(url, cliente).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  deleteCliente(cliente: ICliente): Observable<ICliente> {
    const url = `${this.api}/${cliente.idCliente}`;
    console.log(url)
    return this.httpClient.delete<ICliente>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ); 
  }
  
  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}