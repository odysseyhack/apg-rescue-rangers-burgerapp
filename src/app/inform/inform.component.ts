import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Timeline } from '../timeline/timeline.model';
import { FeedService } from '../validate/feed/feed.service';

@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.scss']
})
export class InformComponent implements OnInit {
  dataObj: {incident: string, location: string}
  url: string;
  getValidatedData: boolean;
  timelineData: Timeline[];

  constructor(
    private router: Router,
    private feedService: FeedService
    ) { }

  ngOnInit() {
    this.url = this.router.url.split('/')[1];
    this.getValidatedData = this.url === 'inform' ? false : true;
    this.timelineData = this.feedService.getTimelineData(this.getValidatedData);
    if (this.timelineData) {
      this.dataObj = {
        incident: this.timelineData[0].incident,
        location: this.timelineData[0].location
      };
    }
  }

}
