import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateComponent } from './validate/validate.component';
import { QuestionComponent } from './validate/question/question.component';
import { NavigationComponent } from './validate/question/navigation/navigation.component';
import { AnswerTypeComponent } from './validate/question/answer-type/answer-type.component';
import { SupplyDataComponent } from './supply-data/supply-data.component';
import { InformComponent } from './inform/inform.component';
import { DetectIncidentComponent } from './inform/detect-incident/detect-incident.component';
import { WhatToDoComponent } from './inform/what-to-do/what-to-do.component';
import { WhatToDoItemComponent } from './inform/what-to-do/what-to-do-item/what-to-do-item.component';
import { TimelineComponent } from './inform/timeline/timeline.component';
import { TimelineItemComponent } from './inform/timeline/timeline-item/timeline-item.component';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './validate/feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidateComponent,
    QuestionComponent,
    NavigationComponent,
    AnswerTypeComponent,
    SupplyDataComponent,
    InformComponent,
    DetectIncidentComponent,
    WhatToDoComponent,
    WhatToDoItemComponent,
    TimelineComponent,
    TimelineItemComponent,
    ModalComponent,
    HomeComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
