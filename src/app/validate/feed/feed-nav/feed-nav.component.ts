import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-nav',
  templateUrl: './feed-nav.component.html',
  styleUrls: ['./feed-nav.component.scss']
})
export class FeedNavComponent implements OnInit {
  @Input() dataObj: { incident: string, locatie: string };
  
  constructor() { }

  ngOnInit() {
  }

}
