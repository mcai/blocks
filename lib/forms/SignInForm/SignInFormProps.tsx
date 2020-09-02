import {SimpleDataProvider} from "../../data/SimpleDataProvider";
import {SimpleCookie} from "../../utils/SimpleCookie";

export interface SignInFormProps {
    dataProvider: SimpleDataProvider;
    resource: string;
    signInAction: string;
    cookie: SimpleCookie;
}
