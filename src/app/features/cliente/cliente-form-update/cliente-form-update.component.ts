import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICliente } from '../cliente.model';
import { clienteService } from '../Cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoFormComponent } from '../../produto/produto-form/produto-form.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cliente-form-update',
  templateUrl: './cliente-form-update.component.html',
  styleUrls: ['./cliente-form-update.component.scss']
})
export class ClienteFormUpdateComponent implements OnInit {
  cliente: ICliente;
  public form!: FormGroup;
  public formValido: boolean = true;

  constructor(private clienteservice: clienteService,
    private router: Router,
    private route: ActivatedRoute) { }

  public ngOnInit(): void {

      const idCliente = +this.route.snapshot.paramMap.get("idCliente")!;
      this.clienteservice.getIDCliente(idCliente).subscribe((cliente) => {
      this.cliente = cliente;
      console.log(cliente);
    });

    this.form = new FormGroup({
      
     // idCliente: new FormControl({value: new Date(), disabled: true}, [Validators.required]),
      idCliente: new FormControl({value: 15, disabled: true}, [Validators.required]),
      nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      cpf: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
      dataNascimento: new FormControl(null, [Validators.required]),
      pontosFidelidade: new FormControl({ value: null, disabled: true })
      
      

    });
       
     
  };

  public salvar(): void {
    if (this.form.valid) {
      const novoCliente: ICliente = {
        idCliente: this.cliente.idCliente,
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
  updateCliente(): void {
    if (this.form.valid) {
      const updateCliente: ICliente = {
        idCliente:this.cliente.idCliente,
        nome: this.form.value.nome,
        cpf: this.form.value.cpf,
        dataNascimento: this.form.value.dataNascimento,
        pontosFidelidade:this.cliente.pontosFidelidade
      };
      this.clienteservice.updateCliente(updateCliente).subscribe(() => {
      this.clienteservice.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/products"]);
    })
  }
}
}