export interface SimpleNavTabsItem {
    href: string
    text: string
    badgeText: { visible: boolean, text: string }
    onClick: () => void
    active: boolean
}
