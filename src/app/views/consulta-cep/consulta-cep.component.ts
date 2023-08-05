import { Component } from '@angular/core';
import { CepServiceService } from 'src/app/cep-service.service';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.component.html',
  styleUrls: ['./consulta-cep.component.css']
})
export class ConsultaCepComponent {

  constructor(private cepService: CepServiceService){ }

  consultaCep(valor: String, form: any){
    this.cepService.buscar(valor).subscribe((dados) => this.populaForm(dados,form));
  }

  populaForm(dados: any , form: any){
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,     
      bairro: dados.bairro,
      complemento: dados.complemento,
      ibge: dados.ibge,
      ddd: dados.ddd,
      siafi: dados.siafi,      
      cidade: dados.localidade,
      uf: dados.uf,

    })
  }

}
