import { SimpleDxfDrawFile } from "./SimpleDxfDrawFile";
import { SimpleDxfDrawPart } from "./SimpleDxfDrawPart";

export interface SimpleDxfDrawViewProps {
    thumbnailJpgFileName: string;

    dxfFileDraw?: SimpleDxfDrawFile;

    sheetWidth?: number;
    sheetHeight?: number;

    scale?: number;

    onHighlightedChanged?: (part: SimpleDxfDrawPart, highlighted: boolean) => void;
    onClick?: (part: SimpleDxfDrawPart) => void;

    showNeedRefinementOnly: boolean;
}
