import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICliente } from '../cliente.model';
import { clienteService } from '../Cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {
  cliente: ICliente;
  public form!: FormGroup;
  public formValido: boolean = true;

  constructor(private clienteservice: clienteService, private router: Router) { }

  public ngOnInit(): void {

    this.form = new FormGroup({
      nome: new FormControl (null, [Validators.required, Validators.minLength(3)]),
      cpf: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
      dataNascimento: new FormControl(null, [Validators.required]),
      
    });
  }

  public salvar(): void {
    if (this.form.valid) {
      const novoCliente: ICliente = {
        nome: this.form.value.nome,
        cpf: this.form.value.cpf,
        dataNascimento: this.form.value.dataNascimento,
    
      };

      this.clienteservice.salvarCliente(novoCliente).subscribe(() => {
        this.clienteservice.showMessage('Cliente criado com sucesso!')
        this.router.navigate(['/products'])
    })
   }
  }
}

