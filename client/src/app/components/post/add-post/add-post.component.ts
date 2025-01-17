import { Component } from '@angular/core';
import { PostService } from '../../../services/post.service';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  post = {
    title: '',
    content: '',
    likes: 0,
  };
  successMessage = '';

  constructor(private postService: PostService, private router: Router) {}

  createPost() {
    if (this.post.title && this.post.content) {
      this.postService.createPost(this.post).subscribe(
        (response) => {
          this.successMessage = 'Bài viết đã được tạo thành công!';
          this.router.navigate(['/']); // Quay lại danh sách bài viết (hoặc bất kỳ trang nào)
        },
        (error) => {
          console.error('Lỗi khi tạo bài viết:', error);
        }
      );
    } else {
      alert('Vui lòng nhập tiêu đề và nội dung!');
    }
  }
}
