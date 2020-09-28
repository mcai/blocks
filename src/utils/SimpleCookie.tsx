import Cookies from "js-cookie";
import {SimpleDataProvider} from "../data/SimpleDataProvider";

export class SimpleCookie {
    private readonly dataProvider: SimpleDataProvider;
    private readonly resource: string;
    private readonly getUserByGuidAction: string;
    private readonly sessionKeyUserGuid: string;

    constructor(
        dataProvider: SimpleDataProvider,
        resource: string,
        getUserByGuidAction: string,
        sessionKeyUserGuid: string = "user_guid"
    ) {
        this.dataProvider = dataProvider;
        this.resource = resource;
        this.getUserByGuidAction = getUserByGuidAction;
        this.sessionKeyUserGuid = sessionKeyUserGuid;
    }

    async getUser<UserT>(): Promise<UserT | undefined> {
        let guid = Cookies.get(this.sessionKeyUserGuid) ?? "";
        if (guid == null || guid === "") {
            return undefined;
        } else {
            return await this.dataProvider.getOne(this.resource, this.getUserByGuidAction, {
                filter: {
                    guid: guid
                }
            });
        }
    }

    signIn(guid: string): void {
        Cookies.set(this.sessionKeyUserGuid, guid, {
            expires: 180
        });
    }

    signOut(): void {
        Cookies.remove(this.sessionKeyUserGuid);
    }
}
