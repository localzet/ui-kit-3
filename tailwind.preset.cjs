module.exports = {
    darkMode: 'class',
    theme: {
        debugScreens: {
            position: ['bottom', 'right'],
        },
        screens: {
            xs: '420px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            scale: {
                97: '.97',
            },
            borderWidth: {
                3: '3px',
            },
            borderColor: {
                light: '#F3F3F3',
                red: '#fd397a',
                'dark-background': '#151515',
                'dark-secondary': '#1e2024',
            },
            fontSize: {
                tiny: ['11px', '16px'],
            },
            colors: {
                theme: 'var(--zu-color-theme)',
                'theme-hover': 'var(--zu-color-theme-hover)',
                'dark-foreground': '#1e2024',
            },
            backgroundColor: {
                'dark-background': '#151515',
                'dark-foreground': '#171819',
                '2x-dark-foreground': '#191b1e',
                '4x-dark-foreground': '#1e2124',
                'light-background': '#f4f5f6',
                'light-300': '#e1e1ef',
            },
            boxShadow: {
                card: '0 2px 6px 0 rgba(0, 0, 0, 0.04)',
                card_red: '0 2px 6px 0 rgba(253, 57, 122, 0.04)',
            },
            screens: {
                print: { raw: 'print' },
            },
        },
    },
    plugins: [
        require('tailwindcss-debug-screens'),
        require('tailwind-scrollbar-hide'),
    ],
}
