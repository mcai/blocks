import React from "react";

export interface SimpleBreadcrumbProps {
    items: {
        key: string;
        title?: React.ReactNode;
        href?: string;
        active?: boolean;
    }[];
}
