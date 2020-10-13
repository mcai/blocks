import React, { Component } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SimpleToastType } from "./SimpleToastType";

export function Toastify(type: SimpleToastType, text: React.ReactNode): void {
    switch (type) {
        case SimpleToastType.Success:
            toast.success(text);
            break;
        case SimpleToastType.Info:
            toast.info(text);
            break;
        case SimpleToastType.Warning:
            toast.warn(text);
            break;
        case SimpleToastType.Error:
            toast.error(text);
            break;
        default:
            throw new Error(type);
    }
}

export class SimpleToast extends Component<any, any> {
    render() {
        return <ToastContainer autoClose={3000} position={"top-center"} />;
    }
}
