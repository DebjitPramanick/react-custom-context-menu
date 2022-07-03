import { ReactNode } from "react";

export interface MenuItem {
    label: string,
    icon?: ReactNode,
    handleAction: any
}

export interface IContextMenuProps {
    menuItems: MenuItem[],
    anchorPoint: {x: number, y: number},
    backgroundType?: 'glass' | 'normal',
    theme?: 'dark' | 'light'
}

export interface PublicContextMenuProps {
    menuItems: MenuItem[],
    backgroundType?: 'glass' | 'normal',
    theme?: 'dark' | 'light'
}