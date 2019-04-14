import { Component, OnInit } from '@angular/core';

import { Timeline } from '../../timeline/timeline.model';

import { FeedService } from './feed.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  data: { id: number };
  timelineData: Timeline[];
  title: string;
  location: string;
  dateObj: number;
  basicInfo: { incident: string, locatie: string };
  url: string;
  getValidatedData: boolean;

  constructor(
    private feedService: FeedService,
    private router: Router
    ) { }

  ngOnInit() {
    this.data = {
      id: 1
    };
    this.url = this.router.url.split('/')[1];
    this.getValidatedData = this.url === 'inform' ? false : true;
    this.timelineData = this.feedService.getTimelineData(this.getValidatedData);
    if (this.timelineData[0]) {
      this.basicInfo = {
        incident: this.timelineData[0].generalContent.incident,
        locatie: this.timelineData[0].generalContent.location
      }
    }
  }

}
