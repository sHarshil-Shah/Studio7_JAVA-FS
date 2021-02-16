import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/users/login', pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
