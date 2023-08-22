import { Component } from '@angular/core';

@Component({
  selector: 'app-remove-carac-lote',
  templateUrl: './remove-carac-lote.component.html',
  styleUrls: ['./remove-carac-lote.component.css']
})


export class RemoveCaracLoteComponent {

  cnpjList: string = '';
  resultado: string = '';

  removerCaracteresEspeciais() {
    const cnpjArray = this.cnpjList.split('\n');
    let resultado = '';

    for (let i = 0; i < cnpjArray.length; i++) {
      /*const cnpj = cnpjArray[i].replace(/[^\d]+/g, '');*/
      const cnpj = cnpjArray[i].replace(/[^a-zA-ZÃãÕõáÁéÉíÍóÓúÚÂÊâêàÀôÔçÇ ]+/g, '');
      resultado += cnpj + ' \n';
    }

    this.resultado = resultado;
  }

}

