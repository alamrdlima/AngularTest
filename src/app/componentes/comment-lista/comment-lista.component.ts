import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { catchError } from 'rxjs/operators';
import { empty, Observable, Subject } from 'rxjs';

import { Comment } from '../comment/comment';
import { CommentService } from '../comment/comment.service';

@Component({
    selector: 'totvs-comment-lista',
    templateUrl: './comment-lista.component.html',
    styleUrls: ['./comment-lista.component.css']
})
export class CommentListaComponent implements OnInit {

    tituloResultadoBusca = 'Resultado da busca';
    tituloL = 'Listagem de comentários';

    comments: Comment[] = [];
    comments$: Observable<Comment[]>;
    error$ = new Subject<boolean>();
    
    msgSemResultado: boolean = false;
    mostraSpinnerCarregarLista: boolean = false;
    mostraSpinnerPesquisar: boolean = false;
    msgParaArrayVazio: boolean = false;
    filtro: number;
    posts: String = '';

    constructor(
        private commentService: CommentService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { } 

    ngOnInit(): void {
        this.msgSemResultado = true;
    }

    filtrar() {
        this.msgSemResultado = false;
        this.mostraSpinnerPesquisar = true;
        
        this.commentService
        .filtroListarComments('posts', this.filtro)
        .subscribe(comments => {
            this.mostraSpinnerPesquisar = false;
            if ( !comments.length ) {
                this.msgParaArrayVazio = true;
            } else {
                this.msgParaArrayVazio = false;
                console.log(comments);
                this.comments = comments
            }
        }); 

        this.comments$ = this.commentService
        .filtroListarComments('posts', this.filtro)
        .pipe(
            catchError(error => {
            this.mostraSpinnerPesquisar = false;
            console.error(error);
            this.error$.next(true);
            return empty();
            })
        );
    }
}