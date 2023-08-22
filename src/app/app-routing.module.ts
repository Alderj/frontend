import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './pages/product/product-create/product-create.component';

import { ConsumoComponent } from './views/consumo/consumo.component';
import { RemoveCaracLoteComponent } from './views/remove-carac-lote/remove-carac-lote.component';
import { ImcComponent } from './views/imc/imc.component';
import { ConsultaCnpjComponent } from './views/consulta-cnpj/consulta-cnpj.component';
import { ConsultaCepComponent } from './views/consulta-cep/consulta-cep.component';
import { CriarTarefaComponent } from './views/criar-tarefa/criar-tarefa.component';
import { NovaTarefaComponent } from './views/nova-tarefa/nova-tarefa.component';



const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "products",
  component: ProductCrudComponent
},{
  path: "products/create",
  component: ProductCreateComponent
},{
  path: "imc",
  component: ImcComponent
},
{
  path: "consumo",
  component: ConsumoComponent
},
{
  path: "remove-carac-lote",
  component: RemoveCaracLoteComponent
},
{
  path: "consulta-cnpj",
  component: ConsultaCnpjComponent
},
{
  path: "consulta-cep",
  component: ConsultaCepComponent
},
{
  path: "criar-tarefa",
  component: CriarTarefaComponent
},
{
  path: "nova-tarefa",
  component: NovaTarefaComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
