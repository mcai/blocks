import { SimpleRoute } from "./SimpleRoute";
import React from "react";

export interface SimpleAppProps {
    navbar: React.ReactNode;
    routes: SimpleRoute[];
}
