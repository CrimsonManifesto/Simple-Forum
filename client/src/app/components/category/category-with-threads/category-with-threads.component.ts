import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DatePipe, NgForOf } from '@angular/common';
import { CategoryService } from '../../../services/post/category.service';

@Component({
  selector: 'app-category-with-threads',
  standalone: true,
  imports: [NgForOf, DatePipe],
  templateUrl: './category-with-threads.component.html',
  styleUrl: './category-with-threads.component.css',
})
export class CategoryWithThreadsComponent implements OnInit {
  categoriesWithThreads: any[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategoriesWithThreads().subscribe((data) => {
      this.categoriesWithThreads = data;
    });
  }
}
