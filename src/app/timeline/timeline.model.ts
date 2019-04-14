export interface GeneralContent {
    incident: string;
    location: string;
    date: number;
    timelineValidate: boolean;
}

export interface TimelineContent {
    title: string;
    content: {
        type: string,
        link?: string,
        text?: string
    };
}

export class Timeline {
    public generalContent: GeneralContent;
    public timelineContent: TimelineContent;

    constructor(generalContent: GeneralContent, timelineContent: TimelineContent) {
        this.generalContent = generalContent;
        this.timelineContent = timelineContent;
    }
}
