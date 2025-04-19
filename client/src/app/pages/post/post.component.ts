import { ChangeDetectionStrategy, Component, OnInit, AfterViewInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { CommentService } from '../../services/comment/comment.service';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { removeVietnameseTones } from '../../utils/refactor-url';
import { ActivatedRoute, RouterLink } from '@angular/router';

declare var Quill: any;

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink, NgIf, NgForOf, DatePipe],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewInit {
  postTitle: string = '';
  encodedTitle: string = '';
  getPost: any = null;
  filteredPost: any = null;
  filteredComments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title') || '';
    // Encode title to remove accents
    console.log("Route title:", title);
    this.postTitle = title ? title : '';
    this.postService.getPosts().subscribe((posts) => {
      this.getPost = posts;
      const post = this.getPost.find((post: any) => removeVietnameseTones(post.title) === this.postTitle);
      this.filteredPost = post;
      this.filteredComments = post?.replyList ?? [];

      console.log("Expected Title:", removeVietnameseTones(this.filteredPost.title));
      console.log("Title", this.postTitle);
    });
  }

  ngAfterViewInit(): void {
    // Initialize Quill editor after the view has been rendered
    const quill = new Quill('#editor', {
      theme: 'snow',
      placeholder: 'Write your reply...'

    });
  }
}
