import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from './add-user.component';

const viewUser: Routes = [
  { path: '',  component: AddUserComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(viewUser)
  ],
  exports: [
    RouterModule
  ]
})
export class AddUserRoutingModule { }