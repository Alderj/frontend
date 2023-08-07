import { Component } from '@angular/core';
import { CnpjServiceService } from 'src/app/cnpj-service.service';

@Component({
  selector: 'app-consulta-cnpj',
  templateUrl: './consulta-cnpj.component.html',
  styleUrls: ['./consulta-cnpj.component.css']
})
export class ConsultaCnpjComponent {
  constructor(private cnpjService: CnpjServiceService){ }

  consultaCnpj(valor: String, form: any){
    this.cnpjService.buscar(valor).subscribe((dados) => this.populaForm(dados,form));
  }

  populaForm(dados: any , form: any){
    form.setValue({
      nome: dados.nome,
      fantasia: dados.fantasia,   
    })
  }
}

