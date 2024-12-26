import { Routes } from '@angular/router';
import { LoginComponent } from './features/user/login/login.component';
import { AuthGuard } from './core/services/auth.guard';

export const routes: Routes = [
  {
    path: 'projects',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/project/project-list/project-list.component').then(
        (c) => c.ProjectListComponent
      ),
  },
  {
    path: 'documents/:project-id',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/document/document-list/document-list.component').then(
        (c) => c.DocumentListComponent
      ),
  },
  {
    path: 'dividers/:project-id',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/divider/divider-list/divider-list.component').then(
        (c) => c.DividerListComponent
      ),
  },
  {
    path: 'separators/:project-id',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import(
        './features/separator/separator-list/separator-list.component'
      ).then((c) => c.SeparatorListComponent),
  },
  {
    path: 'search',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/search/search/search.component').then(
        (c) => c.SearchComponent
      ),
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/admin/user-list/user-list.component').then(
        (c) => c.UserListComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/user/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
];
