import React from "react";

export interface SimplePageProps {
    breadCrumbItems?: {
        key: string;
        title?: React.ReactNode;
        href?: string;
        active?: boolean;
    }[];
}
