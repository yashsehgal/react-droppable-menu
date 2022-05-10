import React, { useEffect, useState } from "react";
import './styles/index.css';


export default function DroppableMenu({
    children, className, style, onClick, icon, title
}) {
    const [dropdownListRef, setDropdownList] = useState('none');
    const droppableMenuProperties = {
        'children': children,
        'className': className ? `${className} react-droppable-menu__droppable-menu-button ` : `react-droppable-menu__droppable-menu-button `,
        'style': style ? style : null,
        'onClick': onClick,
        'icon': icon ? icon : null,
        'title': title ? title : null
    };

    useEffect(() => {
        const dropdownButton = document.getElementById('dropdown-button');
        dropdownButton.addEventListener("focusin", () => setDropdownList('block'));
        dropdownButton.addEventListener("focusout", () => setDropdownList('none'));
    });

    return (
        <React.Fragment>
            <button className={
                droppableMenuProperties.className 
                    + (droppableMenuProperties.icon ? 'droppable-menu-button_circle' : 'droppable-menu-button_rounded-btn')
                } 
                id="dropdown-button"
                // onClick={() => {
                //     if (dropdownListRef && dropdownListRef.toLowerCase() === 'block') {
                //         setDropdownList('none');
                //     } else {
                //         setDropdownList('block');
                //     }
                // }}
            >
                <div className="droppable-menu_button-content-wrapper">
                    <div style={{ width: 'fit-content', height: 'fit-content' }} id="droppable-menu-icon-slot">
                        { droppableMenuProperties.icon }
                    </div>
                    <div style={{ width: 'fit-content', height: 'fit-content' }} id="droppable-menu-title-slot">
                        { droppableMenuProperties.title }
                    </div>
                </div>
            </button>
            <div className="droppable-menu__dropdown-menu-container-screen" style={{ display: dropdownListRef, background: '#ff000020' }}>
                <div className="droppable-menu__dropdown-content-wrapper" style={{ display: dropdownListRef }}>
                    { droppableMenuProperties.children 
                        ? droppableMenuProperties.children 
                        : <React.Fragment></React.Fragment> 
                    }
                </div>
            </div>
        </React.Fragment>
    )
}