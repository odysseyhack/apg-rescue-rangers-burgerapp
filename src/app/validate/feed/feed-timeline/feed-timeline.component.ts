import { Component, OnInit } from '@angular/core';

import { FeedTimeline } from './feed-timeline.model';

import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed-timeline',
  templateUrl: './feed-timeline.component.html',
  styleUrls: ['./feed-timeline.component.scss'],
})
export class FeedTimelineComponent implements OnInit {
  timelineData: FeedTimeline[];

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.timelineData = this.feedService.getTimelineData();
  }

}
