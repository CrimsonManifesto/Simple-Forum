import { Component } from '@angular/core';
import {AddPostComponent} from '../../components/post/add-post/add-post.component';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import { PostListComponent } from '../../components/post/post-list/post-list.component';
import { CategoryWithThreadsComponent } from '../../components/category/category-with-threads/category-with-threads.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AddPostComponent,
    FormsModule,
    RouterLink,
    PostListComponent,
    CategoryWithThreadsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Home';
}
