import { SimpleDxfDrawObject } from "../SimpleDxfDrawObject";
import { SimpleDxfDrawPart } from "../SimpleDxfDrawPart";

export interface SimpleDxfCircleViewProps {
    drawObject: SimpleDxfDrawObject;
    drawPart: SimpleDxfDrawPart;
    highlighted: boolean;
}
