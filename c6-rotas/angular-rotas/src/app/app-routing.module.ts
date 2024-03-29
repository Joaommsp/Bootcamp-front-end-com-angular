import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

const routes: Routes = [
  {
    path: '',
    component: TitleComponent,
    pathMatch: 'full', // URL exata
  },
  {
    // portifolio
    // filha : portfolio/id
    // outra filha: portfolio/id/token
    path: 'portfolio',
    component: CardComponent,
    children: [
      {
        path: ':id',
        component: CardComponent
      },
      {
        path: ':id/:token',
        component: CardComponent
      }
    ],
    pathMatch: 'prefix', // default
  },
  {
    path: '**',
    redirectTo : ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
