import { Routes } from '@angular/router';
import { LoginButtonComponent } from './components/login-button';
import { LogoutButtonComponent } from './components/logout-button';
import { HomeComponent } from './pages/home/home.component';
import { AddPostComponent } from './components/post/add-post/add-post.component';
import { PostListComponent } from './components/post/post-list/post-list.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginButtonComponent,
  },
  {
    path: 'logout',
    component: LogoutButtonComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'add-post', 
    component: AddPostComponent,
  },
  {
    path: 'view-post',
    component: PostListComponent,
  },
];
