import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommentComponent } from "./comment/comment.component";
import { CommentListaComponent } from "./comment-lista/comment-lista.component";
import { ModalComponent } from "./modal/modal-lista.component";

@NgModule({
    declarations: [ 
        CommentComponent,
        CommentListaComponent,
        ModalComponent
        
    ],
    imports: [ 
        HttpClientModule,
        CommonModule,
        NgbModule
    ]    
})
export class CommentsModule {}