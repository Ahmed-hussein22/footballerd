import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/admin-layout/admin-layout.component').then(
        (m) => m.AdminLayoutComponent
      ),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.page').then(
            (m) => m.DashboardPageComponent
          )
      },
      {
        path: 'players',
        title: 'Players',
        loadComponent: () =>
          import('./shared/pages/placeholder.page').then(
            (m) => m.PlaceholderPageComponent
          ),
        data: { title: 'Players' }
      },
      {
        path: 'coaches',
        title: 'Coaches',
        loadComponent: () =>
          import('./shared/pages/placeholder.page').then(
            (m) => m.PlaceholderPageComponent
          ),
        data: { title: 'Coaches' }
      },
      {
        path: 'teams',
        title: 'Teams',
        loadComponent: () =>
          import('./shared/pages/placeholder.page').then(
            (m) => m.PlaceholderPageComponent
          ),
        data: { title: 'Teams' }
      },
      {
        path: 'finance',
        title: 'Finance',
        loadComponent: () =>
          import('./shared/pages/placeholder.page').then(
            (m) => m.PlaceholderPageComponent
          ),
        data: { title: 'Finance' }
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
