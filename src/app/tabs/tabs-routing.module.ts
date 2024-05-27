import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'start',
    loadChildren: () => import('../start/start.module').then(m => m.StartPageModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('../discover/discover.module').then(m => m.DiscoverPageModule)
  },
  {
    path: 'info/info-panda',
    loadChildren: () => import('../info-panda/info-panda.module').then(m => m.InfoPandaPageModule)
  },
  {
    path: 'contribute/contribute-panda',
    loadChildren: () => import('../contribute-panda/contribute-panda.module').then(m => m.ContributePandaPageModule)
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
