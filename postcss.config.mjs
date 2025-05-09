/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        tailwindcss: {},
    },
    theme: {
        extend: {
            colors: {
                'shonen-red': '#FF2E2E',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            animation: {
                'fade-in': 'fade-in 1s ease-out',
            }
        }
    }
};

export default config;
