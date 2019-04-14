import { Component, OnInit } from '@angular/core';

import { Timeline } from './timeline.model';

import { FeedService } from '../validate/feed/feed.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  timelineData: Timeline[];
  url: string;
  getValidatedData: boolean;

  constructor(
    private feedService: FeedService,
    private router: Router
    ) { }

  ngOnInit() {
    this.url = this.router.url.split('/')[1];
    this.getValidatedData = this.url === 'inform' ? false : true;
    this.timelineData = this.feedService.getTimelineData(this.getValidatedData);
    console.log(this.timelineData);
  }

}
