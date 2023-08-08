import { Component } from '@angular/core';
import { CnpjServiceService } from 'src/app/cnpj-service.service';

@Component({
  selector: 'app-consulta-cnpj',
  templateUrl: './consulta-cnpj.component.html',
  styleUrls: ['./consulta-cnpj.component.css']
})
export class ConsultaCnpjComponent {
  constructor(private cnpjService: CnpjServiceService){ }

  consultaCnpj(valor: string, form: any){
    this.cnpjService.buscar(valor).subscribe((dados: any) => this.populaForm(dados, form));
  }

  populaForm(dados: any, form: any){
    if (dados.status === 'ERROR') {
      // TODO: verifique a mensagem de erro, alerte o usuario, etc
      console.error(dados)
    } else {
      form.form.patchValue({
        nome: dados.nome,
        fantasia: dados.fantasia,   
      })
    }
  }
}

