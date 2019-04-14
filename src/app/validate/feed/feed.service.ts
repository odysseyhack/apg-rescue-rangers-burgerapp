import { Injectable } from '@angular/core';

import { Timeline } from '../../timeline/timeline.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  timelineData: Timeline[];

  constructor() {
    this.timelineData = [
      {
        timelineValidate: false,
        incident: 'Brand distributie centrum',
        location: 'Landhaven 1, Kampen',
        date: 1555212798001,
        timelineContent: {
          title: 'Er is een foto geuüpload',
          content: {
            type: 'img',
            link: 'https://images4.persgroep.net/rcs/j1guLlWrFi0ZDa0mzNnS05b8cJw/diocontent/133477868/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.9'
          }
        }
      },
      {
        timelineValidate: true,
        incident: 'Brand distributie centrum',
        location: 'Landhaven 1, Kampen',
        date: 1555202998001,
        timelineContent: {
          title: 'Er is een bericht achter gelaten',
          content: {
            type: 'text',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
          }
        }
      }
    ];
  }

  getTimelineData(dataType: boolean) {
    const newArray =  this.timelineData.filter((el) => {
      return el.timelineValidate === dataType;
    });
    return newArray;
  }

}
