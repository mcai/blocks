import { SimpleDxfDrawColor } from "./SimpleDxfDrawColor";

export interface SimpleDxfDrawObject {
    type: string;
    length: number;
    area: number;
    isClosed: boolean;
    boundingBoxWidth: number;
    boundingBoxHeight: number;
    fill: SimpleDxfDrawColor;
    stroke: SimpleDxfDrawColor;
    strokeWidth: number;
    args: number[];
    nestingId?: number;
    nestingKey?: string;
    nestingRotationInDegree?: number;
}
