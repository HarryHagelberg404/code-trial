import React, { useState, useEffect, Component } from 'react'
import Pickr from '@simonwep/pickr'
import '@simonwep/pickr/dist/themes/classic.min.css'

function ColorPicker() {

    const [colorRGB, setColor] = useState('255, 255, 255')
    const [colorPickr, setPicker] = useState({
        pickr: undefined
    })

    // useEffect(() => {
    //     const color = colorPickr.getSelectedColor().toRGBA()
    //     console.log(color.splice(0, 3).toString())
    //     setColor(color.splice(0, 3).toString())
    // }, [colorRGB])
    

    useEffect(() => {
        setPicker({
            pickr: Pickr.create({
                el: '.color-picker',
                theme: 'classic',
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
                        save: true
                    }
                }
            })
        });
    })
    
    console.log(colorPickr, "hej")
    return (
        <div className="color-div">
            <input className="color-box" type="text" readOnly={true} name="weight" style={{ background: "black" }} />
            <div className="color-picker"></div>
        </div>
    );
}

export default ColorPicker;
