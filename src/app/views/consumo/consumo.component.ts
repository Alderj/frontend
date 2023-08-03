import { Component } from '@angular/core';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})
export class ConsumoComponent {

  precoCombustivel: number | null = null;
  mediaDoCarro: number | null = null;
  distancia: number | null = null;
  litrosConsumidos: number = 0;
  res: number = 0;
  resultado: string | null = null;

  // Função para limpar o resultado
  limparResultado() {
    this.resultado = '';
  }

  calcular(): void {
    if (this.precoCombustivel === null || this.mediaDoCarro === null || this.distancia === null) {
      return; // Caso algum dos campos seja nulo, não realiza o cálculo
    }

    this.litrosConsumidos = this.distancia / this.mediaDoCarro;
    this.res = this.litrosConsumidos * this.precoCombustivel;

    this.litrosConsumidos = parseFloat(this.litrosConsumidos.toFixed(2));
    this.res = parseFloat(this.res.toFixed(2));

    this.resultado = `Consumido ` + this.litrosConsumidos + ` litros de combustível nessa viagem, com um total de R$ ` 
    + this.res + ` gastos para percorrer ` + this.distancia + ` Km.`;

    // Limpa os campos de entrada após o cálculo
    this.precoCombustivel = null;
    this.mediaDoCarro = null;
    this.distancia = null;

   
  }




}





