/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            'yahei': ['Microsoft YaHei', 'sans-serif'],
            'heiti': ['SimHei', 'sans-serif'],
            'songti': ['SimSun', 'serif'],
            'kaiti': ['KaiTi', 'serif'],
            'lishu': ['LiSu', 'cursive'],
            'xihei': ['STXihei', 'sans-serif'],
            'pingfang': ['PingFang SC', 'sans-serif'],
        },
        extend: {
            colors: {
                'primary': '#111827',
            }
        },
    },
    plugins: [],
}
