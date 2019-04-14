import { Component, OnInit, Input } from '@angular/core';
import { FeedTimeline } from '../feed-timeline.model';

import * as moment from 'moment';

@Component({
  selector: 'app-feed-timeline-item',
  templateUrl: './feed-timeline-item.component.html',
  styleUrls: ['./feed-timeline-item.component.scss']
})
export class FeedTimelineItemComponent implements OnInit {
  @Input() timelineData: FeedTimeline;
  @Input() index: number;
  calcDate: any;

  constructor() { }

  ngOnInit() {

    this.calcDate = this.calcHistoricTime(this.timelineData.date);
  }

  calcHistoricTime(historicDate) {
    
  }

}
