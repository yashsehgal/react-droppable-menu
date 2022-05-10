import React from "react";

export default function DroppableItem({ children, onClick, style, id, className }) {
    const droppableItemProperties = {
        'children': children,
        'onClick': onClick,
        'style': style ? style : null,
        'id': id ? id : null,
        'className': className 
            ? `${className} droppable-menu__dropdown-lits-item-button` 
            : 'droppable-menu__dropdown-lits-item-button'
    };
    return (
        <React.Fragment>
            <button 
                className={droppableItemProperties.className}
                id={droppableItemProperties.id}
                style={droppableItemProperties.style}
                onClick={droppableItemProperties.onClick}
            >
                { droppableItemProperties.children ? droppableItemProperties.children : <React.Fragment></React.Fragment> }
            </button>
        </React.Fragment>
    )
}