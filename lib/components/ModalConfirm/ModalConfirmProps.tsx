import React from "react";

export interface ModalConfirmProps {
    visible?: boolean
    width?: number
    title: React.ReactNode
    subtitle?: React.ReactNode
    onConfirm: () => void,
    onCancel: () => void,
    okText: string,
    cancelText: string
}