import { SimpleDxfDrawObject } from "./SimpleDxfDrawObject";

export interface SimpleDxfDrawPart {
    guid: string;
    totalLength: number;
    area: number;
    isClosed: boolean;
    boundingBoxWidth: number;
    boundingBoxHeight: number;
    drawObjects: SimpleDxfDrawObject[];
    metaData1?: string;
}
