import { Routes } from '@angular/router';
import { LoginButtonComponent } from './components/login-button';
import { LogoutButtonComponent } from './components/logout-button';
import { HomeComponent } from './pages/home/home.component';
import { AddPostComponent } from './components/post/add-post/add-post.component';
import { ThreadComponent } from './pages/thread/thread.component';
import { PostComponent } from './pages/post/post.component';

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
    path: 'thread/:title',
    component: ThreadComponent, 
  },
  {
    path: 'p/:title/:id',
    component: PostComponent,
  }

];
