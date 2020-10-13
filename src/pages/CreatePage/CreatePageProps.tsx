import React from "react";
import { SimpleResource } from "../../data/SimpleResource";

export interface CreatePageProps {
    resource: SimpleResource;
    serverDataProviderUrl: string;
}
