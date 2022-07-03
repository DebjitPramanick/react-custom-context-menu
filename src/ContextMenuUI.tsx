import React from 'react'
import { IContextMenuProps, MenuItem } from './menu.types'

const ContextMenuUI: React.FC<IContextMenuProps> = ({
    menuItems,
    anchorPoint,
    backgroundType = 'normal',
    theme = 'dark'
}) => {
    // Getting theme type
    const isLight = theme === 'light';
    const isDark = theme === 'dark';

    // Getting background type
    const isGlass = backgroundType === 'glass';
    const isNormal = backgroundType === 'normal';

    const getBgColor = () => {
        if(isLight) {
            if(isNormal) {
                return '#fff7e1';
            } else return '#ffffff52';
        }
        else if(isDark) {
            if(isNormal) {
                return '#4a4a4a';
            } else return '#00000052';
        }
    }

    const menuBgColor = getBgColor();

    return (
        <div id='ctx-menu-container'
            style={{
                background: menuBgColor,
                top: anchorPoint.y,
                left: anchorPoint.x,
                backdropFilter: `${isGlass ? 'blur(4px)' : 'blur(0px)'}`
            }}>
            <ul className='ctx-menu'>
                {menuItems.map((item: MenuItem, index: number) =>
                    <li className={`ctx-menu-item ${isLight && 'light'} ${isGlass && 'glass'}`} onClick={item.handleAction} key={index}>
                        {item.icon && (item.icon)}
                        <p>{item.label}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ContextMenuUI