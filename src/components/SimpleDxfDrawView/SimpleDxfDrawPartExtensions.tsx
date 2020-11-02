import { SimpleDxfDrawPart } from "./SimpleDxfDrawPart";

export class SimpleDxfDrawPartExtensions {
    static getDescription(drawPart: SimpleDxfDrawPart) {
        let metaData1 = `GUID:${drawPart.guid}`;

        if (drawPart.metaData1) {
            metaData1 = `配件#${drawPart.metaData1}`;
        }

        return `${metaData1}
                ,宽高:${drawPart.boundingBoxWidth.toFixed(2)}x${drawPart.boundingBoxHeight.toFixed(2)}毫米^2
                ,周长:${drawPart.totalLength.toFixed(2)}毫米,面积:${drawPart.area.toFixed(2)}毫米^2
                ,零碎:${!drawPart.isClosed ? "是" : "否"}`;
    }
}
