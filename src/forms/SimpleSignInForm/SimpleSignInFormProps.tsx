import { SimpleDataProvider } from "../../data/SimpleDataProvider";
import { SimpleCookie } from "../../utils/SimpleCookie";

export interface SimpleSignInFormProps {
    dataProvider: SimpleDataProvider;
    resource: string;
    signInAction: string;
    cookie: SimpleCookie;
}
