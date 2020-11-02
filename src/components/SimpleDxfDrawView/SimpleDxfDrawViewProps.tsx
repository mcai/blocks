import { SimpleDxfDrawFile } from "./SimpleDxfDrawFile";

export interface SimpleDxfDrawViewProps {
    thumbnailJpgFileName: string;

    dxfFileDraw?: SimpleDxfDrawFile;

    sheetWidth?: number;
    sheetHeight?: number;

    scale?: number;
}
