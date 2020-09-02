import {SimpleDataProvider} from "../../data/SimpleDataProvider";

export interface SignInPageProps {
    dataProvider: SimpleDataProvider;
    resource: string;
    getUserByGuidAction: string;
    signInAction: string;
    sessionKeyUserGuid: string;
}
