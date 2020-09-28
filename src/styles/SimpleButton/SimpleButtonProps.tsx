export interface SimpleButtonProps {
    disabled?: boolean;
    onClick?: () => void;
    type?: "submit" | "reset" | "button";
}
