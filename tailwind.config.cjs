module.exports = {
    presets: [require('./tailwind.preset.cjs')],
    content: [
        './index.html',
        './demo/**/*.{html,js,jsx,ts,tsx,vue}',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
}
