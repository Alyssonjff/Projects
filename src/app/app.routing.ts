import {RouterModule, Routes} from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ViewUserComponent } from './view-user/view-user.component';


const APP_ROUTES: Routes = [
    {path: 'add-user', component: AddUserComponent },
    { path: 'edit-user/:id', component: EditUserComponent },
    { path: 'delete-user/:id', component: DeleteUserComponent },
    {path: 'view-user/:id', component: ViewUserComponent},
    {path: '', component: UserListComponent}
];


export const routing = RouterModule.forRoot(APP_ROUTES);