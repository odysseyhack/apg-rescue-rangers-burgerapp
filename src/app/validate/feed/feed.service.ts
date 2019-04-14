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
        generalContent: {
          incident: 'Zware storm Hoek van Holland',
          timelineValidate: false,
          location: 'Haakweg 40, Hoek van holland',
          date: 1555212798001,
        },
        timelineContent: {
          title: 'Er is een foto geüpload',
          content: {
            type: 'img',
            link: 'https://images4.persgroep.net/rcs/UiptBAr21Ossx_uL-XIt0cE99dc/diocontent/117620393/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.9'
          }
        }
      },
      {
        generalContent: {
          timelineValidate: true,
          incident: 'Zware storm Hoek van Holland',
          location: 'Haakweg 40, Hoek van holland',
          date: 1555202998001,
        },
        timelineContent: {
          title: 'Er is een gesproken bericht achter gelaten',
          content: {
            type: 'voice',
            text: ''
          }
        }
      }
    ];
  }

  getTimelineData(dataType: boolean) {
    const newArray =  this.timelineData.filter((el) => {
      return el.generalContent.timelineValidate === dataType;
    });
    return newArray;
  }

}
