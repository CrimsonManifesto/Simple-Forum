import { Component } from '@angular/core';
import {AddPostComponent} from '../../components/post/add-post/add-post.component';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AddPostComponent,
    FormsModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
