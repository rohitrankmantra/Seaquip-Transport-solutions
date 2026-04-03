/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        paragraph: ['Poppins', 'sans-serif'],
      },
      // Adjusted font sizes with 15-20% reduction from original values
      fontSize: {
        'xs': ['0.625rem', { lineHeight: '1rem' }],    // 10px
        'sm': ['0.75rem', { lineHeight: '1.25rem' }],   // 12px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1rem', { lineHeight: '1.75rem' }],      // 16px
        'xl': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        '2xl': ['1.375rem', { lineHeight: '2rem' }],    // 22px
        '3xl': ['1.75rem', { lineHeight: '2.25rem' }],  // 28px
        '4xl': ['2.125rem', { lineHeight: '2.5rem' }],  // 34px
        '5xl': ['2.5rem', { lineHeight: '1' }],       // 40px (h2 equivalent)
        '6xl': ['3.125rem', { lineHeight: '1' }],       // 50px (h1 equivalent)
        '7xl': ['3.75rem', { lineHeight: '1' }],       // 60px
        '8xl': ['4.5rem', { lineHeight: '1' }],       // 72px
        '9xl': ['5.5rem', { lineHeight: '1' }],       // 88px
        
        // Custom semantic scale (adjusted for 15-20% reduction from original)
        'h1': ['3.125rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }], // 50px
        'h2': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.025em' }],   // 40px
        'h3': ['1.9rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],  // 30.4px
        'h4': ['1.55rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],// 24.8px
        'h5': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],   // 20px
        'h6': ['1rem', { lineHeight: '1.35', letterSpacing: '-0.005em' }],// 16px
        'body-lg': ['1rem', { lineHeight: '1.7' }], // 16px
        'body-base': ['1rem', { lineHeight: '1.6' }],   // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],  // 14px
      },
    },
  },
  plugins: [],
}
