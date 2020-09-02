import React from "react";

export interface SimpleToastProps {
    visible: boolean
    onClose: () => {}

    title?: React.ReactNode
    subtitle?: React.ReactNode
    text?: React.ReactNode

    delay?: number
}
