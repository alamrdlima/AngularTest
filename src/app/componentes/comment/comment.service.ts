import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Comment } from './comment';

const API = 'http://jsonplaceholder.typicode.com'

@Injectable({ providedIn: 'root' })
export class CommentService {

    constructor(private http: HttpClient) {}

    filtroListarComments(posts: String, filtro: number) {
        return this.http
            .get<Comment[]>(API + '/' + posts + '/' + filtro + '/comments');
    }
}