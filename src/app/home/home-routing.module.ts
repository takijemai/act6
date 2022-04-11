import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'foto',
    loadChildren: () => import('../pages/foto/foto.module').then( m => m.FotoPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('../pages/list/list.module').then( m => m.ListPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
