import React from "react";

export interface SimpleToastProps {
    visible: boolean

    title?: React.ReactNode
    subtitle?: React.ReactNode
    text?: React.ReactNode

    delay?: number
}
