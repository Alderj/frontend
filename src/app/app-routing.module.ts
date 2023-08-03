import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './pages/product/product-create/product-create.component';
import { SomarComponent } from './views/somar/somar.component';
import { ConsumoComponent } from './views/consumo/consumo.component';
import { RemoveCaracLoteComponent } from './views/remove-carac-lote/remove-carac-lote.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "products",
  component: ProductCrudComponent
},{
  path: "products/create",
  component: ProductCreateComponent
},
{
  path: "somar",
  component: SomarComponent
},
{
  path: "consumo",
  component: ConsumoComponent
},
{
  path: "remove-carac-lote",
  component: RemoveCaracLoteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
