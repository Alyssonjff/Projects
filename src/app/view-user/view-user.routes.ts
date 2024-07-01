import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewUserComponent } from './view-user.component';

const viewUser: Routes = [
  { path: ':id',  component: ViewUserComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(viewUser)
  ],
  exports: [
    RouterModule
  ]
})
export class ViewUserRoutingModule { }