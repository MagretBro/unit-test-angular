import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/main.component'; 

export const routes: Routes = [
   { 
    path: '',
    component: MainComponent
    }
    //, {
    //     path: 'rxjs',
    //     loadChildren: () => import('./modules/rxjs/rxjs.module').then(m => m.RxjsModule)
    // }

    // @NgModule({
    //     imports: [RouterModule.forRoot(routes)],
    //     exports: [RouterModule]
    // })



    

];
