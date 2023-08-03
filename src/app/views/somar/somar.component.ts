import { Component } from '@angular/core';

@Component({
  selector: 'app-somar',
  templateUrl: './somar.component.html',
  styleUrls: ['./somar.component.css']
})
export class SomarComponent {
  number1: number | null = null;
  number2: number | null = null;
  result: number  | null = null;

  calculateSum(): void {
    if (this.number1 === null || this.number2 === null) {
      return; // Caso algum dos números seja nulo, não realiza a soma
    }

    this.result = this.number1 + this.number2;

    // Reinicializa os inputs para ficarem vazios após o cálculo
    //this.number1 = null;
    //this.number2 = null;
}


//////////////////////////////////////////////

/*
function calcular(){
  let precoCombustivel = document.getElementById("precodocombustivel").value;
  let mediaDoCarro = document.getElementById("mediadocarro").value;
  let distancia = document.getElementById("distanciaapercorrer").value; 

  let litrosConsumidos = (distancia/mediaDoCarro).toFixed(2);
  let res = (litrosConsumidos * precoCombustivel).toFixed(2);

  litrosConsumidos = litrosConsumidos.replace(".", ",");   
  res = res.replace(".", ","); 

  document.getElementById("text_area").innerText= "Consumido " + litrosConsumidos + " litros de combustível nessa viagem, com um total de R$ " + res + " gastos para percorrer " + distancia + " Km.";

}*/

}
