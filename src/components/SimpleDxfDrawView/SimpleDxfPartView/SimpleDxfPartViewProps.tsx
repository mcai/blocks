import { SimpleDxfDrawPart } from "../SimpleDxfDrawPart";

export interface SimpleDxfPartViewProps {
    drawPart: SimpleDxfDrawPart;
    onHighlightedChanged?: (highlighted: boolean) => void;
    onClick?: () => void;
}
