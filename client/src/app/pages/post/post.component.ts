import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { CommentService } from '../../services/comment/comment.service';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { removeVietnameseTones } from '../../utils/refactor-url';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink, NgIf, NgForOf, DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
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
        const post = this.getPost.find((post:any) => removeVietnameseTones(post.title) === this.postTitle);
        this.filteredPost = post;
        this.filteredComments = post?.replyList ?? [];
        
        console.log("Expected Title:", removeVietnameseTones(this.filteredPost.title));
        console.log("Title", this.postTitle);
      }
    )
  }
}
