import React from "react";
import { DroppableMenu } from "./lib";

import { FaCog } from 'react-icons/fa';

export default function App() {
  return (
    <React.Fragment>
      <DroppableMenu icon={<FaCog />} title="Settings">
        It's working
      </DroppableMenu>
    </React.Fragment>
  )
}