import { SimpleDxfDrawPart } from "./SimpleDxfDrawPart";

export class SimpleDxfDrawPartExtensions {
    static getDescription(drawPart: SimpleDxfDrawPart) {
        let idText = `GUID:${drawPart.guid}`;

        if (drawPart.nestingId) {
            idText = `配件#${drawPart.nestingId}`;
        }

        return `${idText}
                ,宽高:${drawPart.boundingBoxWidth.toFixed(2)}x${drawPart.boundingBoxHeight.toFixed(2)}毫米^2
                ,周长:${drawPart.totalLength.toFixed(2)}毫米,面积:${drawPart.area.toFixed(2)}毫米^2
                ,零碎:${!drawPart.isClosed ? "是" : "否"}`;
    }
}
