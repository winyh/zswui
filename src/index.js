import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import { Button, Input } from "../lib/zswui";

ReactDOM.render(
  <div className="winyh">
    <h1>Hello, Boy!</h1>
    <Button type="primary" onClick={() => alert("winyh")}>
      winyh
    </Button>
    <p>
      <Input />
    </p>
  </div>,
  document.getElementById("root")
);
