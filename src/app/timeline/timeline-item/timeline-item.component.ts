import { Component, OnInit, Input } from '@angular/core';

import { Timeline } from '../timeline.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input() timelineData: Timeline;
  @Input() index: number;
  calcDate: any;

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

}
