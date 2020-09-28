import React from "react";

export interface SimpleNavbarProps {
    brand: { title?: React.ReactNode, href?: string };

    sections: {
        id: string,
        title: string,
        visible?: boolean,
        rightAligned?: boolean,
        items: { key: string, title?: React.ReactNode, href?: string, onClick?: () => void, visible?: boolean }[]
    }[];

    extra?: React.ReactNode;
}
