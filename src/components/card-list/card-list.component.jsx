import React from "react";

import "./card-list.component.css";
import { Card } from "./card.component";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card monster={monster} key={monster.id} />
    ))}
  </div>
);
