import React from "react";

export interface SimpleBreadcrumbProps {
    items: { title?: React.ReactNode, href?: string, active?: boolean }[]
}
