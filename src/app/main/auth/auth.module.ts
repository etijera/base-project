import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes = [
    {
        path        : '',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path        : 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class AuthModule { }
