import {SimpleCookie} from "../../utils/SimpleCookie";
import React from "react";

export interface SimpleIfSignedInProps {
    cookie: SimpleCookie;
    deniedComponent: React.ReactNode
    signInComponent: React.ReactNode
    extraCondition?: (user: any) => boolean
}
