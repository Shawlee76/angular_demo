import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postHits: number;
  @Input() postCreated: Date;

  constructor() { }

  getTitle() { return this.postTitle; }
  getContent() { return this.postContent; }
  getHits() { return this.postHits; }
  getCreated() { return this.postCreated ; }

  getColor() {
    return (this.postHits > 0 ? 'success' : (this.postHits < 0 ? 'danger' : 'default'));
  }
  ngOnInit() {
  }
}
