export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                medical: {
                    primary: '#0F3D5E', // Deep medical blue
                    secondary: '#2EC4B6', // Soft accent
                    light: '#F4F6F8', // Light gray
                    white: '#FFFFFF', // White
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Professional font
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'fade-in-down': 'fadeInDown 1s ease-out forwards',
                'fade-in-left': 'fadeInLeft 1s ease-out forwards',
                'bounce-slow': 'bounceSlow 3s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                bounceSlow: {
                    '0%, 100%': { transform: 'translateY(-5%)', "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)" },
                    '50%': { transform: 'translateY(0)', "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)" },
                },
            },
        },
    },
    plugins: [],
}
