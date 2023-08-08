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
        tipo: dados.tipo,
        porte: dados.porte,
        abertura: dados.abertura,
        status: dados.status,
        capital_social: "R$" + dados.capital_social,
        fantasia: dados.fantasia,         
        nome: dados.nome,          
                  
                  
        natureza_juridica: dados.natureza_juridica,          
        logradouro: dados.logradouro,
        email: dados.email,
        telefone: dados.telefone,

        numero: dados.numero,          
        complemento: dados.complemento,          
        bairro: dados.bairro,          
        municipio: dados.municipio,          
        uf: dados.uf,          
        data_situacao: dados.data_situacao,          
        motivo_situacao: dados.motivo_situacao,          
        data_situacao_especial: dados.data_situacao_especial, 
        
        
                  
      })
    }
  }
}

