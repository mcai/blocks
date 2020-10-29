import { SimpleDataProvider } from "../../data/SimpleDataProvider";
import { SimpleCookie } from "../../utils/SimpleCookie";

export interface SimpleSignInFormProps {
    dataProvider: SimpleDataProvider;
    resource: string;
    signInAction: string;
    onBeforeSubmit?: (values: any) => Promise<any>;
    onSuccessRedirect?: (item: any) => string;
    cookie: SimpleCookie;
}
