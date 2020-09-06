import React from "react";

export interface SimpleModalConfirmProps {
    buttonVisible?: boolean
    visible?: boolean
    title?: React.ReactNode
    subtitle?: React.ReactNode
    onConfirm?: () => void,
    onCancel?: () => void,
    okText?: string,
    cancelText?: string
}
