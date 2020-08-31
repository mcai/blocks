export interface NavTabItem {
    href: string
    text: string
    badgeText: { visible: boolean, text: string }
    onClick: () => void
    active: boolean
}
