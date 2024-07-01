import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditUserComponent } from './edit-user.component';

const viewUser: Routes = [
  { path: ':id',  component: EditUserComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(viewUser)
  ],
  exports: [
    RouterModule
  ]
})
export class EditUserRoutingModule { }