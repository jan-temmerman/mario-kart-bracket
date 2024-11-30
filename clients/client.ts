import Participant from "~/models/Participant";
import supaBase from "~/middleware/supaBase";

export default class Client {
    static async getParticipants(): Promise<Array<Participant>> {
        const { data, error } = await supaBase
            .from('countries')
            .select()
        return data?.map(p => Participant.withData(p)) ?? [];
    }
}