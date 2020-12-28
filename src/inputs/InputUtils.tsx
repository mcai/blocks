import React from "react";

export class InputUtils {
    static render(input: React.ReactNode, visible: boolean) {
        return visible && input;
    }
}
