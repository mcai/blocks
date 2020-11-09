import { SimpleDxfDrawObject } from "./SimpleDxfDrawObject";

export interface SimpleDxfDrawPart {
    guid: string;
    totalLength: number;
    area: number;
    isClosed: boolean;
    boundingBoxWidth: number;
    boundingBoxHeight: number;
    drawObjects: SimpleDxfDrawObject[];
    nestingId?: number;
    nestingKey?: string;
    nestingRotationInDegree?: number;
    hasSinkHoles: boolean;
    hasFreeSegments: boolean;
    needRefinement: boolean;
    isDue: boolean;
}
