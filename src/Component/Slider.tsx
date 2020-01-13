import * as React from "react";
import "./SliderStyle.css";
export const Slider: React.FC = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <span
      className={`outerBox ${checked ? "" : "un"}checkedOuterBox`}
      onClick={() => setChecked(!checked)}
    >
      <span className={`handle ${checked ? "" : "un"}checkedHandle`} />
      {/* <input
        type="checkbox"
        className="checkbox"
        checked={checked}
        onClick={() => setChecked(!checked)}
      /> */}
    </span>
  );
};
