/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'rgb(0, 0, 2)',
          soft: '#0a0a12',
          line: '#1a1a24',
        },
        paper: '#F6F4EF',
        signal: {
          DEFAULT: '#3FB8AF',
          dim: '#2E8B84',
          bright: '#7EE8DE',
        },
        amber: {
          DEFAULT: '#E8A33D',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
