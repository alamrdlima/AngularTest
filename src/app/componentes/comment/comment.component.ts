import { Component, Input } from '@angular/core';

@Component({
  selector: 'totvs-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
    // Comments
    @Input() postId='';
    @Input() id='';
    @Input() name='';
    @Input() email='';
    @Input() body='';
}