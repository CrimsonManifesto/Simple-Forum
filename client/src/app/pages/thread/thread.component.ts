import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-thread',
  standalone: true,
  imports: [],
  templateUrl: './thread.component.html',
  styleUrl: './thread.component.css',
})
export class ThreadComponent  { 
  threadTitle: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.threadTitle = this.route.snapshot.paramMap.get('title')!;
  }

}
