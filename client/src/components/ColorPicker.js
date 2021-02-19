import React, { useState, useEffect } from "react";
import Pickr from "@simonwep/pickr";
import "@simonwep/pickr/dist/themes/classic.min.css";

export default function ColorPicker() {

  const [colorRGB, setColor] = useState("");

  useEffect(() => {
    const pickr = Pickr.create({
      el: ".color-picker",
      theme: "classic",
      components: {
        preview: true,
        opacity: false,
        hue: true,
        interaction: {
          hex: false,
          rgba: false,
          hsla: false,
          hsva: false,
          cmyk: false,
          input: true,
          clear: true,
          save: true,
        },
      },
    });
    pickr.on("save", (...args) => {
        // If user clears the chosen color
        if (args[0] === null) setColor("255, 255, 255")

        else {
            let color = pickr.getSelectedColor().toRGBA();
            color = color.splice(0, 3).toString()
            setColor(color);
        }
    });
  }, []);

  const retreiveRGBColor = () => {
    return colorRGB;
  }

  return (
    <div className="color-div">
      <div className="color-picker"></div>
      <input
        type="hidden"
        name="color-input"
        value={colorRGB}
        onChange={() => {
            console.log("Test")
        }}
      />
      <input
        className="color-box"
        type="text"
        readOnly={true}
        style={{ background: `rgb(${colorRGB})`}}
      />
    </div>
  );
}