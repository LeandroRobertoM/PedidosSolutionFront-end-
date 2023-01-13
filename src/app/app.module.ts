import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { map, catchError } from "rxjs/operators";
import { ActivatedRoute, Router } from '@angular/router';
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { clienteService } from './features/cliente/Cliente.service';
import { ClienteTableComponent } from './features/cliente/cliente-table/cliente-table.component';
import { ClienteFormComponent } from './features/cliente/cliente-form/cliente-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutoFormComponent } from './features/produto/produto-form/produto-form.component';
import { ProdutoTableComponent } from './features/produto/produto-table/produto-table.component';
import { ClienteFormUpdateComponent } from './features/cliente/cliente-form-update/cliente-form-update.component';
import { produtoService } from './features/produto/produto.service';
import { pedidoService } from './features/pedido/pedido.service';
import { ProdutoFormUpdateComponent } from './features/produto/produto-form-update/produto-form-update.component';
import { ProdutoFormUpdateManagerComponent } from './features/produto/produto-form-update-manager/produto-form-update-manager.component';
import { PedidoFormComponent } from './features/pedido/pedido-form/pedido-form.component';
import { PedidoFormUpdateComponent } from './features/pedido/pedido-form-update/pedido-form-update.component';
import { PedidoTableComponent } from './features/pedido/pedido-table/pedido-table.component';
import { PedidoFormUpdateManagerComponent } from './features/pedido/pedido-form-update-manager/pedido-form-update-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteTableComponent,
    ClienteFormComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    ProdutoFormComponent,
    ProdutoTableComponent,
    ClienteFormUpdateComponent,
    ProdutoFormComponent,
    ProdutoFormUpdateComponent,
    ProdutoFormUpdateManagerComponent,
    PedidoFormComponent,
    PedidoFormUpdateComponent,
    PedidoTableComponent,
    PedidoFormUpdateManagerComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule
  

 


  ],
  providers: [clienteService,produtoService,pedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
