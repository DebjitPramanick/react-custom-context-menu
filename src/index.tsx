import React, { useCallback, useEffect, useState } from 'react'
import ContextMenuUI from './ContextMenuUI'
import { PublicContextMenuProps } from './menu.types';
import "./styles.css"

const ContextMenu: React.FC<PublicContextMenuProps> = ({
    menuItems,
    backgroundType,
    theme
}) => {

    const [anchorPoint, setAnchorPoint] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
    const [show, setShow] = useState<boolean>(false);

    const handleContextMenu = useCallback(
        (event: MouseEvent) => {
            event.preventDefault();

            const scWidth: number = window.innerWidth;
            const scHeight: number = window.innerHeight;
            const containerWidth: number = document.getElementById("ctx-menu-container")?.clientWidth || 300;
            const containerHeight = document.getElementById("ctx-menu-container")?.clientHeight || 500;

            if((scWidth-event.pageX < containerWidth) || (scHeight-event.pageY < containerHeight)){
                setAnchorPoint({ x: event.pageX-containerWidth, y: event.pageY-containerHeight });
            } else {
                setAnchorPoint({ x: event.pageX, y: event.pageY });
            }
            
            
            setShow(true);
        },
        [setAnchorPoint, setShow]
    );

    const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

    useEffect(() => {
        document.addEventListener("contextmenu", handleContextMenu);
        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    });

    return (
        <>
            {show ? (
                <ContextMenuUI
                    menuItems={menuItems}
                    anchorPoint={anchorPoint}
                    theme={theme}
                    backgroundType={backgroundType}
                />
            ) : null}
        </>
    )
}

export default ContextMenu