import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './pages/product/product-create/product-create.component';
import { SomarComponent } from './views/somar/somar.component';
import { ConsumoComponent } from './views/consumo/consumo.component';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
