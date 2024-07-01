import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  {
    path: 'view',
    loadChildren: () => import('./view-user/view-user.module').then(m => m.ViewUserModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('./delete-user/delete-user.component').then(m => m.DeleteUserComponent)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit-user/edit-user.module').then(m => m.EditUserModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add-user/add-user.module').then(m => m.AddUserModule)
  },
  { path: '', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }