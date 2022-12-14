import React, { useState } from "react";
import "./ToggleStyle.css";

const Toggle = () => {
  const [on, setOn] = useState(false);
  return (
    <>
      <div
        className={`toggle ${on ? "active" : ""}`}
        onClick={() => setOn(!on)}
      >
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </>
  );
};

export default Toggle;
