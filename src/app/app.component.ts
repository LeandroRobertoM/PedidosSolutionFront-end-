import { Component } from '@angular/core';
import { clienteService } from './features/cliente/Cliente.service';
import { produtoService } from './features/produto/produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private clienteservice: clienteService, private produtoService: produtoService) {

  }

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}

