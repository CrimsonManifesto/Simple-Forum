import {Component, OnInit} from '@angular/core';
import { PostService } from '../../../services/post/post.service';
import {DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
