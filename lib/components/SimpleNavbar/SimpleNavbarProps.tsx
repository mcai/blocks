import React from "react";

export interface SimpleNavbarProps {
    brand: { title?: React.ReactNode, href?: string };
    sections: {
        id: string,
        title: string,
        items: { key: string, title?: React.ReactNode, href?: string }[]
    }[];
}
