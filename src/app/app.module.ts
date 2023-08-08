import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/template/header/header.component';
import { ConsumoComponent } from './views/consumo/consumo.component';
import { FooterComponent } from './pages/template/footer/footer.component';
import { NavComponent } from './pages/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';

import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './pages/product/product-create/product-create.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { RemoveCaracLoteComponent } from './views/remove-carac-lote/remove-carac-lote.component';
import { ImcComponent } from './views/imc/imc.component';
import { ConsultaCnpjComponent } from './views/consulta-cnpj/consulta-cnpj.component';
import { ConsultaCepComponent } from './views/consulta-cep/consulta-cep.component';
import { CriarTarefaComponent } from './views/criar-tarefa/criar-tarefa.component';
import { NovaTarefaComponent } from './views/nova-tarefa/nova-tarefa.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
   
    ConsumoComponent,
    RemoveCaracLoteComponent,
    ImcComponent,
    ConsultaCnpjComponent,
    ConsultaCepComponent,
    CriarTarefaComponent,
    NovaTarefaComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class FormFieldAppearanceExample {}
