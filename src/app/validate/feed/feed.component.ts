import { Component, OnInit } from '@angular/core';

import { FeedTimeline } from './feed-timeline/feed-timeline.model';

import { FeedService } from './feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [ FeedService ]
})
export class FeedComponent implements OnInit {
  data: { id: number };
  timelineData: FeedTimeline[];
  title: string;
  location: string;
  dateObj: number;
  basicInfo: { incident: string, locatie: string };

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.data = {
      id: 1
    };
    this.timelineData = this.feedService.getTimelineData();
    if (this.timelineData[0]) {
      this.title = this.timelineData[0].incident;
      this.dateObj = this.timelineData[0].date;
      this.basicInfo = {
        incident: this.timelineData[0].incident,
        locatie: this.timelineData[0].location
      }
    }
  }

}
