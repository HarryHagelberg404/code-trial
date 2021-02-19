// https://github.com/Simonwep/pickr

// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    // container: 'body',
    theme: 'classic', // or 'monolith', or 'nano'

    components: {

        // Main components
        preview: true,
        opacity: false,
        hue: true,

        // Input / output Options
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
});