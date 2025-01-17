import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThreadService } from '../../../services/thread/thread.service';
import {DatePipe, NgForOf} from '@angular/common';


@Component({
  selector: 'app-thread-list',
  standalone: true,
  imports: [    
    NgForOf,
    DatePipe
  ],
  templateUrl: './thread-list.component.html',
  styleUrl: './thread-list.component.css',
})
export class ThreadListComponent { 
  threads: any[] = [];

  constructor(private threadService: ThreadService) {}

  ngOnInit() {
    this.threadService.getThreads().subscribe((data) => {
      this.threads = data;
    });
  }

}
