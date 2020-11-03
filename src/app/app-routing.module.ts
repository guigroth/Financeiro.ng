import { UsuarioPesquisaComponent } from './pages/usuario/usuario-pesquisa/usuario-pesquisa.component';
import { UsuarioCadastroComponent } from './pages/usuario/usuario-cadastro/usuario-cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaCadastroComponent } from './pages/categoria/categoria-cadastro/categoria-cadastro.component';
import { CategoriaPesquisaComponent} from './pages/categoria/categoria-pesquisa/categoria-pesquisa.component';
import { ContaCadastroComponent } from './pages/conta/conta-cadastro/conta-cadastro.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'usuario/cadastro',
    pathMatch:'full'
  },
  {
    path:'usuario/cadastro',
    component:UsuarioCadastroComponent
  },
  {
    path:'usuario/pesquisa',
    component:UsuarioPesquisaComponent
  },
  {
    path:'categoria/cadastro',
    component:CategoriaCadastroComponent
  },
  {
    path:'categoria/pesquisa',
    component:CategoriaPesquisaComponent
  },
  {
    path:'conta/cadastro',
    component:ContaCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
