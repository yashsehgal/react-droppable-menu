import React from "react";
import { DroppableItem, DroppableList, DroppableMenu } from "./lib";

import { FaCog } from 'react-icons/fa';

export default function App() {
  return (
    <React.Fragment>
      <div className="app-top-spacing" style={{ paddingTop: '4rem' }} />
      <DroppableMenu icon={<FaCog />} title="Settings">
        <DroppableList>
          <DroppableItem>Frontend Engineer</DroppableItem>
          <DroppableItem>Product Designer</DroppableItem>
          <DroppableItem>UI Designer</DroppableItem>
          <DroppableItem>DevOps Engineer</DroppableItem>
        </DroppableList>
      </DroppableMenu>
    </React.Fragment>
  )
}