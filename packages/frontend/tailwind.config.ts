import daisyui from "daisyui";

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts}'],
    darkMode: "media",
    theme: {
      extend: {}
    },
    variants: {
      extend: {},
    },
    plugins: [daisyui],
    daisyui: {
        themes: [{
            petitspapiers: {
                "primary": "#942bd1",
                "secondary": "#e03cd2",
                "accent": "#3bed9a",
                "neutral": "#212831",
                "base-100": "#fcfcfd",
                "info": "#34bbe5",
                "success": "#1aa868",
                "warning": "#ed8607",
                "error": "#e53d1f",
            },
        }]
    }
};
