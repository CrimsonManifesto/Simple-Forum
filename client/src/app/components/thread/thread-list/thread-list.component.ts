import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-thread-list',
  standalone: true,
  imports: [],
  templateUrl: './thread-list.component.html',
  styleUrl: './thread-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreadListComponent { }
