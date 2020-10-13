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
        const guid = Cookies.get(this.sessionKeyUserGuid) ?? "";
        if (guid == null || guid === "") {
            return undefined;
        } else {
            return await this.dataProvider.one(this.resource, this.getUserByGuidAction, {
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

    static get<T>(name: string): T | undefined {
        const str = Cookies.get(name);

        if (str != undefined) {
            return JSON.parse(str);
        }

        return undefined;
    }

    static set<T>(name: string, value?: T): void {
        if (value != undefined) {
            const str = JSON.stringify(value);

            Cookies.set(name, str);
        } else {
            Cookies.remove(name);
        }
    }
}
