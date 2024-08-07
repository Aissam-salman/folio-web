import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        colors: {
            'transparent': {
                DEFAULT: "transparent",
            },
            'tropical_indigo': {
                DEFAULT: '#8e7cc3',
                100: '#1a142c',
                200: '#342858',
                300: '#4f3d84',
                400: '#6952af',
                500: '#8e7cc3',
                600: '#a698cf',
                700: '#bcb1db',
                800: '#d2cbe7',
                900: '#e9e5f3'
            },
            'raisin_black': {
                DEFAULT: '#1b1725',
                100: '#060508',
                200: '#0b090f',
                300: '#110e17',
                400: '#16131e',
                500: '#1b1725',
                600: '#443a5d',
                700: '#6c5d94',
                800: '#9c91ba',
                900: '#cec8dc'
            },
            'engineering_orange': {
                DEFAULT: '#ba1200',
                100: '#250400',
                200: '#490700',
                300: '#6e0b00',
                400: '#930f00',
                500: '#ba1200',
                600: '#f91900',
                700: '#ff4f3b',
                800: '#ff897c',
                900: '#ffc4be'
            },
            'dun': {
                DEFAULT: '#dcccbb',
                100: '#36291c',
                200: '#6c5237',
                300: '#a27c53',
                400: '#c1a486',
                500: '#dcccbb',
                600: '#e3d7c9',
                700: '#eae1d7',
                800: '#f1ebe4',
                900: '#f8f5f2'
            },
            'earth_yellow': {
                DEFAULT: '#eab464',
                100: '#3a2608',
                200: '#754c10',
                300: '#af7318',
                400: '#e29728',
                500: '#eab464',
                600: '#eec281',
                700: '#f2d2a1',
                800: '#f6e1c0',
                900: '#fbf0e0'
            }
        }
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
};
export default config;
