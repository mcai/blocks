import { SimpleDxfDrawPart } from "./SimpleDxfDrawPart";

export interface SimpleDxfDrawViewState {
    scale: number;

    highlightedDrawPart?: SimpleDxfDrawPart;
    selectedDrawPart?: SimpleDxfDrawPart;
}
