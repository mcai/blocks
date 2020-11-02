import { SimpleDxfDrawObject } from "../SimpleDxfDrawObject";
import { SimpleDxfDrawPart } from "../SimpleDxfDrawPart";

export interface SimpleDxfLineViewProps {
    drawObject: SimpleDxfDrawObject;
    drawPart: SimpleDxfDrawPart;
    closed: boolean;
    highlighted: boolean;
}
