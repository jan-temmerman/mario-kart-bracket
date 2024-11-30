import { DateTime } from "luxon";

export interface participantId {__participantId: number}

export default class Participant {
    id!: participantId;
    name: string = '';
    createdOn!: DateTime;

    static withData(data: Partial<Participant>): Participant {
        return Object.assign(new Participant(), data);
    }
}