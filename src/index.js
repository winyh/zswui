import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import { Button } from "../lib/zswui";

ReactDOM.render(
  <div className="winyh">
    <h1>Hello, Boy!</h1>
    <Button onClick={() => alert("winyh")}>winyh</Button>
  </div>,
  document.getElementById("root")
);
