export class Question {
    public id: number;
    public question: string;
    public questionType: string;

    constructor(id: number, question: string, questionType: string) {
        this.id = id;
        this.question = question;
        this.questionType = questionType;
    }

}