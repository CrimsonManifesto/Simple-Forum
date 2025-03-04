import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ThreadService } from '../../services/thread/thread.service';
import { removeVietnameseTones } from '../../utils/refactor-url';
import { formatDate } from '../../utils/refactor-date';

@Component({
  selector: 'app-thread',
  standalone: true,
  imports: [RouterLink, NgIf, NgForOf, DatePipe],
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css'],
  providers: [DatePipe],
})
export class ThreadComponent implements OnInit {
  threadTitle: string = '';
  allThreads: any[] = [];
  filteredThreads: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private threadService: ThreadService,
    private datePipe: DatePipe
  ) {}

  // Encode title to remove accents
  encodeTitle(title: string | undefined): string {
    const titleWithoutAccents = removeVietnameseTones(title || '');
    return titleWithoutAccents;
  }

  // Format date imported from utils
  formatDate(dateString: string | Date): string {
    return formatDate(dateString, this.datePipe);
  }

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
      this.threadTitle = title;
    }

    // Get all threads
    this.threadService.getThreads().subscribe((data) => {
      this.allThreads = data;

      // Filter posts by thread title
      const thread = this.allThreads.find(
        (thread) => this.encodeTitle(thread.title) === this.threadTitle
      );
      this.filteredThreads = thread?.postList || [];
      console.log('Filtered Threads:', this.filteredThreads);

      console.log('Expected Title:', this.threadTitle);
      console.log('Title:', this.encodeTitle(thread.title));

    });
  }
}
