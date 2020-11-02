import { SimpleDxfDrawPart } from "./SimpleDxfDrawPart";

export interface SimpleDxfDrawFile {
    width: number;
    height: number;
    drawParts: SimpleDxfDrawPart[];
}
