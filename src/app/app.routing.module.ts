import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentListaComponent } from './componentes/comment-lista/comment-lista.component';

const routes: Routes = [
  { path: '', component: CommentListaComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }