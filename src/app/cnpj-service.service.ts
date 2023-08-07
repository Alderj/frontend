import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CnpjServiceService {
 
  constructor(private httpCliente: HttpClient) { }
  
  buscar(cnpj:String){
    return this.httpCliente.get(`https://receitaws.com.br/v1/cnpj/${cnpj}`)
  }
}
