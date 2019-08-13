import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Auth Routes Imports
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {path: 'users',
    children: [
      {
        path: '',
        component: UserListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: UserDetailComponent,
        canActivate: [AuthGuard]
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
