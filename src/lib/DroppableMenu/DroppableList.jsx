import React from "react";

export default function DroppableList({
    children
}) {
    return (
        <React.Fragment>
            <div className="droppable-menu__droppable-list-wrapper"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'flex-start',
                    gap: '2px'
                }}
            >
                { children ? children : <React.Fragment></React.Fragment> }
            </div>
        </React.Fragment>
    )
}