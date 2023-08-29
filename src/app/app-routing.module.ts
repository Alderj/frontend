import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }from './views/home/home.component';

import { ConsumoComponent } from './views/consumo/consumo.component';
import { RemoveCaracLoteComponent } from './views/remove-carac-lote/remove-carac-lote.component';
import { ImcComponent } from './views/imc/imc.component';
import { ConsultaCnpjComponent } from './views/consulta-cnpj/consulta-cnpj.component';
import { ConsultaCepComponent } from './views/consulta-cep/consulta-cep.component';
import { LoginComponent } from './views/login/login.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: "login"},
  {path: "", component: HomeComponent},
  {path: "imc",component: ImcComponent},
  {path: "consumo",component: ConsumoComponent},
  {path: "remove-carac-lote",component: RemoveCaracLoteComponent},
  {path: "consulta-cnpj",component: ConsultaCnpjComponent},
  {path: "consulta-cep",component: ConsultaCepComponent}, 
  {path: "login",component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
