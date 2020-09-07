import React from "react";
import {SimpleModalConfirmType} from "./SimpleModalConfirmType";

export interface SimpleModalConfirmProps {
    buttonVisible?: boolean
    visible?: boolean
    title?: React.ReactNode
    subtitle?: React.ReactNode
    onConfirm?: () => void,
    type?: SimpleModalConfirmType
    onCancel?: () => void,
    okText?: string,
    cancelText?: string
}
