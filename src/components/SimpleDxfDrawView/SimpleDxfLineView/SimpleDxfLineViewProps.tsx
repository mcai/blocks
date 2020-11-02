import { SimpleDxfDrawObject } from "../SimpleDxfDrawObject";

export interface SimpleDxfLineViewProps {
    drawObject: SimpleDxfDrawObject;
    closed: boolean;
    highlighted: boolean;
}
