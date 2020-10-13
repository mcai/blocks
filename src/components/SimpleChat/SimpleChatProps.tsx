import { SimpleChatMessageType } from "./SimpleChatMessageType";

export interface SimpleChatProps {
    messages?: {
        from?: { id: string };
        date?: string;
        text?: string;
        type?: SimpleChatMessageType;
    }[];

    onSendMessage?: (message: {
        from?: { id: string };
        date?: string;
        text?: string;
        type?: SimpleChatMessageType;
    }) => void;

    placeholder?: string;
}
