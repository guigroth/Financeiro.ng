import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { UsuarioCadastroComponent } from './pages/usuario/usuario-cadastro/usuario-cadastro.component';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsuarioPesquisaComponent } from './pages/usuario/usuario-pesquisa/usuario-pesquisa.component';
import {MatTableModule} from '@angular/material/table';
import { CategoriaCadastroComponent } from './pages/categoria/categoria-cadastro/categoria-cadastro.component';
import { CategoriaPesquisaComponent } from './pages/categoria/categoria-pesquisa/categoria-pesquisa.component';
import { ContaCadastroComponent } from './pages/conta/conta-cadastro/conta-cadastro.component';
@NgModule({
  declarations: [
    AppComponent,
    UsuarioCadastroComponent,
    UsuarioPesquisaComponent,
    CategoriaCadastroComponent,
    CategoriaPesquisaComponent,
    ContaCadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    FlexLayoutModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
