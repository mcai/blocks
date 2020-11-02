import { SimpleDxfDrawColor } from "./SimpleDxfDrawColor";

export class SimpleDxfDrawColorExtensions {
    private static getHexPart(v: number): string {
        const h: string = v.toString(16);
        return h.length > 1 ? h : "0" + h;
    }

    static getDescription(color: SimpleDxfDrawColor): string {
        return (
            "#" +
            SimpleDxfDrawColorExtensions.getHexPart(color.red) +
            SimpleDxfDrawColorExtensions.getHexPart(color.green) +
            SimpleDxfDrawColorExtensions.getHexPart(color.blue)
        );
    }
}
