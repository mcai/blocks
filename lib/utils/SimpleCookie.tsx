import Cookies from "js-cookie";

export class SimpleCookie {
    getUserByGuidFunc: (guid: string) => Promise<any | undefined>;
    sessionKeyUserGuid: string;

    constructor(
        getUserByGuidFunc: (guid: string) => any,
        sessionKeyUserGuid: string = "user_guid"
    ) {
        this.getUserByGuidFunc = getUserByGuidFunc;
        this.sessionKeyUserGuid = sessionKeyUserGuid;
    }

    async getUser<UserT>(): Promise<UserT | undefined> {
        let guid = Cookies.get(this.sessionKeyUserGuid) ?? "";
        if (guid == null || guid === "") {
            return undefined;
        } else {
            return await this.getUserByGuidFunc(guid);
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
