import React from "react";

export interface SimpleNavbarProps {
    brand: { title?: React.ReactNode, href?: string };
    sections: {
        id: string,
        title: string,
        visible?: boolean,
        items: { key: string, title?: React.ReactNode, href?: string, onClick?: () => void, visible?: boolean }[]
    }[];
}
