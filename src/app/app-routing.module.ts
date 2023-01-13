import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoFormUpdateComponent } from './features/produto/produto-form-update/produto-form-update.component';
import { ProdutoFormUpdateManagerComponent } from './features/produto/produto-form-update-manager/produto-form-update-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClienteFormComponent } from './features/cliente/cliente-form/cliente-form.component';
import { ClienteFormUpdateComponent } from './features/cliente/cliente-form-update/cliente-form-update.component';
import { ClienteTableComponent } from './features/cliente/cliente-table/cliente-table.component';
import { ProdutoFormComponent } from './features/produto/produto-form/produto-form.component';
import { ProdutoTableComponent } from './features/produto/produto-table/produto-table.component';
import { HomeComponent } from './home/home.component';
import { PedidoFormComponent } from './features/pedido/pedido-form/pedido-form.component';
import { PedidoTableComponent } from './features/pedido/pedido-table/pedido-table.component';
import { PedidoFormUpdateComponent } from './features/pedido/pedido-form-update/pedido-form-update.component';
import { PedidoFormUpdateManagerComponent } from './features/pedido/pedido-form-update-manager/pedido-form-update-manager.component';

const routes: Routes = [
  {
    path: 'clientes',
    children: [
      {
        path: 'formulario',
        component: ClienteFormComponent,
      },
      {
        path: 'tabela',
        component: ClienteTableComponent,
      },
      {
        path: 'update/:idCliente',
        component: ClienteFormUpdateComponent,
      },
      {
        path: '',
        redirectTo: 'home', pathMatch: 'full'
      },
    ],
  },
  {
    path: 'produtos',
    children: [
      {
        path: 'formulario',
        component: ProdutoFormComponent,
      },
      {
        path: 'tabela',
        component: ProdutoTableComponent,
      },
      {
        path: 'update/:idProduto',
        component: ProdutoFormUpdateComponent,
      },
      {
        path: 'update/manager/:idProduto',
        component: ProdutoFormUpdateManagerComponent,
        
      },
    ]
  }, {
    path: 'pedidos',
    children: [
      {
        path: 'formulario',
        component: PedidoFormComponent,
      },
      {
        path: 'tabela',
        component: PedidoTableComponent,
      },
      {
        path: 'update/:idPedido',
        component: PedidoFormUpdateComponent,
      },
      {
        path: 'update/manager/:idPedido',
        component: PedidoFormUpdateManagerComponent,
        
      },

    ]
  },{
    path: 'home',
    children: [
      {
        path: 'dsboard',
        component: DashboardComponent,
      },
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
