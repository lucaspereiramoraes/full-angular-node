import { Routes } from '@angular/router';
import { TarefasComponent } from './pages/tarefas/tarefas';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [
  { path: '', redirectTo: 'tarefas', pathMatch: 'full' }, // se entrar no /, manda pra /tarefas
  { path: 'tarefas', component: TarefasComponent },
  { path: 'sobre', component: Sobre }
];