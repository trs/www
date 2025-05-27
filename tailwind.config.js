/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
      animation: {
        'gradient-move': 'gradientMove 6s ease infinite',
        'glow-move': 'glowMove 6s ease infinite',
      },
			keyframes: {
				gradientMove: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
				glowMove: {
					'0%, 100%': {
						boxShadow: '0 0 20px #06b6d4',
					},
					'25%': {
						boxShadow: '0 0 20px #8b5cf6',
					},
					'50%': {
						boxShadow: '0 0 20px #ec4899',
					},
					'75%': {
						boxShadow: '0 0 20px #8b5cf6',
					},
				},
				blink: {
					'0%, 75%, 100%': {
						opacity: 0
					},
					'10%, 65%': {
						opacity: 1
					}
				}
			},

			colors: {
				'polar-night-1': '#4C566A',
				'polar-night-2': '#434C5E',
				'polar-night-3': '#3B4252',
				'polar-night-4': '#2e3440',

				'snow-storm-1': '#ECEFF4',
				'snow-storm-2': '#E5E9F0',
				'snow-storm-3': '#D8DEE9',

				'frost-1': '#5E81AC',
				'frost-2': '#81A1C1',
				'frost-3': '#88C0D0',
				'frost-4': '#8FBCBB',

				'aurora-1': '#B48EAD',
				'aurora-2': '#A3BE8C',
				'aurora-3': '#EBCB8B',
				'aurora-4': '#D08770',
				'aurora-5': '#BF616A',

				'mac-red': '#ED6A5E',
				'mac-yellow': '#F5BE4F',
				'mac-green': '#61C554',
			}
		}
	},
  plugins: [],
}
