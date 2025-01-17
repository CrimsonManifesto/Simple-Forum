import { AddPostComponent } from '../../components/post/add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PostListComponent } from '../../components/post/post-list/post-list.component';
import { CategoryWithThreadsComponent } from '../../components/category/category-with-threads/category-with-threads.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { CategoryService } from '../../services/post/category.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AddPostComponent,
    FormsModule,
    RouterLink,
    PostListComponent,
    CategoryWithThreadsComponent,
    NgForOf, 
    DatePipe, 
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  title = 'Home';
  categoriesWithThreads: any[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategoriesWithThreads().subscribe((data) => {
      this.categoriesWithThreads = data;
    });
  }
}
