const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			keyframes: {
				blink: {
					'0%, 75%, 100%': {
						opacity: 0
					},
					'10%, 65%': {
						opacity: 1
					}
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
