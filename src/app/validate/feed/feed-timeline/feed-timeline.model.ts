export interface TimelineContent {
    title: string;
    content: {
        type: string,
        link?: string,
        text?: string
    };
}

export class FeedTimeline {
    public incident: string;
    public location: string;
    public date: number;
    public timelineContent: TimelineContent;

    constructor(
        incident: string, location: string, date: number,
        timelineContent: TimelineContent
    ) {
        this.incident = incident;
        this.location = location;
        this.date = date;
        this.timelineContent = timelineContent;
    }
}
