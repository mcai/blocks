import React from "react";
import { SimpleResource } from "../../data/SimpleResource";

export interface UpdatePageProps {
    id: string;
    resource: SimpleResource;
    baseUrl: string;
}
